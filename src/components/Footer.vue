<template>
  <footer>
    <div class="footer__container">
      <LogoFooter />
      <div class="footer__links">
        <a href="#">Политика конфиденциальности</a
        ><a href="#">@2017-2023 Сочи-Ремонт Все права защищены</a
        ><a href="#">Разработано Студией Сайтов</a>
      </div>
    </div>
    <div class="footer__navs">
      <a href="#">Все услуги</a>
      <a href="">Капитальный ремонт</a>
      <a href="">Офисный ремонт</a>
      <a href="">Черновой ремонт</a>
      <a href="">Евроремонт</a>
    </div>
    <div class="footer__navs">
      <a href="#">Акции</a>
      <a href="">О нас</a>
      <a href="">Отзывы</a>
      <a href="">Вопрос-ответ</a>
      <a href="">Блог</a>
      <a href="">Контакты</a>
      <a href="">Карта сайта</a>
    </div>
    <div class="footer__contacts">
      <div class="footer__contacts-left">
        <div class="footer__email">
          <p>E-mail</p>
          <a href="#">sochi-repair@gmail.com</a>
        </div>
        <div class="footer__phone">
          <p>Номер телефона</p>
          <a href="#">+7 (931) 724-09-42</a>
        </div>
        <div class="footer__social">
          <a href="#">
            <VkIcon />
          </a>
          <a href="#">
            <TelegramIcon />
          </a>
          <a href="#">
            <ViberIcon />
          </a>
          <a href="#">
            <YoutubeIcon />
          </a>
        </div>
      </div>

      <ButtonWithModal text="Обратный звонок" />
    </div>
  </footer>
</template>

<script setup>
import ButtonWithModal from '@/components/ButtonWithModal.vue'
import LogoFooter from '@/components/icons/LogoFooter.vue'
import TelegramIcon from '@/components/icons/TelegramIcon.vue'
import ViberIcon from '@/components/icons/ViberIcon.vue'
import VkIcon from '@/components/icons/VkIcon.vue'
import YoutubeIcon from '@/components/icons/YoutubeIcon.vue'
</script>

<style scoped lang="scss">
@import '@/styles/mixins.scss';
footer {
  display: flex;
  justify-content: space-between;
  padding: 50px;
  margin-top: 120px;

  @media (max-width: 1200px) {
    padding: 40px;
    margin-top: 80px;
    flex-wrap: wrap;
    gap: 40px;
  }

  @media (max-width: 768px) {
    padding: 30px;
    margin-top: 60px;
    flex-direction: column;
    gap: 30px;
  }

  a {
    color: black;
    text-decoration: none;
    transition-duration: 300ms;
    &:hover {
      opacity: 0.5;
    }
  }

  .footer__container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;

    @media (max-width: 768px) {
      align-items: center;
      text-align: center;
    }

    .footer__links {
      display: flex;
      flex-direction: column;
      gap: 30px;
      max-width: 275px;

      @media (max-width: 768px) {
        align-items: center;
        gap: 20px;
      }

      a {
        color: black;
        opacity: 0.2;
        text-decoration: underline;
        font-size: 18px;

        @media (max-width: 768px) {
          font-size: 16px;
        }
      }
    }
  }

  .footer__navs {
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media (max-width: 768px) {
      align-items: center;
      gap: 20px;
    }

    a {
      font-size: 30px;
      font-weight: 400;

      @media (max-width: 1200px) {
        font-size: 24px;
      }

      @media (max-width: 768px) {
        font-size: 20px;
      }
    }
  }

  .footer__contacts {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 768px) {
      align-items: center;
      text-align: center;
      gap: 30px;
    }

    .footer__contacts-left {
      display: flex;
      flex-direction: column;
      gap: 30px;

      @media (max-width: 768px) {
        align-items: center;
        gap: 20px;
      }
    }

    a {
      color: #848386;
      text-decoration: underline;
    }

    .footer__email,
    .footer__phone {
      display: flex;
      flex-direction: column;

      @media (max-width: 768px) {
        align-items: center;
      }
    }

    .footer__social {
      display: flex;
      gap: 15px;

      @media (max-width: 768px) {
        justify-content: center;
      }
    }
  }
}
</style>
