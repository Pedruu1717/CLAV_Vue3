<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import { ref, onMounted, nextTick, computed } from 'vue'

// reactive state
/*
Another nice trait of refs is that unlike plain variables, you can pass refs into functions while retaining access to the latest value and the reactivity connection. This is particularly useful when refactoring complex logic into reusable code.
*/
var count = ref(0)
const rawHtml = "<li>ola</li>"
var dynamicId = count
var date = new Date(1446309338000)
const seen = true
var attributename = "href"
var url = "https://google.com"
const nestedObj = ref({
  nested: {num: 99},
  cars: ['skoda', 'opel']
})

var classes_list = []

async function fetchClasses() {
  fetch("http://127.0.0.1:8000/polls/classes/", {
    method: "GET"
  })
  .then(response => response.json())
  .then(data => classes_list = data["results"]["bindings"])
  .catch(error => {
    console.error(error)
  })
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
  fetchClasses()
})

function mutateDeeply() {
  nestedObj.value.nested.num--
  nestedObj.value.cars.push('seat')
}

// functions that mutate state and trigger updates
function increment() {
  count.value++
}

function nothingSpecial(text) {
  return text
}

function formatDate(date) {
  return date.toUTCString()
}

function toggle() {
  seen.valueOf = !(seen.valueOf)
}

function onSubmit() {
  console.log("PEDROOOOOOO")
}

// Wait to DOM update to complete
async function waitForDOM() {
  nestedObj.value.cars.push("mercedes")
  await nextTick()
  // agora o DOM é atualizado
  nestedObj.value.cars.push("bmw")
}

// Computed Ref
const hasCarsMessage = computed(() => {
  return nestedObj.value.cars.length > 0 ? 'Yes' : 'No'
})
</script>

<template>
  <header>
    <img alt="Vue logo" src="./assets/logo.svg" width="125" height="125" />
  </header>

  <div>
  
  <p v-if="classes_list.length>0">{{ classes_list[0].classe.value }}</p>


  <!-- v-on is for events -->
  <v-btn v-on:click="increment" color="green">CLICAR {{ count }}</v-btn> 
  <VBtnSecondary @click="increment" color="blue">CLICAR {{ count }}</VBtnSecondary> <!-- shorthand -->
    
  <p>Interpolação de texto: {{ rawHtml }}</p>
  <p>Com diretiva v-html:</p>
  <p v-html="rawHtml" ></p>
  
  <div v-bind:id="dynamicId">
      <span>O id deste container é: {{dynamicId}}</span>
  </div>
  <!-- shorthand for v:bind is : -->
  <time :title="nothingSpecial('abc')" :datetime="date">
      {{ formatDate(date) }}
  </time>

  <div>
    <v-btn @click="toggle" color="black">Toggle</v-btn>
    <!-- conditional directive -->
    <p v-if="seen">A directive's job is to reactively apply updates to the DOM when the value of its expression changes.</p>
  </div>

  <!-- v-bind is for html tags' attributes-->
  <a v-bind:[attributename]=url>GOOGLE </a>
  <a :[attributename]=url>GOOGLE</a> <!-- shorthand -->
  
  <h3>FORMULÁRIO:</h3>
  <form @submit.prevent="onSubmit">
    <label for="1">Campo de texto </label>
    <input id="1" type="text"><br>
    <label for="2">Radio </label>
    <input id="2" type="radio"><br>
    <label for="3">Checkbox </label>
    <input id="3" type="checkbox"><br>
    <label for="4">Botão </label>
    <input id="4" type="v-btn" value="Botão"><br>
    <label for="5"><i>Submeter </i></label>
    <input id="5" type="submit">
  </form>
  <br>

  <v-btn @click="mutateDeeply" color="green">Mutate Deeply</v-btn>
  <br>
  <span>{{ nestedObj }}</span>

  <v-btn @click="waitForDOM" color="green">Wait for DOM</v-btn>
  <br>

  <span>{{ hasCarsMessage }}</span>
  <br>

  <v-dialog width="500">
    <!-- v-slot:name-of-slot -->
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" text="Open Dialog" color="red"></v-btn>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card title="Dialog" color="blue">
        <v-card-text>
          Bem vindo ao projeto CLAV
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text="Close Dialog" @click="isActive.value = false"></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>

  

  </div>
</template>

<style scoped>


</style>
