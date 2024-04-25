// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      name: "Pedro Melo",
      token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE1MTQzMzYwIiwibGV2ZWwiOjcsImVudGlkYWRlIjoiZW50X0EzRVMiLCJlbWFpbCI6InBlZHJvbWVsbzIwMDBAb3V0bG9vay5wdCIsImlhdCI6MTcxNDA1Nzg1NCwiZXhwIjoxNzE0MDg2NjU0fQ.zZTXvhN_9eEix5dQyiK98J2XcQfLSsFkpp4tU-eKNebV5W_bAaA42bDsPC1sJWGHLvAAP2f4JeOL82AQ1mLX09QzbSw3LAsn5Gqh6Y1c1tNJiWK4fQ4BR-rJ5RU481c9n68K2b_dv4BTv4zS_MgJtO22PDjZhcZorBEzX4e3rAzG1EV63e9sh8O3KSUpkEBnsdn2UDXGis4GkQEZbSgR_P_lGuRSQI_qA09elxJyGHfwOrnucEetLVbt0lG1D5oizaA2FzWLoEHbeJaM5EmeCPSjR4CgrqLBP8GR-hI7EfMrybq-kqBK2Eew2VkF3skH6Po2egg0E2lmL5wcWTSe6Q",
      clavToken: "",
      entidade: "ent_A3ES",
    }
  },
  persist: true, // Pinia persisted state plugin
  actions: {
    guardaTokenCLAV() {
      this.clavToken = "";
    },
    guardaTokenUtilizador() {
      this.token = "";
    },
    guardaNomeUtilizador() {
      this.name = "";
    },
    guardaEntidade() {
      this.entidade = "";
    }
  },
  /*getters: {
    token: state => state.token
  }*/
})
