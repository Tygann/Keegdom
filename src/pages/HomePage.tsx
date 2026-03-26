import MainLayout from '../layouts/MainLayout'
import FamilySection from '../sections/FamilySection'
import FromTheHouseSection from '../sections/FromTheHouseSection'
import HeroSection from '../sections/HeroSection'
import HouseSection from '../sections/HouseSection'
import ResourcesSection from '../sections/ResourcesSection'
import TylerSection from '../sections/TylerSection'

export default function HomePage() {
  return (
    <MainLayout>
      <HeroSection />
      <FamilySection />
      <HouseSection />
      <FromTheHouseSection />
      <ResourcesSection />
      <TylerSection />
    </MainLayout>
  )
}
