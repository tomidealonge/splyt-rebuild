import { useEffect, useState } from 'react'

type ScreenType = 'mobile' | 'landscape-mobile' | 'tablet' | 'desktop'

const getScreenType = (): ScreenType => {
  if (
    window.matchMedia('(max-width: 767px) and (orientation: portrait)').matches
  ) {
    return 'mobile'
  }

  if (
    window.matchMedia('(max-width: 932px) and (orientation: landscape)').matches
  ) {
    return 'landscape-mobile'
  }

  if (window.matchMedia('(min-width: 768px) and (max-width: 1024px)').matches) {
    return 'tablet'
  }

  return 'desktop'
}

export function useScreenType() {
  const [screenType, setScreenType] = useState<ScreenType>(() =>
    typeof window === 'undefined' ? 'desktop' : getScreenType()
  )

  useEffect(() => {
    const mediaQueries = [
      window.matchMedia('(max-width: 767px) and (orientation: portrait)'),
      window.matchMedia('(max-width: 932px) and (orientation: landscape)'),
      window.matchMedia('(min-width: 768px) and (max-width: 1024px)'),
      window.matchMedia('(min-width: 1025px)'),
    ]

    const update = () => setScreenType(getScreenType())

    mediaQueries.forEach((mq) => mq.addEventListener('change', update))

    return () => {
      mediaQueries.forEach((mq) => mq.removeEventListener('change', update))
    }
  }, [])

  return {
    screenType,
    isMobile: screenType === 'mobile',
    isLandscapeMobile: screenType === 'landscape-mobile',
    isTablet: screenType === 'tablet',
    isDesktop: screenType === 'desktop',
  }
}
