<script>
import TheHeader from '../Header.vue'
import Rhombus from '../icons/Rhombus.vue'
export default {
  components: { TheHeader, Rhombus },
  name: 'HomeView',
}
</script>

<template>
  <main class="hero">
    <TheHeader class="container" color="white" />
    <div class="main-content container">
      <div class="content">
        <h1>Ремонт и отделка в Сочи</h1>
        <div class="subtitle-container">
          <Rhombus color="#FFFBFC" />
          <p class="subtitle">Отремонтируем ваш дом, квартиру или комнату</p>
        </div>
      </div>
      <div class="info">
        <p>Все виды услуг по ремонту, отделке и проектированию</p>
        <button class="order-button">Заказать ремонт</button>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import '@/styles/_mixins.scss';
.hero {
  min-height: 100vh;
  background-image: url('/Home.png');
  background-size: cover;
  background-position: center;
  position: relative;
  color: white;
}

.main-content {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 100px;
  align-content: space-around;
}

.content {
  max-width: 980px;

  h1 {
    font-size: 120px;
    font-weight: 400;
    line-height: 1;
  }

  .subtitle-container {
    display: flex;
    align-items: center;
    gap: 16px;

    p {
      font-size: 18px;
      margin: 0;
    }
  }
}

.info {
  display: flex;
  align-items: center;
  gap: 40px;
  position: absolute;
  right: 50px;
  bottom: -25rem;

  p {
    font-size: 30px;
    margin: 0;
    max-width: 430px;
  }

  .order-button {
    @include button(white, #848386);

    &:hover {
      background: #f0f0f0;
    }
  }
}
</style>
