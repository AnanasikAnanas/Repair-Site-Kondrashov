<template>
  <header>
    <a href="/"> <IconLogo :color="color" /> </a>
    <Navigation :color="color" />
    <a :style="{ color, opacity }" href="#" class="number">+7 (931) 724 09 42</a>
    <button :style="{ color }" @click="openModal">Оформить заявку</button>
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

<style scoped>
header {
  position: sticky;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
}
a {
  color: black;
}
button {
  font-size: 18px;
  background: none;
  border: none;
  text-decoration-line: underline;
  cursor: pointer;
}
.menu-button {
  color: inherit;
}

@media (min-width: 769px) {
  .menu-button {
    display: none;
  }
}
</style>
