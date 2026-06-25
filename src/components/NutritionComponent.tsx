import { useGSAP } from '@gsap/react'
import { nutrientLists } from '../constants'
import WavySVG from './WavySVG'
import { useRef } from 'react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'

function NutritionComponent() {
  const title = useRef(null)
  const slantedTitle = useRef(null)
  const bodyMessage = useRef(null)
  const content = useRef(null)

  useGSAP(() => {
    const titleSplit = new SplitText(title.current, { type: 'chars' })

    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: content.current,
        start: 'top 50%',
      },
    })

    titleTl
      .fromTo(
        slantedTitle.current,
        { clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)' },
        {
          clipPath: 'polygon(0% 0, 100% 0, 100% 100%, 0% 100%)',
          ease: 'circ.out',
          duration: 0.7,
        }
      )
      .from(
        titleSplit.chars,
        {
          yPercent: 200,
          ease: 'power1.inOut',
          stagger: 0.02,
        },
        '-=0.6'
      )
  })

  return (
    <div className="bg-[radial-gradient(62.5%_83.33%_at_50%_50%,#F3ECE2_0%,#DCCCB0_100%)] relative md:pt-[456px] pt-[120px]">
      <div className="w-max-[1920px] md:aspect-[1920/291.27] aspect-[430/65.27] absolute inset-0 bottom-auto">
        <WavySVG />
      </div>
      <div className="relative w-full pb-[62px]">
        <div
          ref={content}
          className="flex-col z-10 flex md:flex-row justify-between items-stretch md:items-start px-[30px] gap-y-[24px] pb-[307px]"
        >
          <div className="">
            <div className="general-title overflow-hidden">
              <div ref={title}>It still does</div>
            </div>
            <div
              ref={slantedTitle}
              className="slanted-title -mt-[10px] relative z-10 text-cream bg-caramel"
            >
              BODY GOOD
            </div>
          </div>
          <div className="md:w-[410px] font-paragraph md:text-right w-[235px] text-walnut">
            <p ref={bodyMessage}>
              Milk contains a wide array of nutrients, including vitamins,
              minerals, and protein, and this is lactose free
            </p>
          </div>
        </div>

        <img
          className="md:aspect-[1920/984] left-[50%] -translate-x-[50%] aspect-[430/533] object-cover max-w-[1920px] w-[100%] h-[430px] md:h-auto absolute top-auto bottom-0"
          src={'/images/big-img.png'}
        />

        <div className="bg-vanilla border-[9px] flex justify-between relative py-[37px] px-[20px] border-linen max-w-[1335px] md:w-[69%] mx-auto rounded-[192px]">
          {nutrientLists.map((nutrient, index) => (
            <div
              key={nutrient.label}
              className={`flex justify-center grow items-center ${
                index + 1 < nutrientLists.length &&
                'border-r-[1px] border-r-espresso'
              }`}
            >
              <div className="text-espresso border-r-espresso">
                <div className="font-paragraph text-[18.28px] mb-[14px]">
                  {nutrient.label}
                </div>
                <div>
                  <div className="font-paragraph text-[13.39px] mb-[4px] text-center md:text-left">
                    up to
                  </div>
                  <div className="text-[36px] font-bold leading-[-0.96px]">
                    {nutrient.amount}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NutritionComponent
