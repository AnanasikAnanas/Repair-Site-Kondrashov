<script>
import TheHeader from '@/components/TheHeader.vue'
import CatalogFilter from '@/components/CatalogSections/CatalogFilter.vue'
import CatalogSlider from '@/components/CatalogSections/CatalogSlider.vue'
import CatalogInfo from '@/components/CatalogSections/CatalogInfo.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'CatalogView',
  components: {
    TheHeader,
    CatalogFilter,
    CatalogSlider,
    CatalogInfo,
    Footer,
  },
}
</script>

<template>
  <main class="catalog-main">
    <TheHeader color="black" />
    <div class="catalog-content">
      <div class="catalog-links">
        <a href="/">Главная</a>
        <div class="catalog-links__divider"></div>
        <a href="/catalog">Каталог</a>
      </div>
      <CatalogFilter />
    </div>
    <CatalogSlider />
    <CatalogInfo />
    <Footer />
  </main>
</template>

<style scoped>
.catalog-main {
  display: flex;
  flex-direction: column;
  .catalog-content {
    margin-top: 100px;
    display: flex;
    justify-content: space-between;
  }
}
.catalog-links {
  display: flex;
  padding: 0 50px;
  height: 13px;
  align-items: center;
  gap: 10px;
  a {
    transition: color 0.3s ease;
    color: #848386;
    font-size: 18px;
  }
  a:hover {
    color: #0a0a0a;
  }
}
.catalog-links__divider {
  width: 1px;
  height: 100%;
  background-color: #0a0a0a;
  opacity: 0.4;
}
</style>
