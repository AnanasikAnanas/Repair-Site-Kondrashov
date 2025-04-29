<template>
  <section class="info-block">
    <div class="info-block__header">
      <a href="/catalog" class="info-block__header-link">Назад</a>
      <h1 class="info-block__title">Капитальный ремонт</h1>
    </div>
    <div class="info-block__divider"></div>
    <div class="info-block__content">
      <div class="info-block__rhombus">
        <Rhombus color="black" />
        <p>Для всех видов недвижимости</p>
      </div>
      <p class="info-block__content-text">
        Первым делом осуществляется выравниванием стен, а также потолка и полов. Затем выполняется
        полный демонтаж полового покрытия, а также перегородок и стенок. После выполнения всех этих
        работ дело доходит до замены сантехники и электрики. Капитальный ремонта в Сочи завершается
        укладкой паркета, монтажом плинтусов и бытового оборудования, а также многими другими
        финальными ремонтными работами.
      </p>
      <div class="info-block__content-price">
        <p>от 20.000 ₽ за м2</p>
        <ButtonWithModal text="Заказать ремонт" />
      </div>
    </div>
  </section>
</template>

<script setup>
import ButtonWithModal from '@/components/ButtonWithModal.vue'
import Rhombus from '@/components/icons/Rhombus.vue'
</script>

<style lang="scss" scoped>
@import '@/styles/mixins.scss';
.info-block {
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 60px;
  margin-top: 120px;
  .info-block__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 15px;
    a {
      color: #848386;
      font-size: 18px;
    }
    h1 {
      font-size: 120px;
      font-weight: 500;
      margin: 0;
    }
    p {
      max-width: 910px;
      font-size: 18px;
    }
  }
  .info-block__divider {
    width: 100%;
    height: 1px;
    background-color: #848386;
    opacity: 0.1;
  }
  .info-block__content {
    display: flex;
    justify-content: space-between;
    .info-block__rhombus {
      display: flex;
      align-items: start;
      gap: 15px;
      p {
        font-size: 18px;
        margin: 0;
      }
    }
    .info-block__content-text {
      font-size: 18px;
      line-height: 130%;
      max-width: 714px;
      color: #848386;
      margin: 0;
    }
    .info-block__content-price {
      display: flex;
      flex-direction: column;
      gap: 40px;
      p {
        font-size: 18px;
        margin: 0;
      }
      button {
        @include button(white, #848386);
      }
    }
  }
}
</style>
