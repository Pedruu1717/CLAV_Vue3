<template>
    <v-card flat class="pa-3">
      <p class="clav-content-title-1">Lista Consolidada</p>
      <p class="clav-content-text px-8 py-2">
        A "Lista Consolidada para a classificação e avaliação da informação
        pública" é o referencial disponibilizado pela Direção-Geral do Livro, dos
        Arquivos e das Bibliotecas para servir de base à elaboração de
        instrumentos de gestão da informação, nomeadamente planos de classificação
        e tabelas de seleção. Este referencial apresenta uma estrutura hierárquica
        de classes que representam as funções e atividades executadas pela
        Administração Pública. Os processos de negócio são representados como
        classes de 3º nível, enquadrados em funções (classes de 1º nível) e
        subfunções (2º nível). As classes são constituídas por elementos
        informativos, agrupados por zonas, que as identificam e descrevem. Nas
        classes de 3º e 4º nível (subdivisão do processo de negócio para efeitos
        de avaliação), estes elementos destinam-se também a contextualizar e
        avaliar a informação.
      </p>
      <p class="clav-content-text px-8 py-2">
        Para aceder ao catálogo dos processos de negócio, selecione a opção
        <span class="content-title-2 pb-3">CONSULTAR</span>.
      </p>
      <p class="clav-content-text px-8 py-2">
        Para <b>propor uma nova classe</b> para a Lista Consolidada, selecione a
        opção
        <b
          >CRIAR CLASSE. Deve estar registado na CLAV para aceder a esta
          funcionalidade. Consulte as instruções em Formulários e instruções</b
        >.
      </p>
      <p class="clav-content-text px-8 py-2">
        Para <b>propor uma alteração a uma classe</b> da Lista Consolidada,
        selecione a opção
        <b
          >ALTERAR CLASSE. Deve estar registado na CLAV para aceder a esta
          funcionalidade</b
        >.
      </p>
      <v-container fluid style="text-align: center">
        <v-row justify="center" align="center">
          <v-col cols="12" md="4">
            <v-btn
              @click="router.push('/classes/consultar')"
              :class="{
                'px-8': display.lgAndUp,
                'px-2': display.mdAndDown
              }"
              rounded
              class="text-white clav-linear-background"
              
            >              
              <span class="ml-2 btn-text"><v-icon icon="mdi-magnify btn-icon"/>Consultar</span>
            </v-btn>
          </v-col>
          <!--<v-col
            cols="12"
            md="4"
            v-if="
              [1, 3, 3.5, 4, 5, 6, 7].includes(this.$userLevel()) &&
                this.$store.state.token != '' &&
                this.$store.state.name != ''
            "
          >
            <v-btn
              @click="$router.push('/classes/criar')"
              rounded
              class="white--text clav-linear-background"
              :class="{
                'px-8': $vuetify.breakpoint.lgAndUp,
                'px-2': $vuetify.breakpoint.mdAndDown
              }"
            >
              <unicon
                name="criar-icon"
                width="20"
                height="20"
                viewBox="0 0 20.71 20.721"
                fill="#ffffff"
              />
              <p class="ml-2">Criar Classe</p>
            </v-btn>
          </v-col>
          <v-col
            cols="12"
            md="4"
            v-if="
              [4, 5, 6, 7].includes(this.$userLevel()) &&
                this.$store.state.token != '' &&
                this.$store.state.name != ''
            "
          >
            <v-btn
              @click="$router.push('/classes/editar')"
              rounded
              class="white--text clav-linear-background"
              :class="{
                'px-8': $vuetify.breakpoint.lgAndUp,
                'px-2': $vuetify.breakpoint.mdAndDown
              }"
            >
              <unicon
                name="alterar-icon"
                width="20"
                height="20"
                viewBox="0 0 20.71 20.727"
                fill="#ffffff"
              />
              <p class="ml-2">Alterar Classe</p>
            </v-btn>
          </v-col>-->
        </v-row>
      </v-container>
    </v-card>
</template>
  
<script setup>
import router from '@/router'
import { useDisplay } from 'vuetify'

const display  = useDisplay();
</script>

<style scoped>
.btn-text {
    padding-right: 10px;
    padding-left: 5px;
}

.btn-icon {
    margin-right: 5px;
}
</style>
  