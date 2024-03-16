// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      name: "Pedro Melo",
      token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE1MTQzMzYwIiwibGV2ZWwiOjcsImVudGlkYWRlIjoiZW50X0EzRVMiLCJlbWFpbCI6InBlZHJvbWVsbzIwMDBAb3V0bG9vay5wdCIsImlhdCI6MTcxMDU4NTI0NCwiZXhwIjoxNzEwNjE0MDQ0fQ.EXbzKptlUe4xdCqWtprdSeqOaUF-THlHEu9Kwy2poE67FYpmeMiN6XQWRJv1X8rylpuaaLFg02kJZDFrgfQYDpqlz1xjCIIEQ85_TImhiEjAIKDsXvzrYna9HD4Ow5VUsfuLqOxD-5ruhnXnjFr5OmNvHD9Z2fbkj6Gkk7_n3g6kYqJRvzNYlH7gio4_JpWqAFOE66dfdLWAeClaIWFu6LvWLIW3ySX-bT6OB7THj3KKgSJzYwrs4Rq4e3oQS5vArjasX0CjJJPtvMsuB3wlsWuLtOJ-PMsa5CIgSc05L9QLgWfyeGSfOmNTLK0xQ9iD3a_5xdWjOdWtFTgGcIgiTA",
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
