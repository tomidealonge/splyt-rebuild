import { useGSAP } from '@gsap/react'
import { flavorLists } from '../constants'
import SingleFlavour from './SingleFlavour'
import gsap from 'gsap'
import { useRef } from 'react'
import { SplitText } from 'gsap/all'
import ButtonComponent from './ButtonComponent'

function FlavoursComponent() {
  const titleOne = useRef(null)
  const titleTwo = useRef(null)
  const slantedTitle = useRef(null)
  const wrapper = useRef(null)
  const slider = useRef(null)
  const sliderInner = useRef(null)

  useGSAP(() => {
    gsap.registerPlugin(SplitText)

    const textTl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper.current,
        start: 'top 50%',
      },
    })

    const titleOneSplit = new SplitText(titleOne.current, { type: 'chars' })
    const titleTwoSplit = new SplitText(titleTwo.current, { type: 'chars' })

    textTl
      .from(titleOneSplit.chars, {
        yPercent: 200,
        ease: 'power1.out',
        stagger: 0.02,
      })
      .fromTo(
        slantedTitle.current,
        { clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)' },
        {
          clipPath: 'polygon(0% 0, 100% 0, 100% 100%, 0% 100%)',
          ease: 'circ.out',
          duration: 0.7,
        },
        '-=0.2'
      )
      .from(
        titleTwoSplit.chars,
        {
          yPercent: 200,
          ease: 'power1.out',
          stagger: 0.02,
        },
        '-=0.6'
      )

    const mm = gsap.matchMedia()

    mm.add('(min-width: 768px)', () => {
      if (sliderInner.current) {
        gsap.to(slider.current, {
          scrollTrigger: {
            trigger: wrapper.current,
            start: 'top 0%',
            end: `+=${sliderInner.current.offsetWidth}`,
            pin: true,
            scrub: 1.5,
          },
          x: -sliderInner.current.offsetWidth,
          ease: 'power1.inOut',
        })

        const textParallaxTl = gsap.timeline({
          scrollTrigger: {
            trigger: wrapper.current,
            start: 'top top',
            scrub: true,
            // markers: true,
          },
        })

        textParallaxTl
          .to(
            '.title-1',
            { xPercent: -30, ease: 'power1.out', duration: 0.5 },
            0
          )
          .to(
            slantedTitle.current,
            { xPercent: -24, ease: 'power1.out', duration: 0.5 },
            0
          )
          .to(
            '.title-2',
            { xPercent: -16, ease: 'power1.out', duration: 0.5 },
            0
          )
      }
    })
  })

  return (
    <div
      ref={wrapper}
      className="overflow-x-hidden bg-cream pb-10 md:h-[100vh] flex-col justify-center items-center"
    >
      <div
        ref={slider}
        className="flex flex-col md:flex-row items-center pt-[219px] pb-[118px] -mt-12 h-full gap-y-[70px]"
      >
        <div className="flex-center flex-col shrink-0 md:ml-[120px] md:mr-[100px]">
          <div className="general-title title-1 text-walnut overflow-hidden">
            <div ref={titleOne}>We have 4</div>
          </div>
          <div
            ref={slantedTitle}
            className="slanted-title z-10 bg-caramel text-cream"
          >
            Freaking
          </div>
          <div className="general-title title-2 relative -top-10 text-walnut overflow-hidden">
            <div ref={titleTwo}>delicious flavors</div>
          </div>
        </div>
        <div
          className="flex md:flex-row flex-col gap-x-[15.306vw] xl:gap-x-[300] gap-y-[112px] w-[100%] md:w-auto items-center"
          ref={sliderInner}
        >
          {flavorLists.map((item) => (
            <SingleFlavour
              key={item.name}
              color={item.color}
              rotation={item.rotation}
              name={item.name}
            />
          ))}
        </div>
      </div>
      <div className="flex-center -mt-10">
        <ButtonComponent text="Shop in Store" color="walnut" bg="bronze" />
      </div>
    </div>
  )
}

export default FlavoursComponent
