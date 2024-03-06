// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      name: "Pedro Melo",
      token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE1MTQzMzYwIiwibGV2ZWwiOjcsImVudGlkYWRlIjoiZW50X0EzRVMiLCJlbWFpbCI6InBlZHJvbWVsbzIwMDBAb3V0bG9vay5wdCIsImlhdCI6MTcwOTcxMjc2NSwiZXhwIjoxNzA5NzQxNTY1fQ.Vg25L9Ik9UgGFFKosaJ5tYzvuXnVyKNT1DF3N9b337ctQd57iDaJJcUlXsNN2nCrai4qdKeCaDZuvQtObivSEozp-akahoeyxFxRYqjeY5HI7uqAnM9xKlyQAPAKiPNmLKeF3bqrnyzvocsZwwVfSTkSi6luplWeS03o01dskR-C1QMxiTheptH11hNslT37BswE2JXOCibDVrb-HOJF0JINpaZjmrn24vaZDqnXfqgoRwytQqn7Wu49bfEbur9nGq0U-e0gHO0z7e0_DY0xdsNMupJDZ4VlofQaTbHdi2BSFIwKvDS3dvpumghs3BreBirM1kFoj1bPpQgOHHYKog",
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
