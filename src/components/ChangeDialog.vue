<template>
  <div :class="showDialog">
    <div class="text-item__change-values">
      <div id="write-number">
        <ContactsFormInput
            type="number"
            placeholder="Введіть новий номер"
            v-model="contact.phoneNumber"
        />
      </div>
      <div id="write-name">
        <ContactsFormInput
            type="text"
            placeholder="Введіть нове ім'я"
            v-model="contact.name"
        />
      </div>
    </div>
    <div class="change-values-buttons">
      <ContactsButton @click="$emit('put', this.contact)" style="margin: 5px;">Підтвердити</ContactsButton>
      <ContactsButton @click="$emit('hide', true)" style="margin: 5px;">Відмінити</ContactsButton>
    </div>
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
  computed: {
    showDialog() {
      return {
        'text-item__close-change': this.isHidden,
        'text-item__change-box': !this.isHidden,
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.text-item {
  &__close-change {
    display: none;
  }
  &__change-box {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 10px;
    left: 10px;
    bottom: 0;
    top: 0;
    padding: 5px 15px;
    background: linear-gradient(240deg, #b56576 0%, #eaac8b 50%, #b56576 100%);
    border: 2px solid #6d597a;
    border-radius: 30px;
    z-index: 1;
  }
  &__change-values {
    display: flex;
    flex-direction: column;
 }
}
.change-values-buttons {
  display: flex;
  flex-direction: column;
}
#write-number,
#write-name {
  position: relative;
  &::before {
    font-style: italic;
    font-size: 16px;
    margin-left: 25px;
    color: white;
    font-weight: 700;
    position: absolute;
    left: 0;
    top: -4px;
    letter-spacing: 1px;
    text-shadow: 0 0 2.5px black;
  }
}
#write-number::before {
  content: "Введіть новий номер";
}
#write-name::before {
  content: "Введіть нове ім'я";
}
@media (max-width: 520px) {
  .text-item {
    &__change-box {
      flex-direction: column;
    }
  }
}
@media (max-width: 385px) {
  .text-item {
    &__change-box {
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
    }
  }
}
</style>