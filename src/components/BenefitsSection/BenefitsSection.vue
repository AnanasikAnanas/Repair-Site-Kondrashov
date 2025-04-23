<template>
  <section class="benefits-section">
    <div class="benefits-section__header">
      <h1>Почему мы предоставляем лучшие услуги в Сочи</h1>
      <div class="benefits-section__header-rhombus">
        <Rhombus />
        <p>Преимущества</p>
      </div>
    </div>
    <div class="benefits-section__content">
      <div class="benefits-section__content-cards">
        <div class="benefits-section__content-cards-item"><p>Уникальный дизайн</p></div>
        <div class="benefits-section__content-cards-item"><p>Лучшие материалы</p></div>
        <div class="benefits-section__content-cards-item"><p>Быстрое выполнение</p></div>
      </div>
      <div class="benefits-section__content-text">
        <h4>
          Ремонтируем квартиры уже более 20 лет. Имеем более 60 сотрудников в штате, которые горят
          своим делом.
        </h4>
        <button class="content-button">О компании</button>
      </div>
    </div>
  </section>
</template>

<script>
import Rhombus from '../icons/Rhombus.vue'
export default {
  components: { Rhombus },
}
</script>

<style lang="scss" scoped>
@import '../../styles/mixins.scss';
.benefits-section {
  display: flex;
  flex-direction: column;
  background: #000;
  color: #fffbfc;
  padding: 50px 50px;
  justify-content: space-between;
  margin-top: 180px;

  .benefits-section__header {
    display: flex;
    flex-direction: column;
    gap: 10.625rem;
    h1 {
      font-size: 64px;
      font-weight: 400;
      max-width: 935px;
    }
    .benefits-section__header-rhombus {
      display: flex;
      align-items: center;
      gap: 15px;
      p {
        font-size: 18px;
        font-weight: 400;
      }
    }
  }
  .benefits-section__content {
    display: flex;
    flex-direction: column;
    align-self: flex-end;
		gap: 80px;
    .benefits-section__content-cards {
      display: flex;
      gap: 40px;
      .benefits-section__content-cards-item {
				transition: 0.3s;
        border-radius: 1000px;
        width: 428px;
        height: 428px;
        border: 1px solid #40362e;
        display: flex;
        align-items: center;
        justify-content: center;
				&:hover{
					scale: 1.1;
				}
        p {
					font-size: 30px;
          max-width: 200px;
          text-align: center;
        }
      }
      .benefits-section__content-cards-item:nth-child(2) {
        background: #40362e;
        color: #fffbfc;
      }
    }
  }
}
.benefits-section__content-text {
  display: flex;
  justify-content: space-between;
	align-items: center;
  h4 {
    max-width: 600px;
    font-size: 30px;
    font-weight: 400;
    color: #848386;
    line-height: 120%; /* 36px */
    letter-spacing: -0.3px;
  }
  .content-button {
    @include button(black, #848386);
    
  }
}
</style>
