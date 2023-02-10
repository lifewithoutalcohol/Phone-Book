<template>
  <PhoneBook>
    <ContactsFormInput
      :model-value="searchBy"
      @update:model-value="setSearchBy"
      placeholder="Пошук за номером..."
      style="max-width: 500px"
    />
    <div style="width: 100%; display: flex; justify-content: space-between">
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
</style>
