import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import ClipVideoComponent from './ClipVideoComponent'

function BenefitsComponent() {
  const wrapper = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const titlesArray = gsap.utils.toArray<HTMLElement>(
      '.benefit-title',
      wrapper.current
    )

    titlesArray.forEach((title, index) => {
      gsap.set(title, {
        clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)',
      })

      gsap.to(title, {
        clipPath: 'polygon(0% 0, 100% 0, 100% 100%, 0% 100%)',
        ease: 'power1.inOut',
        delay: index * 0.2,
        duration: 0.7,
        scrollTrigger: {
          trigger: title,
          start: 'top 70%',
          // markers: true,
        },
      })
    })
  }, [])

  return (
    <div className="bg-charcoal">
      <div
        ref={wrapper}
        className="flex flex-col gap-y-[68px] items-center  pt-[50px] md:pt-[68px]"
      >
        <div className="max-w-[410px] font-paragraph text-center text-[16px] text-cream">
          Unlock the Advantages: <br />
          Explore the Key Benefits of Choosing SPYLT
        </div>
        <div className="flex flex-col items-center md:mb-[27px] mb-[162px]">
          <div className="benefit-title px-2  flex-1 text-center relative z-[4] rotate-[3deg] md:w-[38.163vw] pb-3 max-w-[748px] border-charcoal bg-[#C88E64] text-cream">
            Shelf stable
          </div>
          <div className="benefit-title px-2  text-center -rotate-[1deg] z-[3] md:w-[54.337vw] pb-3 max-w-[1065px] border-charcoal bg-cream text-charcoal">
            Protein + Caffeine
          </div>
          <div className="benefit-title px-2  text-center z-[2] rotate-[2deg] md:w-[63.673vw] pb-3 max-w-[1248px] border-charcoal bg-[#7F3B2D] text-cream">
            Infinitely recyclable
          </div>
          <div className="benefit-title px-2  text-center z-[1] -rotate-[5deg] md:w-[38.673vw] pb-3 max-w-[758px] border-charcoal bg-[#FED775] text-charcoal">
            Lactose free
          </div>
        </div>
        <div className=" font-paragraph text-center text-[16px] text-cream">
          And much more..
        </div>
      </div>
      <ClipVideoComponent />
    </div>
  )
}

export default BenefitsComponent
