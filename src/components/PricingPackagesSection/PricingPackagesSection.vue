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
  padding: 0 50px;

  @media (max-width: 1200px) {
    padding: 0 40px;
    gap: 50px;
  }

  @media (max-width: 768px) {
    padding: 0 30px;
    gap: 40px;
  }

  @media (max-width: 576px) {
    padding: 0 20px;
    gap: 30px;
  }

  h1 {
    font-size: 64px;
    text-align: center;
    max-width: 910px;
    margin: 0 auto;
    margin-top: 180px;
    font-weight: 500;
    line-height: 130%;
    letter-spacing: -1.28px;

    @media (max-width: 1200px) {
      font-size: 48px;
      max-width: 700px;
      margin-top: 120px;
    }

    @media (max-width: 768px) {
      font-size: 36px;
      max-width: 100%;
      margin-top: 80px;
    }

    @media (max-width: 576px) {
      font-size: 28px;
      margin-top: 60px;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 0;
  }
}
</style>
