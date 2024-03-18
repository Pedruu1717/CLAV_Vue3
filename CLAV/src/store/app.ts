// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      name: "Pedro Melo",
      token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE1MTQzMzYwIiwibGV2ZWwiOjcsImVudGlkYWRlIjoiZW50X0EzRVMiLCJlbWFpbCI6InBlZHJvbWVsbzIwMDBAb3V0bG9vay5wdCIsImlhdCI6MTcxMDc4MjYzOSwiZXhwIjoxNzEwODExNDM5fQ.c9wGEMhmpKiJJLKi_76PB04vEg591jnhlpjM676Ku6i0wTtJGb0hhnDnA5Od8xCFNHv4ddNqBSX5efBfFUXwxnUhyKqQCPCHoTWg_jsCBUNPzHaivFB1obm4WJmMXhyemXmg0InmiAiRLLX4-j0DgJS7GmGNK0NaVUUdQN35ws8lpYI5cwprx2wqsJIpWatdfBzRnWfbiKUm6ZzokEIoloV-XQWUKIF5IKZH3r5t_DZITRsnNqDfnaG8Ho7Zv_JH1iy2ceEVaRHz4OGVPIgV7dRj-JBZf7nTR6RTr16SRvLMhVc6n3ukldC0_hiM7yVh0uuPvT0tMXvzKC7s3tgBVg",
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
