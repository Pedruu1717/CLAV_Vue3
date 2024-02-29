<template>
  <div>
    <p class="clav-content-title-1">O que é a CLAV</p>
    <p class="clav-content-text px-8 py-2">
      Plataforma da Direção-Geral do Livro, dos Arquivos e das Bibliotecas para
      disponibilizar informação, orientações e ferramentas que facilitem e normalizem as
      práticas de classificação e avaliação da informação pública.
    </p>
    <p class="clav-content-text px-8 py-2">
      Esta plataforma destina-se a entidades da Administração Pública, a empresas públicas
      e a outras entidades de Portugal Continental e permite a interação entre estas e a
      DGLAB.
    </p>
    <p class="clav-content-text px-8 py-2">
      É igualmente destinada ao cidadão, particularmente através da disponibilização do
      catálogo de processos de negócio da Administração Pública, que integra a Lista
      Consolidada.
    </p>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo(0, 0);
})

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
