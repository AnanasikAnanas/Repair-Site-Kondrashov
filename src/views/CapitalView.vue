<script setup>
import AnotherRepair from '@/components/CapitalSections/AnotherRepair.vue'
import InfoBlock from '@/components/CapitalSections/InfoBlock.vue'
import Footer from '@/components/Footer.vue'
import TheHeader from '@/components/TheHeader.vue'
</script>

<template>
  <TheHeader color="black" />
  <img src="/capital-img.png" alt="" class="capital-img" />
  <InfoBlock />
  <AnotherRepair />
  <Footer />
</template>

<style lang="scss">
.capital-img {
  width: 100%;
  height: auto;
  object-fit: cover;
  padding: 0 50px;
  box-sizing: border-box;

  @media (max-width: 1200px) {
    padding: 0 40px;
  }

  @media (max-width: 768px) {
    padding: 0 30px;
  }

  @media (max-width: 576px) {
    padding: 0 20px;
  }
}
</style>
