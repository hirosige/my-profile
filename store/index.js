import Vuex from "vuex"
import mutations from "./mutations"

const store = () =>
  new Vuex.Store({
    state: {
      locales: ["en", "ja"],
      locale: "ja",
      counter: 0
    },
    mutations
  })

export default store
