<template>
  <form @submit.prevent class="phone-book__form">
    <h4>Створення контакту</h4>
    <ContactsFormInput
        v-model="contact.phoneNumber"
        type="number"
        placeholder="Введіть номер телефону"
    />
    <ContactsFormInput
        v-model="contact.name"
        type="text"
        placeholder="Введіть ім'я користувача"
    />
    <ContactsButton @click="createContact">Створити</ContactsButton>
  </form>
</template>

<script>
import ContactsFormInput  from "@/components/base_components/ContactsFormInput.vue";
import ContactsButton from "@/components/base_components/ContactsButton.vue";

export default {
  name: "ContactsForm",
  components: {ContactsButton, ContactsFormInput },
  data() {
    return {
      contact: {
        phoneNumber: '',
        name: '',
      }
    }
  },
  methods: {
    createContact() {
      this.contact.createdAt = new Date().toISOString();
      this.$emit('create', this.contact)
      this.contact = {
        phoneNumber: '',
        name: '',
      }
    },
  }
}
</script>

<style lang="scss" scoped>
h4 {
  font-size: 24px;
  margin: 5px 0 10px;
  color: #6d597a;
  text-align: center;
}
.phone-book {
  &__form {
    display: flex;
    flex-direction: column;
    font-size: 20px;
    flex: 0 1 60%;
  }
}
@media (max-width: 630px) {
  .phone-book {
    &__form {
      align-items: center;
      width: 100%;
    }
  }
}

</style>