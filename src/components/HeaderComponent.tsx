import ButtonComponent from './ButtonComponent'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { SplitText } from 'gsap/SplitText'
import { useScreenType } from '../hooks/useScreenSize'

function HeaderComponent() {
  const header = useRef<HTMLDivElement>(null)
  const headline = useRef<HTMLDivElement>(null)
  const slantedText = useRef<HTMLDivElement>(null)
  const heroContent = useRef<HTMLDivElement>(null)
  const { isMobile } = useScreenType()

  useGSAP(() => {
    gsap.to(header.current, {
      rotation: 3,
      scale: 0.95,
      yPercent: 20,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: header.current,
        start: '1% top',
        end: 'bottom top',
        scrub: true,
      },
    })

    let split = new SplitText(headline.current, { type: 'chars' })

    const tl = gsap.timeline()
    tl.to(heroContent.current, {
      opacity: 1,
      y: 0,
      ease: 'power2.out',
      duration: 0.7,
    })
    tl.fromTo(
      slantedText.current,
      { clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)' },
      {
        clipPath: 'polygon(0% 0, 100% 0, 100% 100%, 0% 100%)',
        ease: 'circ.out',
        duration: 0.7,
      },
      '-=0.3'
    ).from(
      split.chars,
      {
        stagger: 0.02,
        yPercent: 200,
        ease: 'power1.out',
      },
      '-=0.5'
    )
  })

  return (
    <header
      ref={header}
      className="flex-center relative max-h-[1200px] md:py-[310px] pt-[82px] h-[100dvh] bg-cream"
    >
      <video
        src="/videos/hero-bg.mp4"
        autoPlay
        muted
        className="absolute inset-0 w-full h-full object-cover"
      />
      <img
        className="absolute inset-0 w-full object-contain"
        src="/images/hero-bg.png"
      />
      {isMobile && (
        <img
          className="absolute top-auto bottom-0 w-full object-contain"
          src="/images/hero-img.png"
        />
      )}
      <div
        ref={heroContent}
        className="flex-center relative z-10 self-start md:self-auto flex-col opacity-0 translate-y-[20%]"
      >
        <div className="mb-[23px] md:mb-[45px]">
          <div className="general-title overflow-hidden">
            <h1 ref={headline}>FREAKING DELICIOUS</h1>
          </div>
          <div
            ref={slantedText}
            className="slanted-title border-cream bg-caramel text-cream"
          >
            <h1>Protein + Caffeine</h1>
          </div>
        </div>
        <div className="flex-center flex-col">
          <div className="font-paragraph md:max-w-[410px] max-w-[310px] text-center text-[14.2px] mb-[40px] md:mb-[45px]">
            <p>
              Live life to the fullest with SPYLT: Shatter boredom and embrace
              your inner kid with every deliciously smooth chug.
            </p>
          </div>
          <ButtonComponent text="Chug the SPYLT" color="walnut" bg="bronze" />
        </div>
      </div>
    </header>
  )
}

export default HeaderComponent
