// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      name: "Pedro Melo",
      token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE1MTQzMzYwIiwibGV2ZWwiOjcsImVudGlkYWRlIjoiZW50X0EzRVMiLCJlbWFpbCI6InBlZHJvbWVsbzIwMDBAb3V0bG9vay5wdCIsImlhdCI6MTcxMjY4MjIwMywiZXhwIjoxNzEyNzExMDAzfQ.Kujp9yLzKLEUoiY0dON8N8wNxAVTNh9pkQkQR_DhOp7NyQezb6XJvmEy6FdfamZ0kaufd8J97lwJO6M4Y8rJFytj0wTQq-Ab3Bc02pwRGHqyFIxOdhzhFaar5_hUVBcgxtFfbaLFOgzy0MqzoHAx7fcvjpXG70-f7_esmn7oeZTXnfW_TbsBw7Y_2sH6rM2k1oc7eGd4KbZiFaWiql9p1O5i3EBDh1aG1zx0VwxFLHGTdc48dCgKUAmenkP1bs6GNk2WkuPp0gbWaayTYReHGD0CAzom89ifjucR5EQ7L9i0cD0lyrbU51q7S0z54lzoA9dGLH2Q29wa75PtKjjsjQ",
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
