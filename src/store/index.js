import {createStore} from "vuex";
import {contactModule} from "@/store/contactModule";

export default createStore({
    modules: {
        contact: contactModule,
    }
})