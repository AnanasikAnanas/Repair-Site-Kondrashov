<script setup>
defineProps({
  direction: {
    type: String,
    default: 'left',
    validator: (value) => ['left', 'right'].includes(value),
  },
})
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
    :style="{ transform: direction === 'right' ? 'rotate(180deg)' : 'none' }"
  >
    <path
      d="M15 12.5H5M5 12.5L10 7.5M5 12.5L10 17.5"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
