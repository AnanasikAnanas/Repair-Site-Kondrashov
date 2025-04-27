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
      <SwiperSlide v-for="slide in slides" :key="slide.name">
        <CatalogCard :name="slide.name" :image="slide.image" :price="slide.price" />
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
}
.projects-slider__navigation {
  padding-left: 50px;
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

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import CatalogCard from './CatalogCard.vue'

const currentSlide = ref(0)

const onSlideChange = (swiper) => {
  currentSlide.value = swiper.realIndex
}

const slides = ref([
  {
    name: 'Черновой ремонт',
    image: '/catalog-img1.png',
    price: 'от 6.000 ₽ за м2',
  },
  {
    name: 'Капитальный ремонт',
    image: '/catalog-img1.png',
    price: 'от 14.000 ₽ за м2',
  },
  {
    name: 'Декоративный ремонт',
    image: '/catalog-img1.png',
    price: 'от 8.000 ₽ за м2',
  },
  {
    name: 'Евроремонт',
    image: '/catalog-img1.png',
    price: 'от 14.000 ₽ за м2',
  },
])
</script>
