import { useEffect, useState } from 'react'

type AssetType = 'image' | 'video'

interface Asset {
  type: AssetType
  src: string
}

interface UsePreloadAssetsOptions {
  assets?: Asset[]
  fonts?: boolean
  timeout?: number
}

interface UsePreloadAssetsReturn {
  ready: boolean
  progress: number
}

export function usePreloadAssets({
  assets = [],
  fonts = false,
  timeout = 10000,
}: UsePreloadAssetsOptions): UsePreloadAssetsReturn {
  const [ready, setReady] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let cancelled = false

    const totalAssets = assets.length + (fonts ? 1 : 0)

    if (totalAssets === 0) {
      setProgress(100)
      setReady(true)
      return
    }

    let loadedAssets = 0

    const updateProgress = () => {
      if (cancelled) return

      loadedAssets++

      const nextProgress = Math.round((loadedAssets / totalAssets) * 100)

      setProgress(nextProgress)

      if (loadedAssets === totalAssets) {
        setReady(true)
      }
    }

    const withTimeout = (promise: Promise<void>) =>
      Promise.race([
        promise,
        new Promise<void>((resolve) => {
          setTimeout(resolve, timeout)
        }),
      ])

    const loadImage = (src: string) =>
      new Promise<void>((resolve) => {
        const img = new Image()

        img.onload = () => resolve()
        img.onerror = () => resolve()

        img.src = src
      })

    const loadVideo = (src: string) =>
      new Promise<void>((resolve) => {
        const video = document.createElement('video')

        video.preload = 'auto'
        video.muted = true
        video.playsInline = true

        video.onloadeddata = () => resolve()
        video.onerror = () => resolve()

        video.src = src
      })

    const tasks: Promise<void>[] = []

    if (fonts) {
      tasks.push(withTimeout(document.fonts.ready).finally(updateProgress))
    }

    assets.forEach((asset) => {
      const promise =
        asset.type === 'image' ? loadImage(asset.src) : loadVideo(asset.src)

      tasks.push(withTimeout(promise).finally(updateProgress))
    })

    Promise.all(tasks).finally(() => {
      if (!cancelled) {
        setProgress(100)
        setReady(true)
      }
    })

    return () => {
      cancelled = true
    }
  }, [assets, fonts, timeout])

  return {
    ready,
    progress,
  }
}
