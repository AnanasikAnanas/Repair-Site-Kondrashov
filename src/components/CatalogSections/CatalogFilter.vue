<template>
  <div class="catalog-filter">
    <h1>Каталог</h1>
    <div class="catalog-filter__links">
      <a href="">По виду</a>
      <a href="">По количеству комнат</a>
      <a href="">По типу</a>
      <a href="">Дизайн интерьера</a>
      <a href="">Ремонт коттеджей</a>
    </div>
    <input type="text" placeholder=" Что мы ищем?" />
  </div>
</template>

<style scoped lang="scss">
.catalog-filter {
  display: flex;
  flex-direction: column;
  gap: 100px;
  box-sizing: border-box;

  @media (max-width: 1200px) {
    gap: 80px;
  }

  @media (max-width: 992px) {
    gap: 60px;
  }

  @media (max-width: 768px) {
    gap: 40px;
  }

  @media (max-width: 576px) {
    gap: 30px;
  }

  h1 {
    font-size: 120px;
    font-weight: 500;
    margin: 0;
    line-height: normal;

    @media (max-width: 1200px) {
      font-size: 90px;
    }

    @media (max-width: 992px) {
      font-size: 70px;
    }

    @media (max-width: 768px) {
      font-size: 50px;
    }

    @media (max-width: 576px) {
      font-size: 36px;
    }
  }

  .catalog-filter__links {
    display: flex;
    gap: 60px;
    flex-wrap: wrap;

    @media (max-width: 1200px) {
      gap: 40px;
    }

    @media (max-width: 992px) {
      gap: 30px;
    }

    @media (max-width: 768px) {
      gap: 20px;
    }

    @media (max-width: 576px) {
      gap: 15px;
    }

    a {
      font-size: 30px;
      color: #848386;
      opacity: 0.4;
      transition: opacity 0.3s ease;
      white-space: nowrap;

      @media (max-width: 1200px) {
        font-size: 24px;
      }

      @media (max-width: 992px) {
        font-size: 20px;
      }

      @media (max-width: 768px) {
        font-size: 18px;
      }

      @media (max-width: 576px) {
        font-size: 16px;
      }

      &:hover {
        opacity: 1;
      }
    }
  }

  input {
    height: 100%;
    border-radius: 4px;
    border: 1px solid rgba(31, 31, 31, 0.1);
    color: #0a0a0a;
    padding: 20px;
    max-width: 910px;
    width: 100%;
    outline: none;
    font-size: 18px;
    box-sizing: border-box;

    @media (max-width: 1200px) {
      max-width: 800px;
      padding: 18px;
      font-size: 16px;
    }

    @media (max-width: 992px) {
      max-width: 700px;
      padding: 16px;
    }

    @media (max-width: 768px) {
      max-width: 600px;
      padding: 14px;
      font-size: 14px;
    }

    @media (max-width: 576px) {
      max-width: 100%;
      padding: 12px;
      font-size: 12px;
    }

    &:focus {
      border: 1px solid rgba(31, 31, 31);
    }
  }
}
</style>
