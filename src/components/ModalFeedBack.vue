<template>
  <div class="modal" v-if="isOpen" @click.self="closeModal">
    <div class="modal__content">
      <div class="modal__header">
        <h2 class="modal__title">Оформить заявку</h2>
        <button class="modal__close" @click="closeModal">
          <span class="modal__close-icon">×</span>
        </button>
      </div>

      <form class="modal__form" @submit.prevent="submitForm">
        <div class="modal__form-grid">
          <!-- Первая строка: Имя, Фамилия, E-mail -->
          <div class="form-row">
            <div class="form-group">
              <label>Имя</label>
              <input type="text" v-model="formData.name" placeholder="Имя" />
            </div>

            <div class="form-group">
              <label>Фамилия</label>
              <input type="text" v-model="formData.surname" placeholder="Фамилия" />
            </div>

            <div class="form-group">
              <label>E-mail (Почта)</label>
              <input type="email" v-model="formData.email" placeholder="E-mail" />
            </div>
          </div>

          <!-- Вторая строка: Телефон и Тип услуги -->
          <div class="form-row">
            <div class="form-group">
              <label>Номер телефона</label>
              <div class="phone-input">
                <span class="phone-prefix">+7</span>
                <input
                  type="tel"
                  :value="formattedPhone"
                  @input="handlePhoneInput"
                  placeholder="(___) ___-__-__"
                />
              </div>
            </div>

            <div class="form-group">
              <label>Тип услуги</label>
              <select v-model="formData.serviceType">
                <option value="Капитальный ремонт">Капитальный ремонт</option>
                <option value="Косметический ремонт">Косметический ремонт</option>
                <option value="Дизайн интерьера">Дизайн интерьера</option>
              </select>
            </div>
          </div>
        </div>
        <div class="modal__form-footer">
          <p class="modal__privacy">
            Нажимая кнопку "Отправить" вы даете согласие на обработку персональных данных
          </p>
          <button class="modal__submit" type="submit" @click="submitForm">Отправить</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalFeedBack',
  data() {
    return {
      isOpen: false,
      formData: {
        name: '',
        surname: '',
        email: '',
        phone: '',
        serviceType: 'Капитальный ремонт',
      },
    }
  },
  computed: {
    formattedPhone() {
      const numbers = this.formData.phone.replace(/\D/g, '').substring(0, 10)
      if (!numbers) return ''

      let formatted = ''
      if (numbers.length > 0) {
        formatted += '(' + numbers.substring(0, 3)
      }
      if (numbers.length > 3) {
        formatted += ') ' + numbers.substring(3, 6)
      }
      if (numbers.length > 6) {
        formatted += '-' + numbers.substring(6, 8)
      }
      if (numbers.length > 8) {
        formatted += '-' + numbers.substring(8, 10)
      }
      return formatted
    },
  },
  methods: {
    handlePhoneInput(event) {
      // Предотвращаем ввод нецифровых символов
      const value = event.target.value
      // Если последний введенный символ не цифра, не обновляем значение
      if (!/^\d*$/.test(value.replace(/[\s()-]/g, ''))) {
        event.preventDefault()
        return
      }
      // Убираем все нецифровые символы
      const input = value.replace(/\D/g, '')
      // Ограничиваем длину до 10 цифр
      this.formData.phone = input.substring(0, 10)
    },
    openModal() {
      this.isOpen = true
      document.body.style.overflow = 'hidden'
    },
    closeModal() {
      this.isOpen = false
      document.body.style.overflow = 'auto'
    },
    submitForm() {
      // Здесь будет логика отправки формы
      console.log('Form submitted:', this.formData)
      this.closeModal()
      this.$router.push('/success')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixins.scss';
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
  backdrop-filter: blur(5px);
  padding: 20px;
  box-sizing: border-box;
}

.modal__content {
  background: white;
  padding: 60px;
  border-radius: 8px;
  width: 100%;
  max-width: 1020px;
  position: relative;
  z-index: 100000;

  @media (max-width: 992px) {
    padding: 40px;
  }

  @media (max-width: 768px) {
    padding: 30px;
  }

  @media (max-width: 576px) {
    padding: 20px;
  }
}

.modal__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;

  @media (max-width: 992px) {
    margin-bottom: 40px;
  }

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
}

.modal__title {
  font-size: 64px;
  font-weight: 400;
  color: #40362e;
  margin: 0;
  line-height: 1.1;

  @media (max-width: 1200px) {
    font-size: 48px;
  }

  @media (max-width: 992px) {
    font-size: 36px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 576px) {
    font-size: 24px;
  }
}

.modal__close {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 32px;
  color: #333;
  opacity: 0.5;
  padding: 0;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }
}

.modal__form-grid {
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 60px;

  @media (max-width: 992px) {
    gap: 24px;
    margin-bottom: 40px;
  }

  @media (max-width: 768px) {
    gap: 20px;
    margin-bottom: 30px;
  }
}

.form-row {
  display: grid;
  gap: 24px;

  @media (max-width: 768px) {
    gap: 20px;
  }

  @media (max-width: 576px) {
    gap: 16px;
  }
}

/* Первая строка: 3 колонки равной ширины */
.form-row:first-child {
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
}

/* Вторая строка: 2 колонки равной ширины */
.form-row:last-child {
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 768px) {
    gap: 10px;
  }
}

.form-group label {
  color: #080808;
  opacity: 0.4;
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
}

.form-group input,
.form-group select {
  padding: 15px 24px;
  border: 1px solid #40362e;
  border-radius: 4px;
  font-size: 18px;
  box-sizing: border-box;
  outline: none;
  width: 100%;

  @media (max-width: 768px) {
    padding: 12px 20px;
    font-size: 16px;
  }

  @media (max-width: 576px) {
    padding: 10px 16px;
  }
}

.phone-input {
  display: flex;
  align-items: center;
  border: 1px solid #40362e;
  border-radius: 4px;
  width: 100%;
  outline: none;

  input {
    border: none;
    flex: 1;
    padding: 15px 24px;
    font-size: 18px;

    @media (max-width: 768px) {
      padding: 12px 20px;
      font-size: 16px;
    }

    @media (max-width: 576px) {
      padding: 10px 16px;
    }
  }
}

.phone-prefix {
  padding: 15px 24px;
  background: #f5f5f5;
  border-right: 1px solid #40362e;
  color: #080808;
  opacity: 0.4;
  font-size: 18px;

  @media (max-width: 768px) {
    padding: 12px 20px;
    font-size: 16px;
  }

  @media (max-width: 576px) {
    padding: 10px 16px;
  }
}

.modal__form-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
  }
}

.modal__privacy {
  font-size: 18px;
  color: #080808;
  opacity: 0.4;
  max-width: 360px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 16px;
    max-width: none;
  }

  @media (max-width: 576px) {
    font-size: 14px;
  }
}

.modal__submit {
  @include button(white, #848386);
  min-width: 200px;

  @media (max-width: 768px) {
    width: 100%;
  }
}
</style>
