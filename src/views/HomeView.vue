<script>
import Home from '@/components/Home/Home.vue'
import WorksSection from '@/components/Works/WorksSection.vue'

export default {
  name: 'HomeView',
  components: { Home, WorksSection },
}
</script>

<template>
  <main>
    <Home />
    <WorksSection />
  </main>
</template>
