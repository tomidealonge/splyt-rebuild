import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

function WavySVG() {
  const wrapper = useRef<HTMLDivElement>(null)
  const path = useRef<SVGPathElement>(null)

  useGSAP(
    () => {
      if (!path.current) return

      gsap.set(path.current, {
        scaleY: 0,
        transformOrigin: 'top',
      })

      gsap.to(path.current, {
        scaleY: 1,
        duration: 0.4,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: wrapper.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: true,
        },
      })
    },
    { scope: wrapper }
  )

  return (
    <div ref={wrapper}>
      <svg
        width="1920"
        height="292"
        viewBox="0 0 1920 292"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={path}
          d="M86 153.102C154.06 154.632 167.306 83.3973 235.333 85.6016C287.571 87.2942 301.973 128.2 354 132.102C406.06 136.006 433.388 90.9176 482.667 104.102C527.359 116.059 492.105 147.183 520.667 175.602C538.388 193.234 572.079 187.252 588.667 206.102C613.261 234.051 624.364 284.832 667.333 290.602C762.445 303.372 701.069 151.944 794 132.102C868.375 116.221 906.029 177.104 983.333 175.602C1044.54 174.412 1072.81 144.71 1134 143.102C1191 141.604 1220.4 166.608 1277.33 164.102C1332.9 161.656 1360.11 119.887 1413.33 132.102C1453.86 141.401 1452.48 178.653 1493.33 187.102C1517.18 192.032 1532.95 181.829 1556.67 187.102C1624.71 202.232 1577 287 1632.5 287C1696.5 287 1632.26 175.463 1722 152.602C1799.41 132.881 1920 203.602 1920 203.602V0H0V132.102C0 132.102 50.6955 152.308 86 153.102Z"
          fill="#FAEADE"
        />
      </svg>
    </div>
  )
}

export default WavySVG
