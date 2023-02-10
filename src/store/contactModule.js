import { contactService } from "@/services"

export const contactModule = {
    state: () => ({
        contacts: [],
        selectedOption: 'id',
        sortOption: [
            {value: 'firstNewest', name: 'Спочатку нові'},
            {value: 'firstLatest', name: 'Спочатку давніші'},
            {value: 'id', name: 'Сортування за замовчуванням'}
        ],
        searchBy: '',

    }),
    getters: {
        contacts(state) {
            return state.contacts
        },
        selectedOption(state) {
            return state.selectedOption
        },
        sortOption(state) {
            return state.sortOption
        },
        searchBy(state) {
            return state.searchBy
        },
        sortedContacts(state) {
            return [...state.contacts].sort((a, b) => {
                if (state.selectedOption === 'id') {
                    return a.id - b.id
                } else if (state.selectedOption === 'firstLatest') {
                    return Date.parse(a.createdAt) - Date.parse(b.createdAt)
                } else {
                    return Date.parse(b.createdAt) - Date.parse(a.createdAt)
                }
            })
        },
        sortedAndSearchedContacts(state, getters) {
            return getters.sortedContacts.filter(item => item.phoneNumber.toString().includes(state.searchBy))
        }
    },
    mutations: {
        setContacts(state, contact) {
            state.contacts = contact
        },
        setSelectedOption(state, selectedOption) {
            state.selectedOption = selectedOption
        },
        setSearchBy(state, searchBy) {
            state.searchBy = searchBy
        }
    },
    actions: {
        async getContacts({ commit }) {
            try {
                commit('setContacts', await contactService.getAxios())
            } catch(e) {
                console.log(e)
            }
        },
        async createContact({ commit }, contact) {
            try {
                await contactService.postAxios(contact)
                commit('setContacts', await contactService.getAxios())
            } catch(e) {
                console.log(e)
            }
        },
        async deleteContact({ commit }, contact) {
            try {
                await contactService.deleteAxios(contact)
                commit('setContacts', await contactService.getAxios())
            } catch(e) {
                console.log(e)
            }
        },
        async putContact({ commit }, contact) {
            try {
                await contactService.putAxios(contact)
                commit('setContacts', await contactService.getAxios())
            } catch(e) {
                console.log(e)
            }
        },
    },
    namespaced: true
}