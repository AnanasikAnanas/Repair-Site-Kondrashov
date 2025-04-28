<template>
  <div class="another-repair">
    <div class="another-repair__header">
      <h2>Другие решения по ремонту, которые могут вам подойти</h2>
    </div>
    <div class="another-repair__cards">
      <CatalogCard :items="cards1" />
      <CatalogCard :items="cards2" />
    </div>
  </div>
</template>

<script setup>
import CatalogCard from '@/components/CatalogSections/CatalogCard.vue'

const cards1 = [
  {
    id: 1,
    name: 'Декоративный ремонт',
    image: '/catalog-img1.png',
    price: 'от 8.000 ₽ за м2',
    link: '/chernovoy',
  },
]
const cards2 = [
  {
    id: 2,
    name: 'Евроремонт',
    image: '/catalog-img1.png',
    price: 'от 14.000 ₽ за м2',
    link: '/dekor',
  },
]
</script>

<style lang="scss">
.another-repair {
  margin-top: 200px;
	display: flex;
	flex-direction: column;
	gap: 60px;
  .another-repair__header {
    h2 {
      font-size: 64px;
      font-weight: 500;
      margin: 0 auto;
      max-width: 1000px;
      line-height: 130%; /* 83.2px */
      letter-spacing: -1.28px;
    }
  }
}
</style>
