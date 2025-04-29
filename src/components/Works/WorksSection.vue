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
          :slides-per-view="'auto'"
          :loop="true"
          :space-between="40"
          :breakpoints="{
            320: {
              slidesPerView: 'auto',
              spaceBetween: 20,
            },
            576: {
              slidesPerView: 'auto',
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 'auto',
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 'auto',
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 'auto',
              spaceBetween: 40,
            },
            1537: {
              slidesPerView: 'auto',
              spaceBetween: 40,
            },
            1920: {
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
    <ButtonWithModal class="works-section__button" text="Заказать ремонт" />
  </section>
</template>

<script setup>
import ButtonWithModal from '@/components/ButtonWithModal.vue'
import ArrowSlider from '@/components/icons/ArrowSlider.vue'
import Rhombus from '@/components/icons/Rhombus.vue'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ref } from 'vue'

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
  overflow: hidden;

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
    margin-bottom: 80px;

    @media (max-width: 1200px) {
      font-size: 3rem;
      margin-bottom: 60px;
    }

    @media (max-width: 768px) {
      font-size: 2.5rem;
      margin-bottom: 40px;
    }

    @media (max-width: 576px) {
      font-size: 2rem;
      margin-bottom: 30px;
    }
  }

  .work-types-slider {
    display: flex;
    justify-content: flex-start;
    gap: 100px;
    width: 100%;
    position: relative;
    margin-bottom: 60px;

    @media (max-width: 1024px) {
      flex-direction: column;
      gap: 30px;
      margin-bottom: 40px;
    }

    .work-types-slider__left {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 500px;
      flex-shrink: 0;
      width: 200px;

      @media (max-width: 1024px) {
        min-height: auto;
        gap: 20px;
        width: 100%;
      }
    }

    .work-types-slider__title {
      display: flex;
      align-items: center;
      gap: 15px;
      font-size: 1.125rem;
      font-weight: 500;
      white-space: nowrap;
    }

    .work-types-slider__right {
      width: 100%;
      overflow: hidden;
      position: relative;

      .work-types-slider__swiper {
        width: 100%;
        margin: 0;
        position: relative;
      }

      :deep(.swiper) {
        overflow: visible;
        width: 100%;
      }

      :deep(.swiper-wrapper) {
        display: flex;
        width: 100%;
      }

      :deep(.swiper-slide) {
        width: 428px !important;
        opacity: 1 !important;
      }

      .work-types-slider__slide {
        width: 100%;
        max-width: 428px;
        display: flex;
        flex-direction: column;
        gap: 20px;

        img {
          width: 100%;
          max-width: 428px;
          height: 500px;
          object-fit: cover;
        }

        .work-types-slider__caption {
          font-size: 1rem;
          color: #848386;
          margin-top: 10px;
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
        display: flex;
        align-items: center;
        justify-content: center;

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
  display: flex;
  justify-content: center;
  align-self: flex-end;
  margin-top: 60px;

  @media (max-width: 768px) {
    margin-top: 40px;
    align-self: center;
  }
}

:deep(.swiper-slide-active) {
  z-index: 2;
}
</style>
