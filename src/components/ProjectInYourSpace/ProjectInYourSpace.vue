<script setup>
import ButtonWithModal from '@/components/ButtonWithModal.vue'
import Rhombus from '../icons/Rhombus.vue'
</script>

<template>
  <section class="project-in-your-space">
    <div class="project-in-your-space__container">
      <div class="project-in-your-space__title">
        <h1>Реализуем проект в вашем помещении!</h1>
      </div>
      <div class="project-in-your-space__content">
        <Rhombus />
        <p>Скидка 20% при первом заказе</p>
      </div>
    </div>
    <ButtonWithModal class="project-in-your-space__button" text="Заказать ремонт" />
  </section>
</template>

<style lang="scss" scoped>
@import '@/styles/mixins.scss';

.project-in-your-space {
  position: relative;
  background-image: url('/bg-2.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 50px;
  margin-top: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  box-sizing: border-box;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

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

  .project-in-your-space__container {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: 40px;

    @media (max-width: 768px) {
      gap: 30px;
    }

    @media (max-width: 576px) {
      gap: 20px;
    }
  }

  h1 {
    font-size: 64px;
    font-weight: 500;
    max-width: 56.25rem;
    margin: 0;
    line-height: 120%;
    color: #fff;

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
      margin: 0;
      color: #fff;

      @media (max-width: 768px) {
        font-size: 16px;
      }
    }
  }

  .project-in-your-space__button {
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: flex-end;
    margin-top: auto;
    padding-top: 60px;

    @media (max-width: 992px) {
      justify-content: center;
      padding-top: 40px;
    }

    @media (max-width: 768px) {
      padding-top: 30px;
    }

    @media (max-width: 576px) {
      padding-top: 20px;
    }

    :deep(button) {
      @media (max-width: 992px) {
        width: 100%;
        max-width: 400px;
      }
    }
  }
}
</style>
