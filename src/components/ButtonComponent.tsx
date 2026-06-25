import Lottie, { type LottieRefCurrentProps } from 'lottie-react'
import * as ButtonLottie from '../../public/assets/button-hover.json'
import { useEffect, useRef } from 'react'

const bgMap = {
  bronze: 'bg-bronze',
}
const colorMap = {
  walnut: 'text-walnut',
}

interface Props {
  text: string
  color: keyof typeof colorMap
  bg: keyof typeof bgMap
  // Optional: You can pass speed multipliers as props to make the component more reusable
  enterSpeed?: number
  leaveSpeed?: number
}

const animation = JSON.parse(JSON.stringify(ButtonLottie))

function ButtonComponent({
  text,
  bg = 'bronze',
  color = 'walnut',
  enterSpeed = 2.5, // > 1 makes it faster, < 1 makes it slower
  leaveSpeed = 3.3, // Often you want the exit animation to feel a bit snappier
}: Props) {
  // Use LottieRefCurrentProps for proper TS method typing
  const lottieRef = useRef<LottieRefCurrentProps>(null)

  const handleMouseEnter = () => {
    if (lottieRef.current) {
      lottieRef.current.setDirection(1) // 1 plays forward
      lottieRef.current.setSpeed(enterSpeed)
      lottieRef.current.play()
    }
  }

  const handleMouseLeave = () => {
    if (lottieRef.current) {
      lottieRef.current.setDirection(-1) // -1 plays in reverse
      lottieRef.current.setSpeed(leaveSpeed)
      lottieRef.current.play()
    }
  }

  useEffect(() => {
    lottieRef.current?.goToAndStop(0, true)
  }, [])

  return (
    <div className="relative inline-flex">
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`button ${bgMap[bg]} ${colorMap[color]}`}
      >
        {text}
      </button>
      <div className="absolute inset-0 top-auto -bottom-[64px] pointer-events-none">
        <Lottie
          lottieRef={lottieRef}
          animationData={animation}
          loop={false}
          autoPlay={false}
        />
      </div>
    </div>
  )
}

export default ButtonComponent
