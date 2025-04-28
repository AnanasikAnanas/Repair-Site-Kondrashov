<template>
  <section class="repair-section">
    <div
      v-for="(item, index) in items"
      :key="item.id"
      :href="item.link || null"
      class="card"
      :class="{ active: hoveredIndex === index }"
      @mouseenter="hoveredIndex = index"
      @mouseleave="hoveredIndex = null"
      @click="navigateTo(item.link)"
    >
      <!-- Левая метка -->
      <div class="label-block">
        <Rhombus color="black" />
        <span class="label-text">По виду</span>
      </div>

      <!-- Заголовок -->
      <h2 class="title">{{ item.name }}</h2>

      <!-- Цена -->
      <span class="price">{{ item.price }}</span>

      <!-- Ссылка -->
      <component :is="item.link ? 'a' : 'span'" :href="item.link || null" class="more"
        >Подробнее</component
      >

      <!-- Превью -->
      <transition name="fade">
        <img v-if="hoveredIndex === index" :src="item.image" alt="" class="preview" />
      </transition>
    </div>
  </section>
</template>

<script setup>
import Rhombus from '@/components/icons/Rhombus.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const hoveredIndex = ref(null)

defineProps({
  items: {
    type: Array,
    required: true,
  },
})

const navigateTo = (link) => {
  if (link) {
    router.push(link)
  }
}
</script>

<style scoped>
/* 0. Гарантируем отсутствие клипов наверху */
.repair-section {
  width: 100%;
  overflow: visible !important; /* <---- */
}

/* 1. Строка-карточка */
.card,
.card.active {
  /* <---- и у активной */
  position: relative;
  display: flex;
  align-items: center;
  gap: 100px;
  padding: 50px;
  border-bottom: 1px solid #848386;
  border-top: 1px solid #848386;
  transition:
    background-color 0.3s,
    color 0.3s;
  background: #ffffff;
  color: #0a0a0a;
  overflow: visible !important; /* <---- ключевое */
}
.card.active {
  background: #40362e;
  color: #ffffff;
}

/* 2. Левая метка */
.label-block {
  display: flex;
  align-items: center;
}

.label-text {
  font-size: 18px;
}

/* 3. Заголовок */
.title {
  flex: 1 1 auto;
  font-size: 30px;
  font-weight: 400;
  margin-right: 50px;
}

/* 4. Цена + ссылка */
.price {
  font-size: 18px;
}
.more {
  font-size: 18px;
  color: inherit;
  text-decoration: none;
  border-bottom: 1px solid currentColor;
  transition: opacity 0.2s;
}
.more:hover {
  opacity: 0.7;
}

/* 5. Фото-превью */
.preview {
  position: absolute;
  top: 50%; /* в середину строки */
  left: 50%;
  transform: translate(-50%, -60%) rotate(6deg);
  width: 340px;
  max-width: 45vw;
  object-fit: cover;
  pointer-events: none;
  border-radius: 8px;
  z-index: 5;
}

/* 6. Плавное появление */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.card {
  cursor: pointer;
}
</style>
