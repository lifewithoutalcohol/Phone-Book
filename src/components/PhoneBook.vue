<template>
  <div class="phone-book">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "PhoneBook"
}
</script>

<style lang="scss">
.phone-book {
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  background: #eaac8b;
}
</style>