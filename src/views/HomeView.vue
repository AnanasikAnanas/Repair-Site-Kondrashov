<script>
import Home from '@/components/Home/Home.vue'
import WorksSection from '@/components/Works/WorksSection.vue'
import ProjectInYourSpace from '@/components/ProjectInYourSpace/ProjectInYourSpace.vue'
import PricingPackagesSection from '@/components/PricingPackagesSection/PricingPackagesSection.vue'
import BenefitsSection from '@/components/BenefitsSection/BenefitsSection.vue'
import ProjectsSection from '@/components/ProjectsSection/ProjectsSection.vue'
import GuestsSection from '@/components/Guests/GuestsSection.vue'
import InfoBlock from '@/components/InfoBlock/InfoBlock.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'HomeView',
  components: { Home, WorksSection, ProjectInYourSpace, PricingPackagesSection, BenefitsSection, ProjectsSection, GuestsSection, InfoBlock, Footer },
}
</script>

<template>
  <main>
    <Home />
    <WorksSection />
    <ProjectInYourSpace />
    <PricingPackagesSection />
    <BenefitsSection />
    <ProjectsSection />
    <GuestsSection />
    <InfoBlock />
    <Footer />
  </main>
</template>
