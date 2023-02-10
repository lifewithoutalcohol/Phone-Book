<template>
  <div :class="showDialog">
    <div class="text_item__change-values">
      <ContactsFormInput
          type="number"
          placeholder="Введіть новий номер"
          v-model="contact.phoneNumber"
      />
      <ContactsFormInput
          type="text"
          placeholder="Введіть нове ім'я"
          v-model="contact.name"
      />
    </div>
    <ContactsButton @click="changeContact">Підтвердити</ContactsButton>
  </div>
</template>

<script>
import ContactsFormInput from "@/components/base_components/ContactsFormInput.vue";
import ContactsButton from "@/components/base_components/ContactsButton.vue";

export default {
  name: "ChangeDialog",
  components: {
    ContactsButton, ContactsFormInput
  },
  props: {
    contact: {
      type: Object,
      required: true,
    },
    isHidden: Boolean
  },
  methods: {
    changeContact() {
      this.$emit('put', this.contact)
    }
  },
  computed: {
    showDialog() {
      return {
        'text_item__close-change': this.isHidden,
        'text_item__change-box': !this.isHidden,
      }
    }
  }

}
</script>

<style lang="scss" scoped>
.text_item {
  &__close-change {
     display: none;
   }
  &__change-box {
     position: absolute;
     display: flex;
     align-items: center;
     right: 320px;
     top: 0;
     height: 100%;
     padding: 5px 15px;
     background: #b7b7b7;
     color: teal;
     border: 1px solid teal;
   }
  &__change-values {
     display: flex;
     flex-direction: column;
   }
}

</style>