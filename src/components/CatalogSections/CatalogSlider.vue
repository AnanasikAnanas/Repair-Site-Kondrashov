<template>
  <section class="catalog-slider">
    <Swiper
      :modules="[Navigation]"
      :slidesPerView="1"
      :spaceBetween="50"
      :loop="true"
      :navigation="{
        prevEl: '.custom-prev-btn',
        nextEl: '.custom-next-btn',
      }"
      :pagination="{ clickable: true }"
      @slideChange="onSlideChange"
    >
      <SwiperSlide v-for="cards in slides" :key="cards.id">
        <CatalogCard :items="slides" />
      </SwiperSlide>
    </Swiper>
    <div class="projects-slider__navigation">
      <div class="projects-slider__navigation-btns">
        <button class="nav-btn custom-prev-btn">
          <span class="nav-btn__text">Пред</span>
        </button>
        <div class="slide-number">{{ currentSlide + 1 }}</div>
        <button class="nav-btn custom-next-btn">
          <span class="nav-btn__text">След</span>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.catalog-slider {
  margin-top: 100px;
  padding: 0 50px;
  box-sizing: border-box;

  @media (max-width: 1200px) {
    margin-top: 80px;
    padding: 0 40px;
  }

  @media (max-width: 768px) {
    margin-top: 60px;
    padding: 0 30px;
  }

  @media (max-width: 576px) {
    margin-top: 40px;
    padding: 0 20px;
  }
}

.projects-slider__navigation {
  padding-left: 0;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;

  @media (max-width: 768px) {
    margin-top: 1.5rem;
  }

  @media (max-width: 576px) {
    margin-top: 1rem;
  }

  .projects-slider__navigation-btns {
    display: flex;
    align-items: center;
    gap: 1rem;

    @media (max-width: 576px) {
      gap: 0.5rem;
    }
  }
}

.slide-number {
  font-size: 30px;
  color: black;
  font-weight: 500;
  padding: 0 1rem;
  min-width: 30px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 24px;
    padding: 0 0.75rem;
  }

  @media (max-width: 576px) {
    font-size: 20px;
    padding: 0 0.5rem;
  }
}

.nav-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 30px 60px;
  border-radius: 1000px;
  border: 1px solid #848386;
  cursor: pointer;
  background-color: inherit;
  font-size: 18px;
  color: #848386;
  transition: all 0.3s ease;

  @media (max-width: 1200px) {
    padding: 25px 50px;
  }

  @media (max-width: 768px) {
    padding: 20px 40px;
    font-size: 16px;
  }

  @media (max-width: 576px) {
    padding: 15px 30px;
    font-size: 14px;
  }

  &:hover {
    background-color: #f0f0f0;
  }
}

:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  display: none;
}

:deep(.swiper) {
  @media (max-width: 576px) {
    padding-bottom: 30px;
  }
}
</style>

<script setup>
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ref } from 'vue'
import CatalogCard from './CatalogCard.vue'
const currentSlide = ref(0)

const onSlideChange = (swiper) => {
  currentSlide.value = swiper.realIndex
}

const slides = ref([
  {
    id: 1,
    name: 'Черновой ремонт',
    image: '/catalog-img1.png',
    price: 'от 6.000 ₽ за м2',
  },
  {
    id: 2,
    name: 'Капитальный ремонт',
    image: '/catalog-img1.png',
    price: 'от 14.000 ₽ за м2',
    link: '/capital',
  },
  {
    id: 3,
    name: 'Декоративный ремонт',
    image: '/catalog-img1.png',
    price: 'от 8.000 ₽ за м2',
  },
  {
    id: 4,
    name: 'Евроремонт',
    image: '/catalog-img1.png',
    price: 'от 14.000 ₽ за м2',
  },
])
</script>
