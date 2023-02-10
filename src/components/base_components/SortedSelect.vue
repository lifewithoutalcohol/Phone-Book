<template>
  <select
      class="phone-book__select"
      :value="modelValue"
      @change="changeOption"
  >
    <option disabled value="">Сортування за замовчуванням</option>
    <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'SortedSelect',
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    }
  },
  methods: {
    changeOption(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.phone-book {
  &__select {
    display: block;
    padding: 10px;
    align-self: flex-end;
    background: none;
    color: teal;
    border: 1px solid teal;
    margin: 10px;
    font-size: 16px;
  }
}
</style>