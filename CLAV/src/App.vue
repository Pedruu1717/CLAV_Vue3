<template>
  <v-app v-if="authenticated">
    <!-- Header -->    
    <MainPageHeader />

    <!-- Main content -->
    <v-main class="main-content">
      <v-row justify="center" class="my-5">
        <v-col cols="12" sm="12" md="11">
          <router-view />
        </v-col>
      </v-row>
    </v-main>

    <!-- Footer -->
    <PageFooter />    
  </v-app>
</template>

<script setup>
import MainPageHeader from "@/components/MainPageHeader.vue";
import PageFooter from "@/components/PageFooter.vue";

var authenticated = true;
</script>

<style scoped>
.main-content {
  margin-top: -30px;
}
</style>
