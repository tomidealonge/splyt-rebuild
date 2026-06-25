import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { useRef } from 'react'

function MessageComponent() {
  const firstText = useRef(null)
  const secondText = useRef(null)
  const slantedText = useRef(null)
  const bodyText = useRef(null)
  const messageSection = useRef(null)

  useGSAP(() => {
    let firstTextSplit = new SplitText(firstText.current, {
      type: 'words, chars',
    })
    let secondTextSplit = new SplitText(secondText.current, {
      type: 'words, chars',
    })
    gsap.to(firstTextSplit.chars, {
      color: '#FAEADE',
      ease: 'power2.out',
      stagger: 0.15,
      scrollTrigger: {
        trigger: firstText.current,
        start: 'top 80%',
        end: 'bottom 80%',
        scrub: true,
        // markers: true,
      },
    })
    gsap.to(slantedText.current, {
      ease: 'circ.out',
      duration: 0.8,
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      scrollTrigger: {
        trigger: slantedText.current,
        start: 'top 80%',
        end: 'bottom 90%',
        // markers: true,
      },
    })
    gsap.to(secondTextSplit.chars, {
      color: '#FAEADE',
      stagger: 0.15,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: secondText.current,
        start: 'top 90%',
        end: 'bottom 65%',
        // markers: true,
        scrub: true,
      },
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: messageSection.current,
        scrub: 1,
        // markers: true,
        start: 'top 50%',
        end: 'bottom 50%',
      },
    })

    tl.to(
      firstText.current,
      {
        yPercent: 13,
        ease: 'power2.out',
      },
      '<'
    )
    tl.to(
      secondText.current,
      {
        yPercent: 8,
        ease: 'power2.out',
      },
      '<'
    )
    tl.to(
      slantedText.current,
      {
        yPercent: -5,
        ease: 'power2.out',
      },
      '<'
    )

    gsap.from(bodyText.current, {
      opacity: 0,
      yPercent: 20,
      ease: 'power1.out',
    })
  })

  return (
    <div
      ref={messageSection}
      className="bg-[#7F3B2D] pt-[240px] md:pt-[108px] pb-[148px] md:pb-[209px] relative text-center flex-center flex-col"
    >
      <div
        ref={firstText}
        className="general-title max-w-[902px] w-[50.02vw] min-w-[347px] text-[#FAEADE10]"
      >
        STIR UP YOUR FEARLESS PAST AND
      </div>
      <div
        ref={slantedText}
        style={{
          clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
        }}
        className="slanted-title text-[#7F3B2D] z-10 border-[#7F3B2D] md:-translate-y-[5px] bg-[#E3A458]"
      >
        fuel up
      </div>
      <div
        ref={secondText}
        className="general-title max-w-[1199px] w-[65.173vw] min-w-[347px] md:-translate-y-[55px] text-[#FAEADE10] mb-[50px]"
      >
        YOUR FUTURE WITH EVERY GULP OF PERFECT Protein
      </div>
      <div
        ref={bodyText}
        className="font-paragraph max-w-[312px] text-[14px] text-cream"
      >
        Rev up your rebel spirit and feed the adventure of life with SPYLT,
        where you're one chug away from epic nostalgia and fearless fun.
      </div>
    </div>
  )
}

export default MessageComponent
