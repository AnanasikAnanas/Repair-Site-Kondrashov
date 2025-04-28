<template>
  <div class="services">
    <h2 class="services__title">Наши услуги</h2>
    <p class="services__description">Мы предлагаем широкий спектр услуг, включая:</p>
    <ul class="services__list">
      <li class="services__item">
        <Rhombus />
        <p>
          <strong>Капитальный ремонт квартир в Сочи:</strong>
          Полное преобразование вашего пространства - замена всей инженерной систем и конструктивных
          элементов.
        </p>
      </li>
      <li class="services__item">
        <Rhombus />
        <p>
          <strong>Дорогой ремонт в Сочи:</strong>
          Эксклюзивные дизайнерские решения и использование премиум материалов для создания
          уникальных интерьеров.
        </p>
      </li>
      <li class="services__item">
        <Rhombus />
        <p>
          <strong>Ремонт квартир под ключ в Сочи:</strong>
          Ведение вашего проекта от начального проекта до последнего штриха – полный спектр работ
          под одним крылом "Сочи Ремонт".
        </p>
      </li>
      <li class="services__item">
        <Rhombus />
        <p>
          <strong>Отделка квартир в Сочи:</strong>
          Выполнение всех видов отделочных работ, включая малярные, плиточные и другие виды работ.
        </p>
      </li>
      <li class="services__item">
        <Rhombus />
        <p>
          <strong>Ремонт квартир в новостройке Сочи:</strong> Адаптация и улучшение квартир в новых
          жилых комплексах по индивидуальным проектам.
        </p>
      </li>
    </ul>
    <p class="services__footer">
      Каждая услуга реализуется с учетом индивидуальных пожеланий клиентов и с применением самых
      качественных материалов.
    </p>
  </div>
</template>

<script>
import Rhombus from '@/components/icons/Rhombus.vue'

export default {
  name: 'Services',
  components: {
    Rhombus,
  },
}
</script>

<style scoped>
.services {
  max-width: 360px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
}
p{
  margin: 0;
}
.services__title {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 16px;
  margin: 0;
}

.services__list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0;
  padding: 0;
}

.services__item {
  display: flex;
  gap: 10px;
  align-items: flex-start;
}

.services__item :deep(svg) {
  flex-shrink: 0;
  margin-top: 5px;
}

.services__item p {
  margin: 0;
}
</style>
