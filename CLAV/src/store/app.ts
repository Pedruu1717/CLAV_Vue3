// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      name: "Pedro Melo",
      token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE1MTQzMzYwIiwibGV2ZWwiOjcsImVudGlkYWRlIjoiZW50X0EzRVMiLCJlbWFpbCI6InBlZHJvbWVsbzIwMDBAb3V0bG9vay5wdCIsImlhdCI6MTcxMjU5OTA1NCwiZXhwIjoxNzEyNjI3ODU0fQ.hvjtrIRPEz7eiTmnpIprj-o0sGvC6LI4Z2HuDJHuIs8VyT8MBP0vk_6mmbtNwoIGyI2FAPzVw1mTTKkFoeWx_aKDeU6B8xxQB_IKs01-dG6lJsW3Wukr6dF5scKhTzXhoxsjKlefF5FehuL1koGqrklxjfm7hF02-e7j5NI-16bdQD-w2N5YJZ30lwaZP56BAkNkEp6sHNQNJaZYFPP-upaH3Hq1HCAP91D91BOANhWi8oCyWs9JFXGRr-vZ7FFLyj6Jyc6dVvyo5yk4DetrH9x4mifFiHl9vUwOPXXFtDjvXgOsdzI8NwF3xrC5Z1QIHdtZprgb9istfC39mgjSog",
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
