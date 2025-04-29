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
  background-image: url('/bg-2.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 50px 50px;
  margin-top: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 1000px;
  h1 {
    font-size: 64px;
    font-weight: 500;
    max-width: 56.25rem;
    margin: 0;
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
  .project-in-your-space__button {
    display: flex;
    justify-content: center;
    align-self: flex-end;
    margin-top: 60px;
  }
}
</style>
