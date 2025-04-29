<template>
  <header>
    <a href="/"> <IconLogo :color="color" /> </a>
    <Navigation :color="color" />
    <a :style="{ color, opacity}" href="#" class="number">+7 (931) 724 09 42</a>
    <button :style="{ color }" @click='openModal'>Оформить заявку</button>
    <ModalFeedBack ref="feedbackModal" />
  </header>
</template>

<script>
import IconLogo from './icons/IconLogo.vue'
import Navigation from './Navigation.vue'
import ModalFeedBack from './ModalFeedBack.vue'
export default {
  name: 'TheHeader',
  components: { IconLogo, Navigation, ModalFeedBack },
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
</style>
