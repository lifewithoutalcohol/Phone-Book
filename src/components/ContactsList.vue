<template>
  <div class="phone-book__content">
    <transition-group name="contact-item">
      <ContactsItem
          v-for="contact of paginatedData"
          :contact="contact"
          :key="contact.id"
          @delete="$emit('delete', contact)"
          @put="$emit('put', contact)"
      />
    </transition-group>
    <ContactsPagination
        :pageCount="pageCount"
        :pageNumber="pageNumber"
        @changePage="changePage"
    />
  </div>
</template>

<script>

import ContactsItem from "@/components/ContactsItem.vue";
import ContactsPagination from "@/components/ContactsPagination.vue";
import { mapGetters } from "vuex";

export default {
  name: "ContactsList",
  components: {
    ContactsPagination, ContactsItem
  },
  data() {
    return {
      pageNumber: 1,
      size: 5
    }
  },
  methods: {
    changePage(page) {
      this.pageNumber = page
    }
  },
  computed: {
    ...mapGetters({
      sortedAndSearchedContacts: "contact/sortedAndSearchedContacts",
    }),
    pageCount(){
      let l = this.sortedAndSearchedContacts.length,
          s = this.size;
      return Math.ceil(l/s);
    },
    paginatedData(){
      const start = (this.pageNumber - 1) * this.size,
          end = start + this.size;
      return this.sortedAndSearchedContacts.slice(start, end);
    }
  }
}
</script>

<style lang="scss" scoped>
.phone-book {
  &__content {
    width: 100%;
  }
}
.contact-item-enter-active, .contact-item-leave-active {
  transition: all 0.6s;
}
.contact-item-enter-from, .contact-item-leave-to {
  opacity: 0;
  position: relative;
  transform: translate(100px);
}
.contact-item-move {
  transition: transform 0.6s;
}
</style>