<template>
  <select
      class="phone-book__select"
      :value="modelValue"
      @change="changeOption"
  >
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
    background: linear-gradient(0deg, #b56576 0%, #e56b6f 50%);
    color: #6d597a;
    border: 1px solid #6d597a;
    border-radius: 20px;
    margin: 10px;
    font-size: 18px;
  }
}
@media (max-width: 630px) {
  .phone-book {
    &__select {
      align-self: center;
    }
  }
}
</style>