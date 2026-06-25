import gsap from 'gsap'
import { useEffect, useRef } from 'react'

interface Props {
  color: string
  rotation: string
  name: string
}

function SingleFlavour(props: Props) {
  const elements = useRef<HTMLImageElement>(null)
  const drink = useRef<HTMLImageElement>(null)
  const card = useRef<HTMLDivElement>(null)
  const mousePos = useRef({ x: 0, y: 0 })

  const applyParallax = () => {
    if (!card.current) return
    const rect = card.current.getBoundingClientRect()
    const xPercent = (mousePos.current.x - rect.left) / rect.width - 0.5
    const yPercent = (mousePos.current.y - rect.top) / rect.height - 0.5

    gsap.to(elements.current, {
      x: xPercent * 30,
      y: yPercent * 30,
      ease: 'power2.out',
      duration: 0.6,
    })
    gsap.to(drink.current, {
      x: -xPercent * 50,
      ease: 'power2.out',
      duration: 0.6,
    })
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      applyParallax()
    }
    const handleScroll = () => {
      applyParallax() // re-run using last known mouse position
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <div
      ref={card}
      className={`md:w-[50vw] md:max-w-[960px] w-[95%] aspect-[960/634] relative ${props.rotation} flex items-end`}
    >
      <img src={`/images/${props.color}-bg.svg`} className="absolute inset-0" />
      <img
        ref={drink}
        src={`/images/${props.color}-drink.webp`}
        className="md:w-[26.979vw] md:max-w-[518px] w-[53%] aspect-[518/747] absolute bottom-0 md:left-[10.306vw] xl:left-[202px] left-[91px]"
      />
      <img
        ref={elements}
        src={`/images/${props.color}-elements.webp`}
        className="absolute md:w-[45vw] md:max-w-[864px] w-[100%] aspect-[864/548] md:bottom-[156px] bottom-[30px] left-[34px]"
      />
      <div className="product-card relative z-10 md:ml-[56px] md:mb-[50px] uppercase ml-[15px] mb-[21px]">
        {props.name}
      </div>
    </div>
  )
}

export default SingleFlavour
