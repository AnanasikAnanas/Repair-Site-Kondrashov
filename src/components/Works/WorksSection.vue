<template>
  <section class="works-section container">
    <h1>Лучшие решения по ремонту и отделке для жителей Сочи!</h1>
    <div class="work-types-slider">
      <!-- Контейнер для заголовка и навигации слева -->
      <div class="work-types-slider__left">
        <!-- Заголовок с точкой и текстом без margin/padding -->
        <h2 class="work-types-slider__title">
          <Rhombus />
          Виды работ
        </h2>

        <!-- Кастомные кнопки навигации слева -->
        <div class="work-types-slider__navigation">
          <button class="nav-btn custom-prev" aria-label="Назад">
            <ArrowSlider rotate="0" />
          </button>
          <button class="nav-btn custom-next" aria-label="Вперёд">
            <ArrowSlider rotate="180" />
          </button>
        </div>
      </div>

      <!-- Слайдер справа -->
      <div class="work-types-slider__right">
        <Swiper
          :modules="[Navigation]"
          :slides-per-view="3"
          :loop="true"
          :space-between="40"
          :breakpoints="{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            576: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1536: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }"
          :navigation="{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }"
          class="work-types-slider__swiper"
        >
          <SwiperSlide
            v-for="(item, index) in slides"
            :key="index"
            class="work-types-slider__slide"
          >
            <img :src="item.img" :alt="item.title" class="work-types-slider__image" />
            <p class="work-types-slider__caption">{{ item.title }}</p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
    <button class="works-section__button">Заказать ремонт</button>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import Rhombus from '@/components/icons/Rhombus.vue'
import ArrowSlider from '@/components/icons/ArrowSlider.vue'

const slides = ref([
  {
    img: '/work1.png',
    title: 'Капитальный ремонт',
  },
  {
    img: '/work2.png',
    title: 'Офисный ремонт',
  },
  {
    img: '/work3.png',
    title: 'Черновой ремонт',
  },
  {
    img: '/work1.png',
    title: 'Капитальный ремонт',
  },
  {
    img: '/work2.png',
    title: 'Офисный ремонт',
  },
  {
    img: '/work3.png',
    title: 'Черновой ремонт',
  },
])
</script>

<style lang="scss" scoped>
@import '@/styles/mixins.scss';
.works-section {
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 50px;

  @media (max-width: 1200px) {
    padding: 40px;
    gap: 40px;
  }

  @media (max-width: 768px) {
    padding: 30px;
    gap: 30px;
  }

  @media (max-width: 576px) {
    padding: 20px;
    gap: 20px;
  }

  h1 {
    font-size: 4rem;
    font-weight: 500;
    line-height: 130%;
    max-width: 900px;

    @media (max-width: 1200px) {
      font-size: 3rem;
    }

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }

    @media (max-width: 576px) {
      font-size: 2rem;
    }
  }
  .work-types-slider__title {
    display: flex;
    align-items: center;
    gap: 15px;
    font-size: 1.125rem;
    font-weight: 500;
  }
  .work-types-slider {
    display: flex;
    justify-content: space-between;
    gap: 40px;

    @media (max-width: 1024px) {
      flex-direction: column;
      gap: 30px;
    }

    .work-types-slider__left {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 500px;

      @media (max-width: 1024px) {
        height: auto;
        gap: 20px;
      }
    }

    .work-types-slider__right {
      width: 100%;
      max-width: 1400px;
      .work-types-slider__slide {
        max-width: 26.75rem;
        width: 100%;

        img {
          width: 100%;
          height: 100%;
          max-height: 31.25rem;
          object-fit: cover;
        }
      }
    }

    .work-types-slider__navigation {
      display: flex;
      align-items: center;
      gap: 10px;

      .nav-btn {
        padding: 24.5px;
        background-color: inherit;
        border-radius: 1000px;
        border: 1px solid #848386;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          background-color: #f0f0f0;
        }

        @media (max-width: 576px) {
          padding: 15px;
        }
      }
    }
  }
}

.swiper-button-prev,
.swiper-button-next::after {
  display: none;
}

.works-section__button {
  @include button(white, #848386);
  display: flex;
  justify-content: center;
  align-self: flex-end;
  margin-top: 60px;

  @media (max-width: 768px) {
    margin-top: 40px;
    align-self: center;
  }

  &:hover {
    background: #f0f0f0;
  }
}
</style>
