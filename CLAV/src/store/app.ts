// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      name: "Pedro Melo",
      token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE1MTQzMzYwIiwibGV2ZWwiOjcsImVudGlkYWRlIjoiZW50X0EzRVMiLCJlbWFpbCI6InBlZHJvbWVsbzIwMDBAb3V0bG9vay5wdCIsImlhdCI6MTcxMDQ5OTgzNSwiZXhwIjoxNzEwNTI4NjM1fQ.GAD5hyNNwcobjt31QphqWst0IfPXum-TatjAGWGVJ0U92hykZ278RiCPyadjCKWsM0R9BEMDvXFSntacQbx63sKO7rTV6X9vM_BBunRSiSmQ43iVuG2qlcAFAOdXOjX4i2PqurUJn97iqUrvzXUPSJhFDNbw8-HgFq4rkOtt0S_iltV2bbzM0ZH1aPL0ltiJ4iiW7iOfqI7i0bhIVLDI5yj58EDktCrRnHHnXogEJsUAvJZTpxOfnzh2FrNz_BL8MHvG3roX7L6TTcCJJzyzQr0OILjN36Pl1nfWzqq36GARSGoPjqzSJHh9Qj37Nm9CYIwFBWhFlR1hZYqN3SZ3uw",
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
