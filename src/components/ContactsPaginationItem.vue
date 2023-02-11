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
  border: 2px solid #b56576;
  border-radius: 20px;
  padding: 10px 12px;
  font-size: 20px;
  margin: 0 8px;
  text-align: center;
  color: white;
  box-shadow: 0 0 10px 0 #b56576;
  background: #6d597a;
  background: linear-gradient(0deg, #b56576 0%, #6d597a 100%);
  &__current {
    border: 2px solid #6d597a;
    box-shadow: 0 0 15px 3px #6d597a;
    background: linear-gradient(180deg, #e56b6f 0%, #b56576 100%);
    font-weight: 700;
  }
}

</style>