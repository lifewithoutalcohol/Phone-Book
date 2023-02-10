<template>
  <div
      :class="addClass"
      @click="this.$emit('changePage', page)"
  >
    {{ page }}
  </div>

</template>

<script>
export default {
  name: "ContactsPaginationItem",
  props: {
    page: {
      type: Number,
      required: true
    },
    pageNumber: Number
  },
  computed: {
    addClass() {
      return {
        'page_item__current' : this.page === this.pageNumber,
        'page_item' : this.page
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.page_item {
  border: 1px solid black;
  padding: 10px;
  font-size: 20px;
  margin: 0 5px;
  text-align: center;
  &__current {
    border: 2px solid teal;
  }
}

</style>