// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      name: "Pedro Melo",
      token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE1MTQzMzYwIiwibGV2ZWwiOjcsImVudGlkYWRlIjoiZW50X0EzRVMiLCJlbWFpbCI6InBlZHJvbWVsbzIwMDBAb3V0bG9vay5wdCIsImlhdCI6MTcxMjY1MzI0NCwiZXhwIjoxNzEyNjgyMDQ0fQ.OEivEyVZx9omWQRHfPABbMDy4PGeWhGG18z-Y8hdYqfz-Q5anzyX3GqTg_4mALxv8wLoLcQp1r4A7J90DTMGhBl2c9_wTxH98_1tmgzpIG1MVzWdxmmWZohq5LaS4bAx8Fd669wi67u2ITWCyxsmXf3DVCPyJ6ioiYQQcAVufZhLtVpkw1foYJ_M7m_1N_YjLtK-mZFBfJYPV0vJ0mTCaZzCYxdjZXALRMybRogYlcjZciZWYMkhqvytgz9lb4lOkTJA5LiuL8RV3a6Jd_bEMKaE2yM-DO1o2Eght7FeQfs4m9nBmzKTNR0oBDsh57XmJDZPE0X5Dtmx2fydTqOk9g",
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
