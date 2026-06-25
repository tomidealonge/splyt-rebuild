import { useGSAP } from '@gsap/react'
import PlayButton from './PlayButton'
import { useRef } from 'react'
import gsap from 'gsap'

function ClipVideoComponent() {
  const videoWrapper = useRef(null)

  useGSAP(() => {
    gsap.set(videoWrapper.current, {
      clipPath: 'circle(8.5% at 50% 50%)',
    })
    gsap.to(videoWrapper.current, {
      scrollTrigger: {
        trigger: videoWrapper.current,
        start: 'top 0%',
        end: '+=200%',
        // markers: true,
        scrub: 1.5,
        pin: true,
      },
      ease: 'power1.inOut',
      clipPath: 'circle(100% at 50% 50%)',
    })
  })
  return (
    <div
      ref={videoWrapper}
      className="relative h-dvh border-8 border-amber-950 -translate-y-[25vh] z-[1]"
    >
      <div className="absolute inset-0">
        <video
          src="/videos/pin-video.mp4"
          autoPlay
          muted
          playsInline
          loop
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="aspect-square cursor-pointer absolute-center w-[12.755vw] max-w-[250px] min-w-[175px]">
        <PlayButton />
      </div>
    </div>
  )
}

export default ClipVideoComponent
