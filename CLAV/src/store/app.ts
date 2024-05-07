// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      name: "Pedro Melo",
      token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE1MTQzMzYwIiwibGV2ZWwiOjcsImVudGlkYWRlIjoiZW50X0EzRVMiLCJlbWFpbCI6InBlZHJvbWVsbzIwMDBAb3V0bG9vay5wdCIsImlhdCI6MTcxNTA5ODEzNSwiZXhwIjoxNzE1MTI2OTM1fQ.lAhKmnlpDM9OJwhwCuNlEDvohh1Ffk8ato23huyZgnAOcUuy98E4kJduAzb6e6O3As97emrj39WchPpyVir4fRIqQbwMDGWcrhSb_ZZWKY5MTGV55S0D0wy6cd3jLDLPG1oXxJaoZJyY9R5aYz_B0zUqxiUT1YbFc4QZDj2lLEuBy4YvzQwjjfMy5WP2QdGc9_mvWQhmvkYpp859oP0iIk76_8YOgAywTC4TMS3vuGtzK43NEGLYv5fvy2NKHqH3erv5Mh4yAOP4RapDvVqP8Mf96yVmycabqE71YNbI64N2Z4RBxZJklPGSekfrNOBaGk3SqeEvCyWQ9CGyHGrdtA",
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
