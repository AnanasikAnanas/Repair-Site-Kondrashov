<script>
export default {
  name: 'WorksView',
}
</script>

<template>
  <div class="works ">
    <h1>Лучшие решения по ремонту и отделке для жителей Сочи!</h1>
		<div class="line"></div>
  </div>
</template>

<style lang="scss" scoped>
.works {
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding: 0 50px;
  h1 {
    font-size: 64px;
    font-weight: 500;
    max-width: 910px;
    line-height: 130%;
    margin-bottom: 0;
  }

  .line {
    width: 1920px;
    height: 1px;
    background-color: #0A0A0A;
  }
}
</style>
