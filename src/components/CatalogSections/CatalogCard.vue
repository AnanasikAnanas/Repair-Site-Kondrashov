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
.repair-section {
  width: 100%;
  overflow: visible !important;
}

.card,
.card.active {
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
  overflow: visible !important;
  box-sizing: border-box;

  @media (max-width: 1200px) {
    gap: 60px;
    padding: 40px;
  }

  @media (max-width: 992px) {
    gap: 40px;
    padding: 30px;
  }

  @media (max-width: 768px) {
    gap: 30px;
    padding: 25px;
  }

  @media (max-width: 576px) {
    gap: 20px;
    padding: 20px;
    flex-wrap: wrap;
  }
}

.card.active {
  background: #40362e;
  color: #ffffff;
}

.label-block {
  display: flex;
  align-items: center;
  gap: 15px;
  min-width: 120px;

  @media (max-width: 576px) {
    min-width: auto;
    gap: 10px;
  }

  svg {
    @media (max-width: 576px) {
      transform: scale(0.8);
    }
  }
}

.label-text {
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 576px) {
    font-size: 14px;
  }
}

.title {
  flex: 1 1 auto;
  font-size: 30px;
  font-weight: 400;
  margin-right: 50px;

  @media (max-width: 1200px) {
    font-size: 24px;
    margin-right: 30px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    margin-right: 20px;
  }

  @media (max-width: 576px) {
    font-size: 18px;
    margin-right: 0;
    width: 100%;
  }
}

.price {
  font-size: 18px;
  min-width: 120px;

  @media (max-width: 768px) {
    font-size: 16px;
    min-width: 100px;
  }

  @media (max-width: 576px) {
    font-size: 14px;
    min-width: auto;
  }
}

.more {
  font-size: 18px;
  color: inherit;
  text-decoration: none;
  border-bottom: 1px solid currentColor;
  transition: opacity 0.2s;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 576px) {
    font-size: 14px;
  }

  &:hover {
    opacity: 0.7;
  }
}

.preview {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%) rotate(6deg);
  width: 340px;
  max-width: 45vw;
  object-fit: cover;
  pointer-events: none;
  border-radius: 8px;
  z-index: 5;

  @media (max-width: 1200px) {
    width: 300px;
  }

  @media (max-width: 992px) {
    width: 250px;
  }

  @media (max-width: 768px) {
    width: 200px;
  }

  @media (max-width: 576px) {
    width: 150px;
    transform: translate(-50%, -50%) rotate(6deg);
  }
}

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
