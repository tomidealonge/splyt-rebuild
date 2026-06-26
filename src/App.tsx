import HeaderComponent from './components/HeaderComponent'
import MessageComponent from './components/MessageComponent'
import Navbar from './components/Navbar'
import 'lenis/dist/lenis.css'
import { ReactLenis, useLenis } from 'lenis/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useState } from 'react'
import FlavoursComponent from './components/FlavoursComponent'
import NutritionComponent from './components/NutritionComponent'
import BenefitsComponent from './components/BenefitsComponent'
import ClipVideoComponent from './components/ClipVideoComponent'
import TestimonialComponent from './components/TestimonialComponent'
import FooterComponent from './components/FooterComponent'

function App() {
  const [isFontReady, setFontReady] = useState(false)

  useEffect(() => {
    document.fonts.ready.then(() => setFontReady(true))
  }, [])

  gsap.registerPlugin(ScrollTrigger)

  const lenis = useLenis((lenis) => {
    // called every scroll
    // console.log(lenis)
  })

  return (
    <div>
      {!isFontReady ? (
        <div className="w-full h-[100dvh] flex-center">
          <div className="general-title">Loading...</div>
        </div>
      ) : (
        <div className="overflow-hidden">
          <ReactLenis root />
          <Navbar />
          <HeaderComponent />
          <MessageComponent />
          <FlavoursComponent />
          <NutritionComponent />
          <BenefitsComponent />
          <TestimonialComponent />
          <FooterComponent />
        </div>
      )}
    </div>
  )
}

export default App
