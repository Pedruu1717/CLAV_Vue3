// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      name: "Pedro Melo",
      token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE1MTQzMzYwIiwibGV2ZWwiOjcsImVudGlkYWRlIjoiZW50X0EzRVMiLCJlbWFpbCI6InBlZHJvbWVsbzIwMDBAb3V0bG9vay5wdCIsImlhdCI6MTcxMjU2NTkyNCwiZXhwIjoxNzEyNTk0NzI0fQ.h5_xkexEJLmlvdHXMf8l30cB1yMmXeQ8DZsAIOVyqHZtzduALfvtfZxWU7VQt8h7BRXHTwDwHXqDejxoQYTvQ-Jv6ZmWmK9C064x-fcmt3GC2nEWt8j5uUdm0HFf-crs5d9_IjdhEdqlDXwNWicyyVeupvNm1mdoIQXiCFTCPXz1kg8LKBjCePfAOJrpAfMQyVPakOFNPQ0nNSGY1sGaMKB5RYJyBzVSWSU2w_HnWjjyO4X2UO4JIY0UiREiVghzOZGsqRG6Or_d7KDT3hhFJ7WKCIKu7V0-SXLp6j-vt2xFvm2Yt9cje6EJ_djczsCqYeMoJGjbtG47Z4_k3TiYig",
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
