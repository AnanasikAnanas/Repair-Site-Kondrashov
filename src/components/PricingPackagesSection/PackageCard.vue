<template>
  <div class="package-card">
    <div class="package-card__header">
      <Rhombus />
      <p>{{ packageType }}</p>
    </div>
    <p class="package-card__name">{{ packageName }}</p>
    <p class="package-card__price">{{ price }}</p>
    <a href="#">Подробнее</a>
  </div>
</template>

<script>
import Rhombus from '../icons/Rhombus.vue'
export default {
  components: {
    Rhombus,
  },
  props: {
    packageType: {
      type: String,
      required: true,
    },
    packageName: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.package-card {
  display: flex;
  padding: 60px 0;
  justify-content: space-between;
  align-items: flex-start;
  border-top: 1px solid rgba(132, 131, 134, 0.1);
  border-bottom: 1px solid rgba(132, 131, 134, 0.1);
  gap: 40px;
  flex-wrap: wrap;

  @media (max-width: 1200px) {
    padding: 40px 0;
    gap: 30px;
  }

  @media (max-width: 768px) {
    padding: 30px 0;
    gap: 25px;
    flex-direction: column;
  }

  @media (max-width: 576px) {
    padding: 20px 0;
    gap: 20px;
  }

  p {
    margin: 0;
  }

  .package-card__header {
    display: flex;
    align-items: center;
    gap: 15px;
    min-width: 200px;

    @media (max-width: 768px) {
      gap: 10px;
      min-width: auto;
    }

    svg {
      @media (max-width: 576px) {
        transform: scale(0.8);
      }
    }

    p {
      font-size: 18px;
      font-weight: 400;
      width: 200px;

      @media (max-width: 768px) {
        font-size: 16px;
        width: auto;
      }
    }
  }

  .package-card__name {
    font-size: 30px;
    font-weight: 400;
    color: #000;
    max-width: 450px;
    margin: 0;
    flex: 1;

    @media (max-width: 1200px) {
      font-size: 24px;
      max-width: 350px;
    }

    @media (max-width: 768px) {
      font-size: 20px;
      max-width: none;
    }

    @media (max-width: 576px) {
      font-size: 18px;
    }
  }

  .package-card__price {
    font-size: 18px;
    font-weight: 400;
    min-width: 150px;

    @media (max-width: 768px) {
      font-size: 16px;
      min-width: auto;
    }
  }

  a {
    font-size: 18px;
    font-weight: 400;
    color: #848386;
    text-decoration: none;
    transition: opacity 0.3s ease;

    @media (max-width: 768px) {
      font-size: 16px;
    }

    &:hover {
      opacity: 0.7;
    }
  }
}
</style>
