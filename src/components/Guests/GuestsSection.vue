<script setup>
import ButtonWithModal from '../ButtonWithModal.vue'
import ArrowSlider from '../icons/ArrowSlider.vue'
import Rhombus from '../icons/Rhombus.vue'
</script>

<template>
  <section class="project-in-your-space">
    <div class="project-in-your-space__container">
      <div class="project-in-your-space__title">
        <h1>Захочется приглашать гостей каждый день</h1>
      </div>
      <div class="project-in-your-space__content">
        <Rhombus color="white" />
        <p>Скидка 20% при первом заказе</p>
      </div>
    </div>
    <div class="project-in-your-space__buttons">
      <a href="#" class="arrow-button">
        <ArrowSlider rotate="90" />
      </a>
      <ButtonWithModal class="project-in-your-space__button" text="Заказать ремонт" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/styles/mixins.scss';
.project-in-your-space {
  position: relative;
  background-image: url('/bg-guests.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 50px;
  margin-top: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  min-height: 100vh;
  color: white;
  box-sizing: border-box;

  @media (max-width: 1200px) {
    padding: 40px;
    margin-top: 120px;
    min-height: 90vh;
  }

  @media (max-width: 768px) {
    padding: 30px;
    margin-top: 80px;
    min-height: 80vh;
  }

  @media (max-width: 576px) {
    padding: 20px;
    margin-top: 60px;
    min-height: 70vh;
  }

  h1 {
    position: relative;
    z-index: 2;
    font-size: 64px;
    font-weight: 500;
    max-width: 56.25rem;
    margin: 0;
    line-height: 130%;
    letter-spacing: -1.28px;

    @media (max-width: 1200px) {
      font-size: 48px;
      max-width: 45rem;
    }

    @media (max-width: 768px) {
      font-size: 36px;
      max-width: 100%;
    }

    @media (max-width: 576px) {
      font-size: 28px;
    }
  }

  .project-in-your-space__container {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: 60px;

    @media (max-width: 768px) {
      gap: 40px;
    }

    @media (max-width: 576px) {
      gap: 30px;
    }
  }

  .project-in-your-space__content {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    gap: 0.9375rem;

    @media (max-width: 576px) {
      gap: 0.625rem;
    }

    svg {
      @media (max-width: 576px) {
        transform: scale(0.8);
      }
    }

    p {
      font-size: 18px;
      font-weight: 400;

      @media (max-width: 768px) {
        font-size: 16px;
      }
    }
  }

  .project-in-your-space__buttons {
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: auto;
    padding-bottom: 50px;

    @media (max-width: 992px) {
      flex-direction: column;
      gap: 20px;
      padding-bottom: 40px;
    }

    @media (max-width: 576px) {
      padding-bottom: 30px;
    }
  }

  .arrow-button {
    align-self: center;
    padding: 24.5px;
    border-radius: 1000px;
    border: 1px solid #848386;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    transition: background-color 0.3s ease;

    @media (max-width: 768px) {
      display: none;
    }

    @media (max-width: 576px) {
      padding: 16px;
    }

    &:hover {
      background: #f0f0f0;
    }

    svg {
      @media (max-width: 576px) {
        transform: scale(0.8);
      }
    }
  }

  .project-in-your-space__button {
    position: absolute;
    right: 0;

    @media (max-width: 992px) {
      position: static;
      width: 100%;
      max-width: 400px;
    }

    :deep(button) {
      @media (max-width: 992px) {
        width: 100%;
      }
    }
  }
}
</style>
