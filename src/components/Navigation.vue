<template>
  <nav>
    <a :style="{ color }" href="/catalog">Каталог</a>
    <a :style="{ color }" href="#projects">Портфолио</a>
    <a :style="{ color }" href="">Акции</a>
    <a :style="{ color }" href="#info">О компании</a>
    <a :style="{ color }" href="">Контакты</a>
  </nav>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '#0A0A0A',
      opacity: {
        type: Number,
        default: 0.4,
      },
    },
  },
}
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  align-items: center;
  gap: 1.875rem;

  @media (max-width: 1200px) {
    gap: 1.5rem;
  }

  @media (max-width: 1024px) {
    display: none;
  }
}

a {
  color: #0a0a0a;
  opacity: 0.4;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 18px;

  @media (max-width: 1200px) {
    font-size: 16px;
  }

  &:hover {
    opacity: 1;
  }
}
</style>
