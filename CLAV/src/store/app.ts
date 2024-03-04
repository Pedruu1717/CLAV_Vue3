// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      name: "Pedro Melo",
      token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE1MTQzMzYwIiwibGV2ZWwiOjcsImVudGlkYWRlIjoiZW50X0EzRVMiLCJlbWFpbCI6InBlZHJvbWVsbzIwMDBAb3V0bG9vay5wdCIsImlhdCI6MTcwOTU3MzU5OSwiZXhwIjoxNzA5NjAyMzk5fQ.pKyd3ujnSsni4oMGIguIc8-9QtyaZfrqGl3I4Q9auMD1sxXrlXGovAPF735nKY6B0TdOM4gEGvPR4gCHRtirmDibwHDFl-1HCbGJqu7jSpEytm7KLTYwY4y8Bycjb7Hbc0e25G54oTuGu2magwHh8S022-o6Avxis4jDddmVDF4vWrnt42u6NujObz4wXrpSPgMWuCotI0zUem6EcUjmhTWkhZDG7j-4KgUp1O5WzRqiDCbtcHgOo7hlxeiNTokJT2UyUfTwxcbcqO8r4d5ee22FJu6fVqTCqfBR4qckerNgtwrXRhqQAayhS1t2LwzVUSUqIawNroqXNOxRQPjAsg",
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
