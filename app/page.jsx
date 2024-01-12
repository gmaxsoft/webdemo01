import BootstrapCarousel from '@/components/BootstrapCarousel'
import ParallaxImg from '@/components/ParallaxImg'
import Brands from '@/components/Brands'
import GoogleMapTxt from '@/components/GoogleMapTxt'
import Services from '@/components/Services'

export default function Home() {
  return (
    <>
      <BootstrapCarousel />
      <Services />
      <ParallaxImg />
      <Brands />
      <GoogleMapTxt />
    </>
  )
}
