<template>
  <PhoneBook>
    <ContactsFormInput
      :model-value="searchBy"
      @update:model-value="setSearchBy"
      placeholder="Пошук за номером..."
      style="max-width: 500px"
    />
    <div class="phone-book__top-content">
      <ContactsForm
        @create="createContact"
      />
      <SortedSelect
        :model-value="selectedOption"
        @update:model-value="setSelectedOption"
        :options="sortOption"
      />
    </div>
    <ContactsList
      @delete="deleteContact"
      @put="putContact"
    />
  </PhoneBook>
</template>

<script>
import ContactsList from "@/components/ContactsList.vue";
import ContactsForm from "@/components/ContactsForm.vue";
import SortedSelect from "@/components/base_components/SortedSelect.vue";
import ContactsFormInput  from "@/components/base_components/ContactsFormInput.vue";
import PhoneBook from "@/components/PhoneBook.vue";
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  components: {
    PhoneBook,
    ContactsFormInput ,
    SortedSelect,
    ContactsList, ContactsForm
  },
  methods: {
    ...mapMutations({
      setContacts: 'contact/setContacts',
      setSelectedOption: 'contact/setSelectedOption',
      setSearchBy: 'contact/setSearchBy'
    }),
    ...mapActions({
      getContacts: "contact/getContacts",
      createContact: "contact/createContact",
      deleteContact: "contact/deleteContact",
      putContact: "contact/putContact"
    }),
  },
  computed: {
    ...mapGetters({
      contacts: "contact/contacts",
      selectedOption: "contact/selectedOption",
      sortOption: "contact/sortOption",
      searchBy: "contact/searchBy",
      sortedContacts: "contact/sortedContacts",
      sortedAndSearchedContacts: "contact/sortedAndSearchedContacts"
    }),
  },
  mounted() {
    this.getContacts()
  }
}
</script>

<style lang="scss">
body,
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
input {
  outline: 0;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
}
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.phone-book{
  &__top-content {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
}
@media (max-width: 630px) {
  .phone-book{
    &__top-content {
      width: 100%;
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
