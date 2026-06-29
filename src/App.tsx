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
      // {
      //   type: 'image',
      //   src: '/images/black-drink.webp',
      // },
      // {
      //   type: 'image',
      //   src: '/images/black-elements.webp',
      // },
      // {
      //   type: 'image',
      //   src: '/images/black-bg.svg',
      // },
      // {
      //   type: 'image',
      //   src: '/images/blue-elements.webp',
      // },
      // {
      //   type: 'image',
      //   src: '/images/blue-bg.svg',
      // },
      // {
      //   type: 'image',
      //   src: '/images/blue-drink.webp',
      // },
      // {
      //   type: 'image',
      //   src: '/images/brown-elements.webp',
      // },
      // {
      //   type: 'image',
      //   src: '/images/brown-bg.svg',
      // },
      // {
      //   type: 'image',
      //   src: '/images/brown-drink.webp',
      // },
      // {
      //   type: 'image',
      //   src: '/images/orange-elements.webp',
      // },
      // {
      //   type: 'image',
      //   src: '/images/orange-bg.svg',
      // },
      // {
      //   type: 'image',
      //   src: '/images/orange-drink.webp',
      // },
      // {
      //   type: 'image',
      //   src: '/images/white-elements.webp',
      // },
      // {
      //   type: 'image',
      //   src: '/images/white-bg.svg',
      // },
      // {
      //   type: 'image',
      //   src: '/images/white-drink.webp',
      // },
      // {
      //   type: 'image',
      //   src: '/images/red-elements.webp',
      // },
      // {
      //   type: 'image',
      //   src: '/images/red-bg.svg',
      // },
      // {
      //   type: 'image',
      //   src: '/images/red-drink.webp',
      // },
      // {
      //   type: 'image',
      //   src: '/images/hero-bg.png',
      // },
      {
        type: 'video',
        src: '/videos/hero-bg.mp4',
      },
      // {
      //   type: 'video',
      //   src: '/videos/f1.mp4',
      // },
      // {
      //   type: 'video',
      //   src: '/videos/f2.mp4',
      // },
      // {
      //   type: 'video',
      //   src: '/videos/f3.mp4',
      // },
      // {
      //   type: 'video',
      //   src: '/videos/f4.mp4',
      // },
      // {
      //   type: 'video',
      //   src: '/videos/f5.mp4',
      // },
      // {
      //   type: 'video',
      //   src: '/videos/f6.mp4',
      // },
      // {
      //   type: 'video',
      //   src: '/videos/f7.mp4',
      // },
    ],
  })

  gsap.registerPlugin(ScrollTrigger)

  return (
    <div>
      {!ready ? (
        <LoadingComponent />
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
