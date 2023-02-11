<template>
  <div class="phone-book__contact">
    <div class="phone-book__text">
      <div class="text-item">
        <strong>ID:</strong> {{ contact.id }}
      </div>
      <div class="text-item">
        <strong>Number:</strong> {{ contact.phoneNumber }}
      </div>
      <div class="text-item">
        <strong>Name:</strong> {{ contact.name }}
      </div>
      <div class="text-item">
        <strong>CreatedAt:</strong> {{ contact.createdAt }}
      </div>
      <ChangeDialog
          :contact="contact"
          :isHidden="isHidden"
          @put="changeContact"
          @hide="hide"
      />
    </div>
    <div >
      <ContactsButton @click="this.isHidden = false">Редагувати</ContactsButton>
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
    },
    hide(isHidden) {
      this.isHidden = isHidden
    }
  }
}
</script>

<style lang="scss" scoped>
.phone-book {
  &__contact {
    padding: 15px;
    border: 2px solid #6d597a;
    font-size: 20px;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #6d597a;
    background: linear-gradient(270deg, #6d597a 0%, #e56b6f 100%);
    position: relative;
    border-radius: 30px;
    color: white;
  }
  &__text {
    flex: 1 1 auto;
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
.text-item {
  margin: 5px 0;
}
@media (max-width: 517px) {
  .phone-book {
    &__contact {
      flex-direction: column;
    }
  }
}
</style>