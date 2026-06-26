import { useRef } from 'react'

interface Props {
  testimonial: {
    src: string
    rotation: string
    name: string
    img: string
    translation?: string
  }
}

function TestimonialCard({
  testimonial: { src, rotation, name, img, translation },
}: Props) {
  const video = useRef<HTMLDivElement>(null)

  const handleMouseEnter = () => {
    video.current?.play()
  }

  const handleMouseLeave = () => {
    video.current?.pause()
  }

  return (
    <div
      className={`testimonial-card min-w-[355px] w-[22.824vw] h-auto md:-ms-[176px] md:relative absolute overflow-hidden shrink-0 max-w-[418px] 
      aspect-[416/743] lg:border-[7px] border-[3px] border-cream rounded-[38px] p-[22px] flex items-end ${translation} ${rotation}`}
    >
      <video
        ref={video}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        loop
        muted
        playsInline
        src={src}
        className="absolute w-full h-full inset-0 object-cover"
      />
      <div className="flex gap-2.5 relative z-1 items-center">
        <img src={img} className="w-[38px] aspect-square   rounded-full" />
        <p className="text-[15px] font-paragraph text-cream">{name}</p>
      </div>
    </div>
  )
}

export default TestimonialCard
