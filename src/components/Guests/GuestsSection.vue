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
  height: 1000px;
  color: white;
  h1 {
    font-size: 64px;
    font-weight: 500;
    max-width: 56.25rem;
    margin: 0;
    line-height: 130%;
    letter-spacing: -1.28px;
  }
  .project-in-your-space__container {
    display: flex;
    flex-direction: column;
    gap: 60px;
  }
  .project-in-your-space__content {
    display: flex;
    align-items: center;
    gap: 0.9375rem;
    p {
      font-size: 18px;
      font-weight: 400;
    }
  }
  .project-in-your-space__buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: auto;
    padding-bottom: 50px;
    position: relative;
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
    &:hover {
      background: #f0f0f0;
    }
  }
  .project-in-your-space__button {
    position: absolute;
    right: 0;
    &:hover {
      background: #f0f0f0;
    }
  }
}
</style>
