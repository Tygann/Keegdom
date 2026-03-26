import MainLayout from '../layouts/MainLayout'
import FamilySection from '../sections/FamilySection'
import FromTheHouseSection from '../sections/FromTheHouseSection'
import HeroSection from '../sections/HeroSection'

export default function HomePage() {
  return (
    <MainLayout>
      <HeroSection />
      <FamilySection />
      <FromTheHouseSection />
    </MainLayout>
  )
}
