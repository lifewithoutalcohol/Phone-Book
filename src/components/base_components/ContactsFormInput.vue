<template>
  <input
      :value="modelValue"
      @input="updateValue"
      class="phone-book__input"
  />
</template>

<script>
export default {
  name: "ContactsFormInput ",
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateValue(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  }
}
</script>

<style lang="scss" scoped>
.phone-book {
  &__input {
    width: 100%;
    border: 1px solid #6d597a;
    padding: 15px 15px;
    font-size: 20px;
    margin: 5px 0;
    color: white;
    border-radius: 30px;
    background: linear-gradient(90deg, #6d597a 0%, #e56b6f 100%);
    &::placeholder {
      color: white;
    }
    &:focus {
      box-shadow: 0 0 8px 5px #b56576;
    }
  }
}
</style>