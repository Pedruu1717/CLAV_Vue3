// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      name: "Pedro Melo",
      token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE1MTQzMzYwIiwibGV2ZWwiOjcsImVudGlkYWRlIjoiZW50X0EzRVMiLCJlbWFpbCI6InBlZHJvbWVsbzIwMDBAb3V0bG9vay5wdCIsImlhdCI6MTcxMDcwNzg3OSwiZXhwIjoxNzEwNzM2Njc5fQ.u3HOuLtv7__E4bUYuQC2W_hNM8fSdZhZDMCDtKZKBXIDdsemHohh2CNe0OBt3ttjUEkF6CoGTCbNGTlVHKnKST1H2wVgumlG_6y9YefFjpOM2DcLBrQ_m7MM_VXbW_ZkCGAVdFTzWz8Yxtz8cjXsmG8lQEBqzbaeIirw6JGMbz3ztVW5qBUF7xaCWxZqrQ_06grCBxTNX1Z9T1ftl33LsxB6I65aOoLCSoiDqcjMy3pCr0SS5oIQOeUdDly7NurwPqFlvRasdTUVfVOwwzD0jcfGJPN7dWVCuTy7bC2eR_kep1RVpes2HC99LMPp5W0OGov3dCCiP_2JWNpp-eCykg",
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
