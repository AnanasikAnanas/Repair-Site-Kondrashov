<template>
  <div class="menu" :class="{ 'menu--open': isOpen }">
    <div class="menu__header">
      <button class="menu__close" @click="closeMenu">Закрыть</button>
    </div>

    <div class="menu__logo">
      <IconLogo />
    </div>

    <nav class="menu__nav">
      <a href="#" class="menu__link">Услуги</a>
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
import ViberIcon from './icons/ViberIcon.vue'
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
.menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #fffbfc;
  z-index: 1000;
  padding: 20px;
  display: flex;
  flex-direction: column;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  overflow-y: auto;

  &--open {
    transform: translateX(0);
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
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
  }

  &__logo {
    margin-bottom: 40px;
  }

  &__nav {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 60px;
  }

  &__link {
    font-size: 24px;
    color: #0a0a0a;
    text-decoration: none;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }

  &__contacts {
    margin-top: auto;
  }

  &__contact-label {
    font-size: 14px;
    color: #0a0a0a;
    margin-bottom: 5px;
  }

  &__contact-value {
    font-size: 16px;
    color: #0a0a0a;
    text-decoration: none;
    margin-bottom: 20px;
    display: block;
  }

  &__social {
    display: flex;
    gap: 15px;
    margin-bottom: 20px;
  }

  &__social-link {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(10, 10, 10, 0.1);
    border-radius: 50%;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }

  &__callback {
    width: 100%;
    padding: 15px;
    background: none;
    border: 1px solid rgba(10, 10, 10, 0.1);
    border-radius: 5px;
    font-size: 16px;
    color: #0a0a0a;
    cursor: pointer;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }
}
</style>
