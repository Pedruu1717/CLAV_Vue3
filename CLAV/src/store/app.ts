// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      name: "Pedro Melo",
      token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE1MTQzMzYwIiwibGV2ZWwiOjcsImVudGlkYWRlIjoiZW50X0EzRVMiLCJlbWFpbCI6InBlZHJvbWVsbzIwMDBAb3V0bG9vay5wdCIsImlhdCI6MTcxMjE0MTE1OCwiZXhwIjoxNzEyMTY5OTU4fQ.PpE0SbDCfXd8w5SQtNQ1WuIXjGOHZyNR6GqYqtzDJeBKElw49imDVqWK5fCvFft4mj7LXA7BEWIkkjDyZwg9_gRMjvRbWb361BG9YxMYcQfRTuPTrQvF4DlcY2jP6O87Hjm7Faa8H3qsi32SsY4L77AZcJufxX9HbX7oKUV_Gg-GNEpjLX2aTeTQgkzni_k1rSYo4GnUStXOgqRyUuo9GAwD37rEVByBRnDk74EQLIq9p_DcGw5pqb2LtEYxuxOfk2F84lL_LBUP6BiyRQ5vGRAb__Kigb1TiSFS-C1NlyAcznefrpKZp8jILKROpA4DWGjYzb3D4ZmV_PkM6-nOtg",
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
