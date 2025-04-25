<template>
  <section class="projects-slider">
    <h1 class="projects-slider__title">Наши проекты, выполненные за 10 лет работы</h1>
    <Swiper
      :modules="[Navigation]"
      :space-between="10"
      :slides-per-view="1"
      :loop="true"
      :navigation="{
        prevEl: '.custom-prev-btn',
        nextEl: '.custom-next-btn',
      }"
      @slideChange="onSlideChange"
      class="projects-slider__swiper"
    >
      <SwiperSlide v-for="(project, index) in projects" :key="index" class="projects-slider__slide">
        <ProjectCard
          :area="project.area"
          :description="project.description"
          :price="project.price"
          :images="project.images"
        />
        <ProjectCard
          :area="project.area"
          :description="project.description"
          :price="project.price"
          :images="project.images"
        />
      </SwiperSlide>
    </Swiper>

    <!-- Кнопки навигации для проектов -->
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

      <button class="all-projects-btn">Все проекты</button>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import ProjectCard from './ProjectCard.vue'
import ArrowSlider from '@/components/icons/ArrowSlider.vue'

const currentSlide = ref(0)

const onSlideChange = (swiper) => {
  currentSlide.value = swiper.realIndex
}

const projects = ref([
  {
    description: '32,3 м2, Дизайнерский ремонт, отельная отделка',
    price: '234.000',
    images: ['/img-slider-1.png', '/img-slider-2.png'],
  },
  {
    description: '127,7 м2, Премиум ремонт, деревянная отделка',
    price: '1.324.000',
    images: ['/img-slider-1.png', '/img-slider-2.png'],
  },
  {
    description: 'Современный стиль, ремонт',
    price: '450.000',
    images: ['/img-slider-1.png', '/img-slider-2.png'],
  },
])
</script>

<style scoped lang="scss">
@import '@/styles/mixins.scss';
.projects-slider {
  position: relative;
  margin-top: 180px;
  padding: 50px;
}

.projects-slider__slide {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.projects-slider__title {
  font-size: 64px;
  font-weight: 400;
  max-width: 935px;
  line-height: 130%; /* 83.2px */
  letter-spacing: -1.28px;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 60px;
}
.all-projects-btn {
  @include button(white, #848386);
  justify-self: flex-end;
}
.projects-slider__swiper {
  height: 100%;
  width: 100%;
}

.projects-slider__navigation {
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  .projects-slider__navigation-btns {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
}
.slide-number {
  font-size: 30px;
  color: black;
  font-weight: 500;
  padding: 0 1rem;
  min-width: 30px;
  text-align: center;
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
}

.nav-btn:hover {
  background-color: #f0f0f0;
}

.slide-number {
  font-size: 30px;
  color: black;
  font-weight: 400;
}

:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  display: none;
}
</style>
