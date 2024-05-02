// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      name: "Pedro Melo",
      token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE1MTQzMzYwIiwibGV2ZWwiOjcsImVudGlkYWRlIjoiZW50X0EzRVMiLCJlbWFpbCI6InBlZHJvbWVsbzIwMDBAb3V0bG9vay5wdCIsImlhdCI6MTcxNDY1MTE0NiwiZXhwIjoxNzE0Njc5OTQ2fQ.v1kWhQewXOuHyyPOGnFWGLHH5f9cu_ynQlukG-eV9zQC_qA6G5lmxtl0oCOhYiVrhIyYJOFmCy09kbnDRmgleTmykwAhDQYBv2J0ZVn_oeM0W2NUVFrz5ZXRsGcB_VJ7E372i__efJgnsEDxfCmfMt9NGjZ8aqZG1MikjqdcAMn2SkuTc5_EV59x20FtoeVoC4SsH_EKQmpgjoa44PxES_YP4E_CwHj_Wy6bWs9U51cCFLT0g0-vuYtacxP-958v4Vj5jy3Uww00af0BC432vreb0vAy61nnWMb38ZL-ZnUulvYb9x9VpooHUp_kku142-fX_40yKrCcx_z9Sp1ZVw",
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
