<template>
  <div class="success-view-container">
    <TheHeader />
    <div class="success-view">
      <div class="success-view__content">
        <a href="/">Назад</a>
        <h1>Успешно</h1>
      </div>
      <div class="divider"></div>
      <div class="success-view__content-success">
        <div class="success-view__content-success-item">
          <Rhombus />
          <p>Ваша заявка отправлена, мы скоро свяжемся с Вами</p>
        </div>
        <button @click="goToMain">На главную</button>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import Rhombus from '@/components/icons/Rhombus.vue'

export default {
  components: {
    TheHeader,
    Rhombus,
  },
  methods: {
    goToMain() {
      this.$router.push('/')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixins.scss';
.success-view-container {
  height: 100vh;
}
.success-view {
  display: flex;
  flex-direction: column;
  .success-view__content {
    display: flex;
    padding: 50px;
    gap: 400px;
    margin-top: 100px;

    @media (max-width: 1400px) {
      gap: 200px;
    }

    @media (max-width: 1200px) {
      gap: 100px;
      margin-top: 80px;
    }

    @media (max-width: 992px) {
      flex-direction: column;
      gap: 40px;
      margin-top: 60px;
    }

    @media (max-width: 768px) {
      padding: 30px;
      margin-top: 40px;
    }

    @media (max-width: 576px) {
      padding: 20px;
      margin-top: 30px;
    }

    h1 {
      font-size: 120px;
      font-weight: 500;
      line-height: 100%;
      letter-spacing: -2.4px;
      max-width: 533px;
      margin: 0;
      justify-self: center;

      @media (max-width: 1400px) {
        font-size: 100px;
      }

      @media (max-width: 1200px) {
        font-size: 80px;
        letter-spacing: -1.6px;
      }

      @media (max-width: 992px) {
        font-size: 64px;
        letter-spacing: -1.28px;
        max-width: 100%;
      }

      @media (max-width: 768px) {
        font-size: 48px;
        letter-spacing: -0.96px;
      }

      @media (max-width: 576px) {
        font-size: 36px;
        letter-spacing: -0.72px;
      }
    }
    a {
      font-size: 18px;
      color: #848386;

      @media (max-width: 768px) {
        font-size: 16px;
      }
    }
  }
  .divider {
    width: 100%;
    height: 1px;
    background: #848386;
    opacity: 0.1;
    padding: 0;
  }
  .success-view__content-success {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 50px;
    height: 400px;

    @media (max-width: 1200px) {
      height: 350px;
    }

    @media (max-width: 992px) {
      height: 300px;
      padding: 40px;
    }

    @media (max-width: 768px) {
      height: 500px;
      padding: 30px;
    }

    @media (max-width: 576px) {
      height: 500px;
      padding: 20px;
    }

    .success-view__content-success-item {
      display: flex;
      gap: 15px;
      p {
        margin: 0;
        font-size: 18px;
        max-width: 15.125rem;
        line-height: 130%;

        @media (max-width: 768px) {
          font-size: 16px;
        }

        @media (max-width: 576px) {
          font-size: 14px;
        }
      }
    }
    button {
      @include button(white, #848386);
      align-self: end;
      justify-self: end;

      @media (max-width: 576px) {
        width: 100%;
        align-self: center;
      }
    }
  }
}
</style>
