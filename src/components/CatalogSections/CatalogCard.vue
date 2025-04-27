<template>
  <section class="repair-section">
    <div
      v-for="(card, index) in cards"
      :key="card.id"
      class="card"
      :class="{ active: hoverIndex === index }"
      @mouseenter="hoverIndex = index"
      @mouseleave="hoverIndex = null"
    >
      <!-- Левая метка -->
      <div class="label-block">
        <Rhombus color="black" />
        <span class="label-text">По виду</span>
      </div>

      <!-- Заголовок -->
      <h2 class="title">{{ card.title }}</h2>

      <!-- Цена -->
      <span class="price">от {{ card.price.toLocaleString('ru-RU') }} ₽ за м²</span>

      <!-- Ссылка -->
      <a href="#" class="more">Подробнее</a>

      <!-- Превью -->
      <transition name="fade">
        <img
          v-if="hoverIndex === index"
          :src="card.image"
          alt=""
          class="preview"
        />
      </transition>
    </div>
  </section>
</template>

<script>
import Rhombus from '@/components/icons/Rhombus.vue'
export default {
  name: 'RepairSection',
  data() {
    return {
      hoverIndex: null,
      cards: [
        {
          id: 1,
          title: 'Черновой ремонт',
          price: 6000,
          image:
            '/catalog-img1.png',
        },
        {
          id: 2,
          title: 'Капитальный ремонт',
          price: 14000,
          image:
            '/catalog-img1.png',
        },
        {
          id: 3,
          title: 'Декоративный ремонт',
          price: 8000,
          image:
            '/catalog-img1.png',
        },
        {
          id: 4,
          title: 'Евроремонт',
          price: 14000,
          image:
            '/catalog-img1.png',
        },
      ],
    };
  },
};
</script>

<style scoped>
/* 0. Гарантируем отсутствие клипов наверху */
.repair-section {
  width: 100%;
  overflow: visible !important;      /* <---- */
}

/* 1. Строка-карточка */
.card,
.card.active {                       /* <---- и у активной */
  position: relative;
  display: flex;
  align-items: center;
  gap: 100px;
  padding: 50px;
  border-bottom: 1px solid #848386;
	border-top: 1px solid #848386;
  transition: background-color 0.3s, color 0.3s;
  background: #ffffff;
  color: #0A0A0A;
  overflow: visible !important;      /* <---- ключевое */
}
.card.active {
  background: #40362E;
  color: #ffffff;
}

/* 2. Левая метка */
.label-block {
  display: flex;
  align-items: center;
}

.label-text { font-size: 18px; }

/* 3. Заголовок */
.title {
  flex: 1 1 auto;
  font-size: 30px;
  font-weight: 400;
	margin-right: 50px;
}

/* 4. Цена + ссылка */
.price {  font-size: 18px; }
.more  {
  font-size: 18px;
  color: inherit;
  text-decoration: none;
  border-bottom: 1px solid currentColor;
  transition: opacity 0.2s;
}
.more:hover { opacity: .7; }

/* 5. Фото-превью */
.preview {
  position: absolute;
  top: 50%;                        /* в середину строки */
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
.fade-leave-active { transition: opacity .3s; }
.fade-enter-from,
.fade-leave-to   { opacity: 0; }
</style>
