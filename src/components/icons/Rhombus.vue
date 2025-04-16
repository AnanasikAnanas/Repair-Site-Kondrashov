<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" :fill="color">
    <path d="M9 0L18 9L9 18L0 9L9 0Z" :fill="color" />
  </svg>
</template>

<script setup>
defineProps({
  color: {
    type: String,
    default: '#40362E',
  },
})
</script>
