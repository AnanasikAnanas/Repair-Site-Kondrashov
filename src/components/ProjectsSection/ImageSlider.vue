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
    pagination="{
      el: '.custom-pagination',
      clickable: true,
    }"
    class="image-slider"
  >
    <SwiperSlide v-for="(image, index) in images" :key="index">
      <img :src="image" alt="Project Image" class="image-slider__image" />
      <div class="image-slider__container">
        <div class="image-slider__pagination"></div>
        <div class="image-slider__buttons">
          <button class="nav-btn custom-prev" aria-label="Назад">
            <ArrowSlider />
          </button>
          <button class="nav-btn custom-next" aria-label="Вперёд">
            <ArrowSlider direction="right" />
          </button>
        </div>
      </div>
    </SwiperSlide>
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
}
.image-slider__container {
  position: absolute;
  display: flex;
  z-index: 100;
}
.image-slider__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  position: absolute;
}
.image-slider__buttons {
  display: flex;
  gap: 15px;
  
}
.image-slider__pagination {
  width: 100%;
  height: 100%;
  background-color: red;
}

.nav-btn {
  padding: 15px;
  border-radius: 1000px;
  border: none;
  cursor: pointer;
  background-color: #fffbfc;
}
.swiper-button-prev,
.swiper-button-next::after {
  display: none;
}
.custom-pagination {
  display: flex;
  gap: 10px;
  position: absolute;
}
.swiper-pagination-bullet {
  display: none;
}
</style>
