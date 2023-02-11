<template>
  <div class="phone-book__page" >
    <ContactsPaginationItem
        v-for="page of pageCount"
        :key="page"
        :page="page"
        :pageNumber="pageNumber"
        @changePage="this.$emit('changePage', page)"
    />
  </div>
</template>

<script>
import ContactsPaginationItem from "@/components/ContactsPaginationItem.vue";

export default {
  name: "ContactsPagination",
  components: {ContactsPaginationItem},
  props: {
    pageCount: {
      type: [Array, Number],
      required: true
    },
    pageNumber: Number,
  }
}
</script>

<style lang="scss" scoped>
.phone-book {
  &__page {
    display: flex;
    margin-top: 15px;
    justify-content: center;
    flex-wrap: wrap;
  }
}
</style>