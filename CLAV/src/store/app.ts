// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      name: "Pedro Melo",
      token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE1MTQzMzYwIiwibGV2ZWwiOjcsImVudGlkYWRlIjoiZW50X0EzRVMiLCJlbWFpbCI6InBlZHJvbWVsbzIwMDBAb3V0bG9vay5wdCIsImlhdCI6MTcwOTYyNTc0NiwiZXhwIjoxNzA5NjU0NTQ2fQ.v6m5OcNyjgwUpoEPorVVN9NPQlscjj0S3joKE0Rdfaa1MXeosLK6TijZztBiVtXgn8mRHhUkUQf-1gEcGjnSNWP_rjn4aWdpUhorobIztDsUwGkdw37dm-qDuL0wV0mhgZwhFIsD36oFFFnh5frsWPsg9tjdj4zdTk1a54A7nZuVvNslTnj4yucm6POc3t49ICIY8zceUMGTJkRzMdm2KY0r_hm4rLHDkLgEUvFqltZ9AhyDjgQkoM-gDmK32ZjIuxMRQxPnxQWH9KUo_bLk-qY2juv8XQLr5NkohlmTf_YjEFfDe3f9gUuxeJrOGuqbVODoLWXN33Gvu21-nGIAgg",
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
