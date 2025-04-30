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
  padding: 50px;
  justify-content: space-between;
  margin-top: 180px;
  gap: 80px;

  @media (max-width: 1200px) {
    padding: 40px;
    margin-top: 120px;
    gap: 60px;
  }

  @media (max-width: 768px) {
    padding: 30px;
    margin-top: 80px;
    gap: 40px;
  }

  @media (max-width: 576px) {
    padding: 20px;
    margin-top: 60px;
  }

  .benefits-section__header {
    display: flex;
    flex-direction: column;
    gap: 10.625rem;
    max-width: 50%;

    @media (max-width: 1200px) {
      gap: 8rem;
      max-width: 60%;
    }

    @media (max-width: 768px) {
      gap: 4rem;
      max-width: 100%;
    }

    h1 {
      font-size: 64px;
      font-weight: 400;
      max-width: 935px;
      line-height: 120%;

      @media (max-width: 1200px) {
        font-size: 48px;
        max-width: 700px;
      }

      @media (max-width: 768px) {
        font-size: 36px;
        max-width: 100%;
      }

      @media (max-width: 576px) {
        font-size: 28px;
      }
    }

    .benefits-section__header-rhombus {
      display: flex;
      align-items: center;
      gap: 15px;

      p {
        font-size: 18px;
        font-weight: 400;

        @media (max-width: 768px) {
          font-size: 16px;
        }
      }

      svg {
        @media (max-width: 576px) {
          transform: scale(0.8);
        }
      }
    }
  }

  .benefits-section__content {
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    gap: 80px;

    @media (max-width: 1200px) {
      gap: 60px;
    }

    @media (max-width: 768px) {
      gap: 40px;
    }

    .benefits-section__content-cards {
      display: flex;
      gap: 40px;
      width: 100%;

      @media (max-width: 1200px) {
        gap: 30px;
      }

      @media (max-width: 768px) {
        flex-direction: column;
        gap: 20px;
        .benefits-section__content-cards-item:nth-child(2) {
          align-self: flex-end;
        }
      }

      .benefits-section__content-cards-item {
        transition: all 0.3s ease;
        border-radius: 1000px;
        width: 428px;
        height: 428px;
        border: 1px solid #40362e;
        display: flex;
        align-items: center;
        justify-content: center;

        @media (max-width: 1200px) {
          width: 240px;
          height: 240px;
        }
        @media (max-width: 768px) {
          width: 500px;
          height: 280px;
          padding: 20px;
        }

        @media (max-width: 576px) {
          height: 240px;
          width: 230px;
        }

        &:hover {
          transform: scale(1.05);

          @media (max-width: 768px) {
            transform: scale(1.02);
          }
        }

        p {
          font-size: 30px;
          max-width: 200px;
          text-align: center;

          @media (max-width: 1200px) {
            font-size: 24px;
            max-width: 160px;
          }

          @media (max-width: 768px) {
            font-size: 20px;
            max-width: none;
          }
        }
      }

      .benefits-section__content-cards-item:nth-child(2) {
        background: #40362e;
        color: #fffbfc;
      }
    }
  }

  .benefits-section__content-text {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;

    @media (max-width: 992px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 30px;
    }

    h4 {
      max-width: 600px;
      font-size: 30px;
      font-weight: 400;
      color: #848386;
      line-height: 120%;
      letter-spacing: -0.3px;
      margin: 0;

      @media (max-width: 1200px) {
        font-size: 24px;
        max-width: 500px;
      }

      @media (max-width: 992px) {
        max-width: none;
      }

      @media (max-width: 768px) {
        font-size: 20px;
      }

      @media (max-width: 576px) {
        font-size: 18px;
      }
    }

    .content-button {
      @include button(black, #848386);

      @media (max-width: 992px) {
        width: 100%;
        margin: 0 auto;
      }
    }
  }
}
</style>
