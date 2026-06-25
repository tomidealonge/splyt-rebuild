import { useGSAP } from '@gsap/react'
import { cards } from '../constants'
import TestimonialCard from './TestimonialCard'
import { useRef } from 'react'
import gsap from 'gsap'

interface testimonial {
  src: string
  rotation: string
  name: string
  img: string
  translation: string
}

function TestimonialComponent() {
  const titleOne = useRef(null)
  const titleTwo = useRef(null)
  const titleThree = useRef(null)
  const wrapper = useRef(null)

  useGSAP(() => {
    const textTl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper.current,
        start: 'top 90%',
        end: '+=200%',
        scrub: true,
        markers: true,
      },
    })

    textTl
      .to(
        titleOne.current,
        {
          xPercent: 40,
          ease: 'power1.inOut',
        },
        0
      )
      .to(
        titleTwo.current,
        {
          xPercent: 10,
          ease: 'power1.inOut',
        },
        0
      )
      .to(
        titleThree.current,
        {
          xPercent: -20,
          ease: 'power1.inOut',
        },
        0
      )

    gsap.from('.testimonial-card', {
      scrollTrigger: {
        trigger: wrapper.current,
        start: 'top 0',
        end: '+=200%',
        pin: true,
        scrub: 1.5,
      },
      stagger: 0.25,
      yPercent: 150,
      ease: 'power1.inOut',
    })
  })

  return (
    <div ref={wrapper} className="bg-cream h-dvh -mt-[100vh] relative z-20">
      <div className="text-center">
        <div ref={titleOne} className="testimonial-title text-charcoal">
          <h3>What's</h3>
        </div>
        <div ref={titleTwo} className="testimonial-title text-bronze">
          <h3>Everyone</h3>
        </div>
        <div ref={titleThree} className="testimonial-title text-charcoal">
          <h3>Saying</h3>
        </div>
      </div>
      <div className="absolute md:ps-52 flex justify-center items-center inset-0">
        {cards.map((testimony: testimonial) => (
          <TestimonialCard testimonial={testimony} key={testimony.name} />
        ))}
      </div>
    </div>
  )
}

export default TestimonialComponent
