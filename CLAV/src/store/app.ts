// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      name: "Pedro Melo",
      token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE1MTQzMzYwIiwibGV2ZWwiOjcsImVudGlkYWRlIjoiZW50X0EzRVMiLCJlbWFpbCI6InBlZHJvbWVsbzIwMDBAb3V0bG9vay5wdCIsImlhdCI6MTcxMzUyNzg3MiwiZXhwIjoxNzEzNTU2NjcyfQ.h5beTj0P1a2eH-46pbrmk1I98QdIL-co83Gf5YHdOwuX6ie1XeYdD38l27CKtmacKF3ywSo0hYK6FJWg3_qeWURzOOGJTHuBO6vNGPIpzhRCn06M7iEYycM_2aO4v_xwKatP9Zc0Mtlot0Sm2JFL_2vi2CKMK5zfRPopCfDVSmcZfs0J6GRRrY7EGwINsnPmMgfFR64Krewpj04FVbhq1MkH3rt6c0XW4DqLZ8JjvxUNgh7b_8ax9CBN6DiGnioHR3B0Tpm5yiNL7tUUEBBn70tHxW3M5G7f6xMB04TbCTmP2fJPzmc7xRqK3ZCssgu69BekgPXm66prqsveZWPxzg",
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
