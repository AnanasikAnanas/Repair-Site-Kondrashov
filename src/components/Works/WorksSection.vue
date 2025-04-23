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
            <ArrowSlider />
          </button>
          <button class="nav-btn custom-next" aria-label="Вперёд">
            <ArrowSlider direction="right" />
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
  h1 {
    font-size: 4rem;
    font-weight: 500;
    list-style: 130%;
    max-width: 900px;
  }
  .work-types-slider__left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 500px;
  }
  .work-types-slider {
    display: flex;
    justify-content: space-between;

    .work-types-slider__title {
      display: flex;
      align-items: center;
      gap: 15px;
      font-size: 1.125rem;
      font-weight: 500;
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
      }
    }
    .work-types-slider__right {
      max-width: 1400px;
      display: flex;

      .work-types-slider__slide {
        max-width: 100%;

        img {
          max-width: 26.75rem;
          max-height: 31.25rem;
          object-fit: cover;
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
  &:hover {
    background: #f0f0f0;
  }
}
</style>
