<script setup>
import TheHeader from '@/components/TheHeader.vue'
import ButtonWithModal from '../ButtonWithModal.vue'
import Rhombus from '../icons/Rhombus.vue'
</script>

<template>
  <main class="hero px-1">
    <TheHeader class="" color="white" />
    <div class="main-content">
      <div class="content">
        <h1>Ремонт и отделка в Сочи</h1>
        <div class="subtitle-container">
          <Rhombus color="#FFFBFC" />
          <p class="subtitle">Отремонтируем ваш дом, квартиру или комнату</p>
        </div>
      </div>
      <div class="info">
        <p>Все виды услуг по ремонту, отделке и проектированию</p>
        <ButtonWithModal text="Заказать ремонт" />
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
  padding: 50px;

  @media (max-width: 1024px) {
    gap: 60px;
    padding: 30px;
  }

  @media (max-width: 768px) {
    gap: 40px;
    padding: 20px;
  }
}

.content {
  max-width: 980px;
  display: flex;
  flex-direction: column;
  gap: 100px;

  @media (max-width: 1024px) {
    gap: 60px;
  }

  @media (max-width: 768px) {
    gap: 40px;
  }

  h1 {
    font-size: 120px;
    font-weight: 400;
    line-height: 1;

    @media (max-width: 1200px) {
      font-size: 90px;
    }

    @media (max-width: 1024px) {
      font-size: 70px;
    }

    @media (max-width: 768px) {
      font-size: 50px;
    }

    @media (max-width: 480px) {
      font-size: 40px;
    }
  }

  .subtitle-container {
    display: flex;
    align-items: center;
    gap: 16px;

    @media (max-width: 768px) {
      gap: 12px;
    }

    p {
      font-size: 18px;
      margin: 0;

      @media (max-width: 768px) {
        font-size: 16px;
      }
    }
  }
}

.info {
  display: flex;
  align-items: center;
  gap: 40px;
  align-self: flex-end;
  margin-top: 150px;

  @media (max-width: 1024px) {
    margin-top: 80px;
    gap: 30px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-self: center;
    margin-top: 40px;
    gap: 20px;
    text-align: center;
  }

  p {
    font-size: 30px;
    margin: 0;
    max-width: 430px;

    @media (max-width: 1024px) {
      font-size: 24px;
    }

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
}
</style>
