import HeaderComponent from './components/HeaderComponent'
import MessageComponent from './components/MessageComponent'
import Navbar from './components/Navbar'
import 'lenis/dist/lenis.css'
import { ReactLenis } from 'lenis/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import FlavoursComponent from './components/FlavoursComponent'
import NutritionComponent from './components/NutritionComponent'
import BenefitsComponent from './components/BenefitsComponent'
import TestimonialComponent from './components/TestimonialComponent'
import FooterComponent from './components/FooterComponent'
import { usePreloadAssets } from './hooks/usePreloadAssets'
import LoadingComponent from './components/LoadingComponent'

function App() {
  const { ready, progress } = usePreloadAssets({
    fonts: true,
    timeout: 8000,
    assets: [
      {
        type: 'image',
        src: '/images/hero-img.png',
      },
      {
        type: 'image',
        src: '/images/hero-bg.png',
      },
      {
        type: 'video',
        src: '/videos/hero-bg.mp4',
      },
    ],
  })

  gsap.registerPlugin(ScrollTrigger)

  return (
    <div>
      {!ready ? (
        <LoadingComponent progress={progress} />
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
