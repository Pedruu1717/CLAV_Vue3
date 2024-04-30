// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      name: "Pedro Melo",
      token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE1MTQzMzYwIiwibGV2ZWwiOjcsImVudGlkYWRlIjoiZW50X0EzRVMiLCJlbWFpbCI6InBlZHJvbWVsbzIwMDBAb3V0bG9vay5wdCIsImlhdCI6MTcxNDQ3ODIzMywiZXhwIjoxNzE0NTA3MDMzfQ.xMwqy2CR6uMc-_1p5IUHC5Hz781RHnRDd33Jw-Jv0fm7UhkkbYlumc7PPAuKo_m-2-191jvTMbol3qqMwfWpsVcZcnGwzseVEZ-OOObKCq6Hxs3RaMFDb9WN89ZF7uILwqoKZ1EBi9EiyH4wwgBQxmxAykoq9SuFwPThA0pJOArpai5aCtXM12iJTMIp_axvdkzOMVVl2_egPMvJar0Kd_AEOnbAw4Ya27PtMYKvM5TK2N-o_pMRXbecYBg2w6O8qQCRMb6NFH3XvD5G1ssRUoeK_ih8-PB2oSbw6wkIMi5qdWwJdLoitvwqvC6IGCP0K8HHpxXopWR-i2umcjkprA",
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
