<template>
  <nav>
    <a :style="{ color }" href="">Каталог</a>
    <a :style="{ color }" href="">Портфолио</a>
    <a :style="{ color }" href="">Акции</a>
    <a :style="{ color }" href="">О компании</a>
  </nav>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '#0A0A0A',
    },
  },
}
</script>

<style scoped>
nav {
  display: flex;
  align-items: center;
  gap: 1.875rem;
}
a {
  text-decoration: none;
}
</style>
