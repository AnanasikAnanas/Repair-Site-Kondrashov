<template>
  <Swiper
    :modules="[Navigation, Pagination]"
    :space-between="10"
    :slides-per-view="1"
    :loop="true"
    :navigation="{
      nextEl: '.custom-next',
      prevEl: '.custom-prev',
    }"
    :pagination="{
      el: '.custom-pagination',
      clickable: true,
    }"
    class="image-slider"
  >
    <SwiperSlide v-for="(image, index) in images" :key="index">
      <img :src="image" alt="Project Image" class="image-slider__image" />
    </SwiperSlide>
    <div class="image-slider__container">
      <div class="custom-pagination"></div>
      <div class="image-slider__buttons">
        <button class="nav-btn custom-prev" aria-label="Назад">
          <ArrowSlider rotate="0" />
        </button>
        <button class="nav-btn custom-next" aria-label="Вперёд">
          <ArrowSlider rotate="180" />
        </button>
      </div>
    </div>
  </Swiper>
</template>

<script>
import ArrowSlider from '@/components/icons/ArrowSlider.vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

export default {
  components: {
    Swiper,
    SwiperSlide,
    ArrowSlider,
  },
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  setup() {
    return {
      Navigation,
      Pagination,
    }
  },
}
</script>

<style scoped>
.image-slider {
  width: 56.875rem;
  position: relative;
}

.image-slider__container {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem;
  z-index: 10;
}

.image-slider__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.image-slider__buttons {
  display: flex;
  gap: 0.9375rem;
  margin-right: 1rem;
}

.custom-pagination {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  display: flex;
  z-index: 10;
}

.nav-btn {
  padding: 0.9375rem;
  border-radius: 1000px;
  border: none;
  cursor: pointer;
  background-color: #fffbfc;
  display: flex;
  align-items: center;
  justify-content: center;
}

:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  display: none;
}

:deep(.swiper-pagination-bullet) {
  width: 0.5rem;
  height: 0.5rem;
  background-color: #fffbfc;
  opacity: 0.5;
  transform: rotate(45deg);
  transition: all 0.3s ease;
}

:deep(.swiper-pagination-bullet-active) {
  opacity: 1;
  width: 0.625rem;
  height: 0.625rem;
  background-color: #fffbfc;
}
</style>
