<template>
    <v-card flat class="pa-3">
        <div>
            <p class="clav-content-title-1">Login</p>
            <v-form v-model="valid">
                <v-container>
                    <v-row justify="center" align="center">
                        <v-col
                        cols="12"
                        md="4"
                        >
                        <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            label="E-mail"
                            hide-details
                            required
                            prepend-icon="mdi-at"
                        ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row justify="center" align="center">
                        <v-col
                        cols="12"
                        md="4"
                        >
                        <v-text-field
                            v-model="password"
                            :rules="passwordRules"
                            label="Password"
                            hide-details
                            required
                            prepend-icon="mdi-lock-outline"
                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="show1 ? 'text' : 'password'"
                            @click:append="show1 = !show1"
                            autocomplete="on"
                        ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row justify="center" align="center">
                        <v-col
                        cols="12"
                        md="4"
                        justify="center" align="center"
                        >
                            <v-btn
                            width="125"
                            @click="loginUtilizador"
                            rounded
                            class="text-white clav-linear-background"
                            :class="{
                                'px-8': display.lgAndUp,
                                'px-2': display.mdAndDown
                            }"
                            >
                            <span class="ml-2 btn-text"><v-icon icon="mdi-key-variant btn-icon"/> Login</span>
                            </v-btn>
                        </v-col>
                        <v-col
                        cols="12"
                        md="4"
                        justify="center" align="center"
                        >
                            <v-btn
                            width="130"
                            @click="$router.go(-1)"
                            rounded
                            color="red"
                            class="text-white"
                            :class="{
                                'px-8': display.lgAndUp,
                                'px-2': display.mdAndDown
                            }"
                            >
                            <span class="ml-2 btn-text"><v-icon icon="mdi-close btn-icon"/> Cancelar</span>
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-container>
            </v-form>
        </div>
    </v-card>
</template>

<script setup>
import { useDisplay } from 'vuetify'
import { host } from '@/config/global'
import { useAppStore } from '@/store/app';
import router from '@/router';

const display  = useDisplay();
const store = useAppStore()

var valid = ref(false)
var show1 = ref(false)
var email = ref('')
var password = ref('')

var passwordRules = [
    value => {
        if (value) return true

        return 'Password is required.'
    },
]

var emailRules = [
    value => {
        if (value) return true

        return 'E-mail is requred.'
    },
    value => {
        if (/.+@.+\..+/.test(value)) return true

        return 'E-mail must be valid.'
    },
]

async function loginUtilizador() {
    try {
        await fetch(host + "/users/login", {method: "POST", body: JSON.stringify({username: email.value, password: password.value}), 
        headers: {Accept: "application/json", "Content-Type": "application/json"}})
        .then(response => response.json())
        .then(data => {
            if (data.token != undefined && data.name != undefined) {                    
                store.guardaTokenUtilizador(data.token);
                store.guardaNomeUtilizador(data.name);
                store.guardaEntidade(data.entidade);                
                router.push("/");                
            } else {
                console.log("Ocorreu um erro ao realizar o login: Por favor verifique as suas credenciais!");
            }
        });
    } catch (e) {
        console.log(e);
    }
}

</script>
