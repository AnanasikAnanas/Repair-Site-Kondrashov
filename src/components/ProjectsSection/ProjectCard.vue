<template>
  <div class="project-card__container">
    <div class="project-card">
      <div class="project-card__details">
        <div class="project-card__details-top">
          <Rhombus />
          <p>Квартира</p>
        </div>
        <p class="project-card__description">{{ description }}</p>
        <p class="project-card__price">{{ price }} ₽</p>
      </div>

      <!-- Вложенный слайдер изображений -->
      <ImageSlider :images="images" />
    </div>
  </div>
</template>

<script setup>
import Rhombus from '@/components/icons/Rhombus.vue'
import ImageSlider from './ImageSlider.vue'
defineProps({
  area: String,
  description: String,
  price: String,
  images: Array,
})
</script>

<style scoped lang="scss">
.project-card {
  display: flex;
  justify-content: space-between;
  padding: 50px 60px;
  background-color: #fff;
  border-top: 1px solid rgba(132, 131, 134, 0.1);
  border-bottom: 1px solid rgba(132, 131, 134, 0.1);
  z-index: 0;
  position: relative;
  width: 100%;
  gap: 40px;

  @media (max-width: 1200px) {
    padding: 40px;
    gap: 30px;
  }

  @media (max-width: 992px) {
    flex-direction: column-reverse;
    padding: 30px;
    gap: 20px;
  }

  @media (max-width: 576px) {
    padding: 20px;
    gap: 15px;
  }
}

.project-card__details {
  display: flex;
  flex-direction: column;
  gap: 3.75rem;

  @media (max-width: 1200px) {
    gap: 2.5rem;
  }

  @media (max-width: 992px) {
    gap: 1.5rem;
  }

  .project-card__details-top {
    display: flex;
    align-items: center;
    gap: 15px;
    font-size: 18px;

    @media (max-width: 576px) {
      font-size: 16px;
      gap: 10px;
    }
  }
}

.project-card__description {
  font-size: 30px;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: -0.6px;
  max-width: 423px;
  margin: 0;

  @media (max-width: 1200px) {
    font-size: 24px;
    max-width: 350px;
  }

  @media (max-width: 992px) {
    font-size: 20px;
    max-width: 100%;
  }

  @media (max-width: 576px) {
    font-size: 18px;
  }
}

.project-card__price {
  font-size: 18px;

  @media (max-width: 576px) {
    font-size: 16px;
  }
}
</style>
