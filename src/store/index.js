import { createStore } from 'vuex'
import modulesPost from "@/store/modules/modules-post";

 const store = createStore({
     // actions: {},
     // state: {},
     // mutations: {},
     // getters: {},

     modules: {
         modulesPost
     }
 })
export default store