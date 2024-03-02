// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      name: "Pedro Melo",
      token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE1MTQzMzYwIiwibGV2ZWwiOjcsImVudGlkYWRlIjoiZW50X0EzRVMiLCJlbWFpbCI6InBlZHJvbWVsbzIwMDBAb3V0bG9vay5wdCIsImlhdCI6MTcwOTM4MTA5NSwiZXhwIjoxNzA5NDA5ODk1fQ.oels5f3wlVlwXqEJYIKqcBrRgddQteopL3xqEEoAAoh9MnuStye_6SvxKjaYTbLyC6VQdPU-1NQerS_VREpvXm_A7V-X0wy7UMuul5KeFKOXAs0szLxuKDbN8Dh2GZDvoyKfLvm_lgJp2BjjOOJaumW4A0QxSmuyb9TlbTuLx2kv2E055w8hapSU-hnI_lUgcjLM4oUwDdNqQN-GaJ_TFpb5KfLqcFTIpnpJlzPQc-0NhR36yVF7ESflFssfTLGBjaucdFtk3-XD-_7twTPZ6c61OD2_xlwvh6U-uBs5fRHmWiezX-CRB2gBPGNVFi6_ZHDbm_UWFeHoDzBkkGpzkw",
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
