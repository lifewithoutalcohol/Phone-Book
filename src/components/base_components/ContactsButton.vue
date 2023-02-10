<template>
  <button class="phone-book__button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ContactsButton"
}
</script>

<style lang="scss" scoped>
.phone-book__button {
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
  margin: 10px;
  font-size: 20px;
  max-width: 200px;
  transition: all 0.5s;
  &:hover {
    color: #b464ec;
    border: 1px solid #b464ec;
    background: #eae1f5;
  }
}

</style>