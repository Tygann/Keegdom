import MainLayout from '../layouts/MainLayout'
import FamilySection from '../sections/FamilySection'
import FromTheHouseSection from '../sections/FromTheHouseSection'
import HouseSection from '../sections/HouseSection'

export default function FamilyPage() {
  return (
    <MainLayout>
      <FamilySection />
      <HouseSection />
      <FromTheHouseSection />
    </MainLayout>
  )
}
