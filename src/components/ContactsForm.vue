<template>
  <form @submit.prevent class="phone-book__form">
    <h4>Створення запису</h4>
    <ContactsFormInput
        v-model="contact.phoneNumber"
        type="number"
        placeholder="Номер телефону"
    />
    <ContactsFormInput
        v-model="contact.name"
        type="text"
        placeholder="Ім'я користувача"
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
  margin: 0;
}
.phone-book {
  &__form {
    display: flex;
    flex-direction: column;
    font-size: 20px;
    flex: 0 1 60%;
  }
}
.form {
  &__button {
    padding: 10px 15px;
    background: none;
    color: teal;
    border: 1px solid teal;
    margin: 10px;
    font-size: 20px;
    max-width: 200px;
    align-self: center;
  }

}

</style>