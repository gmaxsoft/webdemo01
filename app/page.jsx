import BootstrapCarousel from '@/components/BootstrapCarousel'
import ParallaxImg from '@/components/ParallaxImg'
import Brands from '@/components/Brands'
import GooglerMapTxt from '@/components/GooglerMapTxt'
import Services from '@/components/Services'

export default function Home() {
  return (
    <>
      <BootstrapCarousel />
      <Services />
      <ParallaxImg />
      <Brands />
      <GooglerMapTxt />
    </>
  )
}
