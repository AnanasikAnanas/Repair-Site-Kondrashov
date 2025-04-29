<script>
import CatalogFilter from '@/components/CatalogSections/CatalogFilter.vue'
import CatalogInfo from '@/components/CatalogSections/CatalogInfo.vue'
import CatalogSlider from '@/components/CatalogSections/CatalogSlider.vue'
import Footer from '@/components/Footer.vue'
import TheHeader from '@/components/TheHeader.vue'
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
    padding: 0 50px;
    box-sizing: border-box;
    gap: 50px;

    @media (max-width: 1200px) {
      padding: 0 40px;
      margin-top: 80px;
    }

    @media (max-width: 992px) {
      flex-direction: column;
      gap: 40px;
    }

    @media (max-width: 768px) {
      padding: 0 30px;
      margin-top: 60px;
      gap: 30px;
    }

    @media (max-width: 576px) {
      padding: 0 20px;
      margin-top: 40px;
      gap: 20px;
    }
  }
}

.catalog-links {
  display: flex;
  align-items: center;
  gap: 10px;
  height: 13px;

  @media (max-width: 768px) {
    height: 11px;
  }

  @media (max-width: 576px) {
    height: 10px;
  }

  a {
    transition: color 0.3s ease;
    color: #848386;
    font-size: 18px;

    @media (max-width: 768px) {
      font-size: 16px;
    }

    @media (max-width: 576px) {
      font-size: 14px;
    }

    &:hover {
      color: #0a0a0a;
    }
  }
}

.catalog-links__divider {
  width: 1px;
  height: 100%;
  background-color: #0a0a0a;
  opacity: 0.4;
}
</style>
