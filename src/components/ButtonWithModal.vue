<template>
  <div>
    <button class="button" :class="buttonClass" @click="openModal">
      <slot>{{ text }}</slot>
    </button>
    <ModalFeedBack ref="feedbackModal" />
  </div>
</template>

<script>
import ModalFeedBack from './ModalFeedBack.vue'

export default {
  name: 'ButtonWithModal',
  components: {
    ModalFeedBack,
  },
  props: {
    buttonClass: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
  },
  methods: {
    openModal() {
      this.$refs.feedbackModal.openModal()
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/_mixins.scss';

.button {
  @include button(white, #848386);
}
</style>
