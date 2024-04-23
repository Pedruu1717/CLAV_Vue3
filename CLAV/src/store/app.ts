// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      name: "Pedro Melo",
      token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE1MTQzMzYwIiwibGV2ZWwiOjcsImVudGlkYWRlIjoiZW50X0EzRVMiLCJlbWFpbCI6InBlZHJvbWVsbzIwMDBAb3V0bG9vay5wdCIsImlhdCI6MTcxMzg3NjcxOCwiZXhwIjoxNzEzOTA1NTE4fQ.kuksIbTZa0GPT7-57836FayK4c41w6gfi1Gl4ii3VozM5lAgCBoNBC_MiMmfeZT3ggdK3Yt_6TIuhWEPot3mib5OO9x6Y5BWUuBxH4LMQWfQBiKCZHaZ3ds8wLRJUfnvOza277-ddCrHX_JLK_dXBqG1Y4Yx0akz9GuYdCwXyjlOclOzLqE_Nf_Qhe8IwPw_RRCfRAileo7O9xxmXhCWxt6wpBc7gZAsLkIwwoDzIJSTCYuf788EPF9dVzn8MnUCX9uYqnczLujirQ8vyStPKeDD2mAPys-pcZ3z5IMpM4afQMUhIcNeNo1_fNWtkbXP5tHksHJe6VKD2O0rqdP8sg",
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
