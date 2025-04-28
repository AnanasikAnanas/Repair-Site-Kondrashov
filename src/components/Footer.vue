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

      <button>Обратный звонок</button>
    </div>
  </footer>
</template>

<script setup>
import LogoFooter from '@/components/icons/LogoFooter.vue'
import VkIcon from '@/components/icons/VkIcon.vue'
import TelegramIcon from '@/components/icons/TelegramIcon.vue'
import ViberIcon from '@/components/icons/ViberIcon.vue'
import YoutubeIcon from '@/components/icons/YoutubeIcon.vue'
import OkIcon from '@/components/icons/OkIcon.vue'
</script>

<style scoped lang="scss">
@import '@/styles/mixins.scss';
footer {
  display: flex;
  justify-content: space-between;
  padding: 50px;
  margin-top: 120px;
  a{
    color: black;
    text-decoration: none;
    transition-duration: 300ms;
    &:hover{
      opacity: 0.5;
    }
  }
  .footer__container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    .footer__links {
      display: flex;
      flex-direction: column;
      gap: 30px;
      max-width: 275px;
      a {
        color: black;
        opacity: 0.2;
        text-decoration: underline;
        font-size: 18px;
      }
    }
  }
  .footer__navs {
    display: flex;
    flex-direction: column;
    gap: 30px;
    a {
      font-size: 30px;
      font-weight: 400;
    }
  }
  .footer__contacts {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .footer__contacts-left {
      display: flex;
      flex-direction: column;
      gap: 30px;
    }
    a {
      color: #848386;
      text-decoration: underline;
    }
    .footer__email {
      display: flex;
      flex-direction: column;
    }
    .footer__phone {
      display: flex;
      flex-direction: column;
    }
    .footer__social {
      display: flex;
      gap: 15px;
    }
  }
  button {
    @include button(white, #848386);
  }
}
</style>
