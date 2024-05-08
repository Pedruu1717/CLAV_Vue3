<template>
  <v-card flat class="pa-3">
    <p class="clav-content-title-1">Tabelas de Seleção</p>
    <p class="clav-content-text px-8 py-2">
      Uma tabela de seleção é um instrumento utilizado pelas entidades para a gestão da
      informação. Permite organizar e estruturar a informação desde o momento da sua
      produção, através da atribuição de um código de classificação. A esse código de
      classificação estão associadas as decisões de avaliação, i.e., o período de tempo
      que deve manter a informação (prazo de conservação administrativa), o destino a
      aplicar findo esse prazo (conservação permanente ou eliminação) e a
      responsabilização pela guarda da informação de conservação permanente.
    </p>
    <p class="clav-content-text px-8 py-2">
      As tabelas de seleção podem ser organizacionais (de uma entidade ou de uma tipologia
      de entidades) ou pluriorganizacionais (de um conjunto de entidades, por exemplo de
      âmbito ministerial). Constituem as fontes de legitimação para a eliminação da
      informação pública.
    </p>
    <p class="clav-content-text px-8 py-2">
      Para aceder ao catálogo de tabelas de seleção aprovadas, selecione a opção
      <b>CONSULTAR</b>. As tabelas de seleção encontram-se organizadas por fonte de
      legitimação: TS publicadas em Portaria de Gestão de Documentos (PGD) ou proveniente
      de Relatório de Avaliação de Documentação Acumulada (RADA).
    </p>
    <p class="clav-content-text px-8 py-2">
      Para propor uma tabela de seleção derivada da Lista Consolidada, selecione uma das
      opções:
    </p>
    <v-container fluid class="ma-0 px-12">
      <ul class="px-9 pt-3">
        <li>
          <b>CRIAR</b>, para a criação assistida online.
          <b>Deve estar registado na CLAV para aceder a esta funcionalidade.</b>
        </li>
        <li>
          <b>IMPORTAR FICHEIRO</b>, para submeter uma tabela criada offline, a partir de
          um ficheiro pre-preenchido disponibilizado no separador Documentação técnica de
          apoio, em
          <a @click="router.push('/forminstr')">Formulários e instruções para a CLAV</a>.
          Deve estar registado na CLAV para aceder a esta funcionalidade.
        </li>
      </ul>
    </v-container>
    <p class="clav-content-text px-8 py-2">
      Consulte as instruções em
      <a @click="router.push('/forminstr')"> Formulários e instruções</a>.
    </p>
    <v-row justify="center" align="center">
      <v-col cols="12" md="4" justify="center" align="center">
        <v-btn
          @click="router.push('/ts/consultar')"
          rounded
          class="text-white clav-linear-background"
          :class="{
            'px-8': display.lgAndUp,
            'px-2': display.mdAndDown
          }"
        >
        <span class="ml-2 btn-text"><v-icon icon="mdi-magnify btn-icon"/> Consultar</span>
        </v-btn>
     </v-col>
    </v-row>
  </v-card>
</template>

<script setup>
import router from '@/router'
import { useDisplay } from 'vuetify'

const display  = useDisplay();
</script>

<style scoped>
ul li {
  list-style: none;
  color: #606060;
  font-size: 0.9em;
  margin-bottom: 1rem;
  position: relative;
}

ul li::before {
  content: "\2022";
  position: absolute;
  left: -2rem;
  top: -2.35rem;
  font-size: 4em;
  color: #4da0d0;
}
</style>
