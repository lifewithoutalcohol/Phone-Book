import axios from "axios";


export const contactService = {
    getAxios,
    postAxios,
    deleteAxios,
    putAxios,
}

async function getAxios() {
    try {
        const response = await axios.get(`https://63e3871f65ae493177110c27.mockapi.io/phones`);
        return response.data
    } catch(e) {
        console.log(e)
    }
}
async function postAxios(contact) {
    try {
        await axios.post(`https://63e3871f65ae493177110c27.mockapi.io/phones`, {
            phoneNumber: contact.phoneNumber,
            name: contact.name,
            createdAt: contact.createdAt
        });
    } catch(e) {
        console.log(e)
    }
}
async function deleteAxios(contact) {
    try {
        await axios.delete(`https://63e3871f65ae493177110c27.mockapi.io/phones/${contact.id}`);
    } catch(e) {
        console.log(e)
    }
}
async function putAxios(contact) {
    try {
        await axios.put(`https://63e3871f65ae493177110c27.mockapi.io/phones/${contact.id}`, {
            phoneNumber: contact.phoneNumber,
            name: contact.name,
        });
    } catch(e) {
        console.log(e)
    }
}

