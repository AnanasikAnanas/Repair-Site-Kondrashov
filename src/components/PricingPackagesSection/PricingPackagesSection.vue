<template>
  <section class="pricing-packages-section">
    <h1>Готовые пакеты услуг, в зависимости от количества м2</h1>
    <div>
      <PackageCard
        packageType="Для квартир"
        packageName="Бюджетная отделка и ремонт квартиры"
        price="от 14.000 ₽ за м2"
      />
      <PackageCard
        packageType="Любая недвижимость"
        packageName="Уникальный дизайнерский ремонт"
        price="от 16.000 ₽ за м2"
      />
      <PackageCard
        packageType="Любая недвижимость"
        packageName="Премиум, лакшери отделка и ремонт"
        price="от 40.000 ₽ за м2"
      />
    </div>
  </section>
</template>

<script>
import PackageCard from './PackageCard.vue'
export default {
  components: {
    PackageCard,
  },
}
</script>

<style lang="scss" scoped>
.pricing-packages-section {
  display: flex;
  flex-direction: column;
	gap: 60px;
  h1 {
    font-size: 64px;
    text-align: center;
    max-width: 910px;
    margin: 0 auto;
    margin-top: 180px;
    font-weight: 500;
    line-height: 130%; /* 83.2px */
    letter-spacing: -1.28px;
  }
}
</style>
