<template>
  <section class="projects-slider">
    <h1 class="projects-slider__title">Наши проекты, выполненные за 10 лет работы</h1>
    <Swiper
      :space-between="10"
      :slides-per-view="1"
      :loop="true"
      :navigation="{
        prevEl: '.custom-prev',
        nextEl: '.custom-next',
      }"
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
    <div class="custom-prev "><button class="custom-prev__btn"></button></div>
    <div class="custom-next"><button class="custom-next"></button></div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import ProjectCard from './ProjectCard.vue'

const projects = ref([
  {
    description: '32,3 м2, Дизайнерский ремонт, отельная отделка',
    price: '234.000',
    images: [
      '/img-slider-1.png',
      '/img-slider-2.png',
    ],
  },
  {
    description: '127,7 м2, Премиум ремонт, деревянная отделка',
    price: '1.324.000',
    images: [
      '/img-slider-1.png',
      '/img-slider-2.png',
    ],
  },
  {
    description: 'Современный стиль, ремонт',
    price: '450.000',
    images: [
      'https://via.placeholder.com/600x400?text=Project+Image+6',
      'https://via.placeholder.com/600x400?text=Project+Image+7',
    ],
  },
])
</script>

<style scoped>
.projects-slider {
  position: relative;
	margin-top: 180px;
}
.projects-slider__slide {
	display: flex;
	flex-direction: column;
	width: 100%;
}
h1 {
  font-size: 64px;
  font-weight: 400;
  max-width: 935px;
  line-height: 130%; /* 83.2px */
  letter-spacing: -1.28px;
	text-align: center;
	margin: 0 auto;
	margin-bottom: 60px;
}
.projects-slider__swiper {
  height: 100%;
	width: 100%;
}


</style>
