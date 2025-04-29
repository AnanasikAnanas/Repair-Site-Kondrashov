<template>
  <section class="info-block">
    <div class="info-block__header">
      <h1>Сочи Ремонт - Ваш эксперт в мире ремонта</h1>
      <div class="info-block__header-content">
        <p>Сочи ремонт - Профессиональный ремонт квратир в Сочи</p>
        <p>
          Сочи Ремонт предлагает комплексные решения для ремонта и отделки квартир в Сочи.
          Капитальный ремонт, дорогие интерьеры, работа под ключ. Узнайте о наших ценах и качестве
          услуг.
        </p>
        <p>
          Ремонт квартир в Сочи, капитальный ремонт сочи, дорогой ремонт сочи, ремонт под ключ сочи,
          отделка квартир в Сочи.
        </p>
      </div>
    </div>

    <div class="info-block__content">
      <div class="info-block__content-item">
        <div class="info-block__content-item-header">
          <h2>О компании</h2>
          <p>
            Компания "Сочи Ремонт" с гордостью представляет широкий спектр ремонтных и отделочных
            услуг в Сочи с 2015 года. Наша миссия — превращать ваше жилище в место мечты с помощью
            инновационных решений и безупречного качества работы.<br /><br />Мы специализируемся на
            ремонте квартир в Сочи, предлагая услуги от косметического до капитального ремонта.
            Благодаря глубоким знаниям местного рынка и опыту, наша команда гарантирует выполнение
            проектов любой сложности на высшем уровне.
          </p>
        </div>
      </div>
      <Services />
      <div class="info-block__content-item">
        <div class="info-block__content-item-header">
          <h2>Цены на ремонт в Сочи</h2>
          <p>
            В "Сочи Ремонт" вы найдете прозрачную и честную ценовую политику. Мы предлагаем ремонт
            квартир в Сочи по адекватным ценам, оптимизированным под каждый конкретный проект. Наши
            предложения позволяют вам выбрать оптимальный вариант ремонта в зависимости от ваших
            нужд и бюджета.<br /><br />Для более детальной информации о ценах, пожалуйста, посетите
            нашу страницу "Цены" или свяжитесь с нами для получения персонализированной сметы.
          </p>
        </div>
      </div>
      <div class="info-block__content-item">
        <div class="info-block__content-item-header">
          <h2>Контакты</h2>
          <p>
            Если у вас возникли вопросы или вы хотите обсудить ваш проект ремонта, наша команда
            всегда к вашим услугам. Мы доступны для консультаций и готовы начать работу над вашим
            проектом в удобное для вас время.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/styles/mixins.scss';
.info-block {
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 130px;

  @media (max-width: 1200px) {
    padding: 40px;
    gap: 100px;
  }

  @media (max-width: 768px) {
    padding: 30px;
    gap: 80px;
  }

  @media (max-width: 576px) {
    padding: 20px;
    gap: 60px;
  }

  h2 {
    margin: 0;
  }
  p {
    margin: 0;
  }

  .info-block__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 40px;

    @media (max-width: 992px) {
      flex-direction: column;
      gap: 30px;
    }

    h1 {
      font-size: 64px;
      font-weight: 500;
      line-height: 130%;
      letter-spacing: -1.28px;
      max-width: 740px;

      @media (max-width: 1200px) {
        font-size: 48px;
      }

      @media (max-width: 768px) {
        font-size: 36px;
      }

      @media (max-width: 576px) {
        font-size: 28px;
      }
    }

    .info-block__header-content {
      display: flex;
      flex-direction: column;
      gap: 30px;
      max-width: 500px;

      @media (max-width: 992px) {
        max-width: 100%;
        gap: 20px;
      }

      p {
        font-size: 18px;
        font-weight: 400;
        line-height: 130%;
        letter-spacing: -0.36px;
        color: #848386;
        margin: 0;

        @media (max-width: 576px) {
          font-size: 16px;
        }
      }
    }
  }

  .info-block__content {
    display: flex;
    gap: 90px;

    @media (max-width: 1200px) {
      gap: 60px;
    }

    @media (max-width: 992px) {
      flex-direction: column;
      gap: 40px;
    }

    .info-block__content-item {
      display: flex;
      flex-direction: column;
      gap: 30px;
      flex: 1;

      @media (max-width: 992px) {
        gap: 20px;
      }

      .info-block__content-item-header {
        display: flex;
        flex-direction: column;
        gap: 30px;

        @media (max-width: 992px) {
          gap: 20px;
        }

        h2 {
          font-size: 30px;
          font-weight: 500;
          margin: 0;

          @media (max-width: 768px) {
            font-size: 24px;
          }
        }

        p {
          font-size: 18px;
          font-weight: 400;
          line-height: 130%;
          letter-spacing: -0.36px;
          max-width: 360px;

          @media (max-width: 992px) {
            max-width: 100%;
          }

          @media (max-width: 576px) {
            font-size: 16px;
          }
        }
      }

      .info-block__content-item-header-rhombus {
        display: flex;
        align-items: center;
        gap: 10px;
        max-width: 360px;

        @media (max-width: 992px) {
          max-width: 100%;
        }

        h2 {
          margin: 0;
        }
      }
    }
  }
}
</style>

<script>
import Rhombus from '@/components/icons/Rhombus.vue'
import Services from '@/components/InfoBlock/Services.vue'
export default {
  components: { Rhombus, Services },
}
</script>
