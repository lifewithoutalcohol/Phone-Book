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
    border: 1px solid teal;
    padding: 10px 15px;
    font-size: 20px;
    margin: 5px 0;
  }
}

</style>