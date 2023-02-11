<template>
  <div class="phone-book__contact">
    <div class="phone-book__text">
      <div class="text_item">
        <strong>ID:</strong> {{ contact.id }}
      </div>
      <div class="text_item">
        <strong>Number:</strong> {{ contact.phoneNumber }}
      </div>
      <div class="text_item">
        <strong>Name:</strong> {{ contact.name }}
      </div>
      <div class="text_item">
        <strong>CreatedAt:</strong> {{ contact.createdAt }}
      </div>
      <ChangeDialog
          :contact="contact"
          :isHidden="isHidden"
          @put="changeContact"
      />
    </div>
    <div >
      <ContactsButton @click="isHidden = !isHidden">Редагувати</ContactsButton>
    </div>
    <div >
      <ContactsButton @click="$emit('delete', contact)">Видалити</ContactsButton>
    </div>
  </div>
</template>

<script>
import ContactsFormInput from "@/components/base_components/ContactsFormInput.vue";
import ContactsButton from "@/components/base_components/ContactsButton.vue";
import ChangeDialog from "@/components/ChangeDialog.vue";
export default {
  components: {ChangeDialog, ContactsButton, ContactsFormInput },
  name: "ContactsItem",
  props: {
    contact: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      isHidden: true,
    }
  },
  methods: {
    changeContact() {
      this.$emit('put', this.contact)
      this.isHidden = true;
    }
  }
}
</script>

<style lang="scss" scoped>
.phone-book {
  &__contact {
    padding: 15px;
    border: 2px solid teal;
    font-size: 20px;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #f8eff8;
    position: relative;
    border-radius: 30px;
  }
  &__text {
    flex: 1 0 auto;
  }
}
.form__button {
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
  margin: 10px;
  font-size: 20px;
  max-width: 200px;
}
.text_item {
  margin: 5px 0;
}
</style>