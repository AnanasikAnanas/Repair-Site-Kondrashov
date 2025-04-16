<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Mousewheel } from 'swiper/modules'
import ArraySlider from '../icons/ArraySlider.vue'
import Rhombus from '../icons/Rhombus.vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/mousewheel'
import 'swiper/css/bundle'
import { ref } from 'vue'

const swiper = ref(null)

const setSwiper = (swiperInstance) => {
  swiper.value = swiperInstance
}

const swiperOptions = {
  modules: [Navigation, Mousewheel],
  grabCursor: true,
  slidesPerView: 3,
  spaceBetween: 40,
  loop: true,
  speed: 500,
  mousewheel: true,
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
}

const handlePrev = () => {
  swiper.value?.slidePrev()
}

const handleNext = () => {
  swiper.value?.slideNext()
}

const works = [
  {
    title: 'Капитальный ремонт',
    image: '/Rectangle 1.png',
  },
  {
    title: 'Офисный ремонт',
    image: '/Rectangle 2.png',
  },
  {
    title: 'Черновой ремонт',
    image: '/Rectangle 3.png',
  },
]
</script>

<template>
  <div class="works">
    <h1>Лучшие решения по ремонту и отделке для жителей Сочи!</h1>

    <div class="works-slider">
      <div class="slider-header">
        <div class="slider-header-title">
          <Rhombus />
          <h2>Виды работ</h2>
        </div>
        <div class="navigation-buttons">
          <button class="nav-button prev" @click="handlePrev">
            <ArraySlider direction="left" />
          </button>
          <button class="nav-button next" @click="handleNext">
            <ArraySlider direction="right" />
          </button>
        </div>
      </div>

      <div class="slider-container">
        <Swiper v-bind="swiperOptions" @swiper="setSwiper">
          <SwiperSlide v-for="work in works" :key="work.title">
            <div class="work-card">
              <img :src="work.image" :alt="work.title" />
              <h3>{{ work.title }}</h3>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.works {
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding: 0 50px;

  h1 {
    font-size: 64px;
    font-weight: 500;
    max-width: 910px;
    line-height: 130%;
  }
}

.works-slider {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;

  .slider-header {
    min-width: 200px;
    display: flex;
    flex-direction: column;
    gap: 100px;

    .slider-header-title {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    h2 {
      font-size: 32px;
      font-weight: 500;
    }

    .navigation-buttons {
      display: flex;
      gap: 50px;
    }
  }
}

.slider-container {
  max-width: 1200px;
  overflow: hidden;

  :deep(.swiper-slide) {
    cursor: grab;
    user-select: none;

    &:active {
      cursor: grabbing;
    }
  }
}

.nav-button {
  width: 44px;
  height: 44px;
  border: 1px solid #0a0a0a;
  background: transparent;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0a0a0a;
  position: relative;

  &:hover {
    background: #0a0a0a;
    color: white;
  }

  &.swiper-button-disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}

.work-card {
  position: relative;
  overflow: hidden;
  border-radius: 8px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  h3 {
    color: #848386;
    font-size: 18px;
  }

  &:hover {
    img {
      transform: scale(1.05);
    }
  }
}

:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  &::after {
    display: none;
  }
}
</style>
