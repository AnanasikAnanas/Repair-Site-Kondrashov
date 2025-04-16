<template>
  <header>
    <IconLogo :color="color" />
    <Navigation :color="color" />
    <a :style="{ color }" href="#" class="number">+7 (931) 724 09 42</a>
    <button :style="{ color }">Оформить заявку</button>
  </header>
</template>

<script>
import IconLogo from './icons/IconLogo.vue'
import Navigation from './Navigation.vue'
export default {
  name: 'TheHeader',
  components: { IconLogo, Navigation },
  props: {
    color: {
      type: String,
      default: '#0A0A0A',
    },
  },
}
</script>

<style scoped>
header {
  height: 100px;
  position: sticky;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
a {
  color: black;
}
button {
  font-size: 18px;
  background: none;
  border: none;
  text-decoration-line: underline;
}
</style>
