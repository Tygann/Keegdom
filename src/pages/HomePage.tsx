import MainLayout from '../layouts/MainLayout'
import BuilderSection from '../sections/BuilderSection'
import GatewaysSection from '../sections/GatewaysSection'
import HeroSection from '../sections/HeroSection'
import HouseSection from '../sections/HouseSection'
import KingdomSection from '../sections/KingdomSection'
import StatusSection from '../sections/StatusSection'

export default function HomePage() {
  return (
    <MainLayout>
      <HeroSection />
      <KingdomSection />
      <GatewaysSection />
      <HouseSection />
      <BuilderSection />
      <StatusSection />
    </MainLayout>
  )
}
