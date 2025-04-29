<template>
  <header>
    <a href="/"> <IconLogo :color="color" /> </a>
    <Navigation :color="color" />
    <a :style="{ color, opacity }" href="#" class="number">+7 (931) 724 09 42</a>
    <button :style="{ color }" @click="openModal" class="modal-btn">Оформить заявку</button>
    <ModalFeedBack ref="feedbackModal" />
    <button class="menu-button" @click="openMenu">Меню</button>
    <MobileMenu ref="mobileMenu" />
  </header>
</template>

<script>
import IconLogo from './icons/IconLogo.vue'
import MobileMenu from './MobileMenu.vue'
import ModalFeedBack from './ModalFeedBack.vue'
import Navigation from './Navigation.vue'

export default {
  name: 'TheHeader',
  components: { IconLogo, Navigation, ModalFeedBack, MobileMenu },
  props: {
    color: {
      type: String,
      default: '#0A0A0A',
    },
    opacity: {
      type: Number,
      default: 0.4,
    },
  },
  methods: {
    openModal() {
      this.$refs.feedbackModal.openModal()
    },
    openMenu() {
      this.$refs.mobileMenu.openMenu()
    },
  },
}
</script>

<style lang="scss" scoped>
header {
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px;

  @media (max-width: 1200px) {
    padding: 40px;
  }

  @media (max-width: 768px) {
    padding: 30px;
    font-size: 16px;
  }

  @media (max-width: 576px) {
    padding: 20px;
  }
}

a {
  color: black;
  text-decoration: none;

  &.number {
    transition: opacity 0.3s ease;
    &:hover {
      opacity: 0.7 !important;
    }
  }
}

button {
  font-size: 18px;
  background: none;
  border: none;
  text-decoration-line: underline;
  cursor: pointer;
  transition: opacity 0.3s ease;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  &:hover {
    opacity: 0.7;
  }
}

.menu-button {
  color: inherit;
}

@media (min-width: 1025px) {
  .menu-button {
    display: none;
  }
}

@media (max-width: 1024px) {
  .number,
  .modal-btn {
    display: none;
  }
}
</style>
