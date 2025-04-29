<template>
  <div class="menu" :class="{ 'menu--open': isOpen }">
    <div class="menu__header">
      <div class="menu__logo">
        <IconLogo />
      </div>
      <button class="menu__close" @click="closeMenu">Закрыть</button>
    </div>

    <nav class="menu__nav">
      <a href="/catalog" class="menu__link">Услуги</a>
      <a href="#" class="menu__link">Акции</a>
      <a href="#" class="menu__link">О нас</a>
      <a href="#" class="menu__link">Отзывы</a>
      <a href="#" class="menu__link">Вопрос-ответ</a>
      <a href="#" class="menu__link">Блог</a>
      <a href="#" class="menu__link">Контакты</a>
    </nav>

    <div class="menu__contacts">
      <div class="menu__email">
        <div class="menu__contact-label">E-mail</div>
        <a href="mailto:sochi-repair@gmail.com" class="menu__contact-value"
          >sochi-repair@gmail.com</a
        >
      </div>

      <div class="menu__phone">
        <div class="menu__contact-label">Номер телефона</div>
        <a href="tel:+79317240942" class="menu__contact-value">+7 (931) 724 09 42</a>
      </div>

      <div class="menu__social">
        <a href="#" class="menu__social-link">
          <VkIcon />
        </a>
        <a href="#" class="menu__social-link">
          <TelegramIcon />
        </a>
        <a href="#" class="menu__social-link">
          <WhatsappIcon />
        </a>
        <a href="#" class="menu__social-link">
          <YoutubeIcon />
        </a>
        <a href="#" class="menu__social-link">
          <OkIcon />
        </a>
      </div>

      <button class="menu__callback">Обратный звонок</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import IconLogo from './icons/IconLogo.vue'
import OkIcon from './icons/OkIcon.vue'
import TelegramIcon from './icons/TelegramIcon.vue'
import VkIcon from './icons/VkIcon.vue'
import YoutubeIcon from './icons/YoutubeIcon.vue'

const isOpen = ref(false)

const openMenu = () => {
  isOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeMenu = () => {
  isOpen.value = false
  document.body.style.overflow = ''
}

defineExpose({
  openMenu,
  closeMenu,
})
</script>

<style scoped lang="scss">
@import '@/styles/mixins.scss';

.menu {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background: #fffbfc;
  z-index: 99998;
  padding: 30px;
  display: flex;
  flex-direction: column;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  overflow-y: auto;
  box-sizing: border-box;

  @media (max-width: 576px) {
    padding: 20px;
  }

  &--open {
    transform: translateX(0);
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;

    @media (max-width: 576px) {
      margin-bottom: 30px;
    }
  }

  &__title {
    font-size: 16px;
    color: rgba(10, 10, 10, 0.4);
  }

  &__close {
    font-size: 16px;
    color: #0a0a0a;
    background: none;
    border: none;
    cursor: pointer;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.7;
    }
  }

  &__logo {


    svg {
      @media (max-width: 576px) {
        transform: scale(0.9);
        transform-origin: left center;
      }
    }
  }

  &__nav {
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-bottom: 60px;

    @media (max-width: 768px) {
      gap: 20px;
      margin-bottom: 50px;
    }

    @media (max-width: 576px) {
      gap: 15px;
      margin-bottom: 40px;
    }
  }

  &__link {
    font-size: 24px;
    color: #0a0a0a;
    text-decoration: none;
    transition: opacity 0.3s ease;

    @media (max-width: 768px) {
      font-size: 20px;
    }

    @media (max-width: 576px) {
      font-size: 18px;
    }

    &:hover {
      opacity: 0.7;
    }
  }

  &__contacts {
    margin-top: auto;
    padding-top: 30px;

    @media (max-width: 576px) {
      padding-top: 20px;
    }
  }

  &__contact-label {
    font-size: 14px;
    color: rgba(10, 10, 10, 0.4);
    margin-bottom: 5px;
  }

  &__contact-value {
    font-size: 18px;
    color: #0a0a0a;
    text-decoration: none;
    margin-bottom: 20px;
    display: block;
    transition: opacity 0.3s ease;

    @media (max-width: 576px) {
      font-size: 16px;
      margin-bottom: 15px;
    }

    &:hover {
      opacity: 0.7;
    }
  }

  &__social {
    display: flex;
    gap: 15px;
    margin-bottom: 30px;

    @media (max-width: 576px) {
      margin-bottom: 20px;
    }
  }

  &__social-link {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: all 0.3s ease;

    @media (max-width: 576px) {
      width: 36px;
      height: 36px;

      svg {
        transform: scale(0.9);
      }
    }

    &:hover {
      opacity: 0.7;
      border-color: rgba(10, 10, 10, 0.2);
    }
  }

  &__callback {
    @include button(white, #848386);
    width: 100%;
    padding: 15px;
    font-size: 16px;

    @media (max-width: 576px) {
      padding: 12px;
      font-size: 14px;
    }
  }
}
</style>
