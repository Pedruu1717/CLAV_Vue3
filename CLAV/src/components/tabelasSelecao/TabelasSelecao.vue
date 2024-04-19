<template>
    <v-card flat class="pa-3 conteudo">
        <v-row class="titulo" align="center" justify="center">
            <v-col cols="12" md="3" align="center"> <Voltar /> </v-col>
            <v-col cols="12" md="5" align="center">
            <p class="clav-content-title-1 ">Consultar Tabelas de Seleção</p>
            </v-col>
            <v-col cols="12" md="4" align="center">
            </v-col>
        </v-row>        
        <v-expansion-panels>
            <!-- Tabelas de Seleção inseridas na Clav -->  
            <PainelCLAV
                v-if="fontesTSReady"
                titulo="Tabelas de Seleção inseridas na Clav"
                icon="mdi-clipboard-text"
                infoHeader="Tabelas de Seleção criadas na Clav"
                :infoBody="myhelp.TS_LC"                
                >
                
                <template v-slot:conteudo>
                    <Listagem
                    :lista="fontesTS"
                    tipo="TABELAS DE SELEÇÃO INSERIDAS NA CLAV"
                    :entidades="entidades"
                    />
                </template>
            </PainelCLAV>

            <!-- Tabelas de Seleção (derivadas da LC) inseridas em portaria de gestão de documentos -->
            <PainelCLAV
                v-if="fontesPGDLCReady"
                titulo="Tabelas de Seleção (derivadas da LC) inseridas em portaria de gestão de documentos"
                icon="mdi-clipboard-text"
                infoHeader="Tabelas de Seleção (derivadas da LC) inseridas em portaria de gestão de documentos"
                :infoBody="myhelp.TS_LC"                
                >
                
                <template v-slot:conteudo>
                    <Listagem
                    :lista="fontesTS"
                    tipo="Tabelas de Seleção (derivadas da LC) inseridas em portaria de gestão de documentos"
                    :entidades="entidades"
                    />
                </template>
            </PainelCLAV>

            <!-- Tabelas de Seleção (NÃO derivadas da LC) inseridas em portaria de gestão de documentos -->
            <PainelCLAV
                v-if="fontesPGDTSReady"
                titulo="Tabelas de Seleção (não derivadas da LC) inseridas em portaria de gestão de documentos"
                icon="mdi-clipboard-text"
                infoHeader="Tabelas de Seleção (não derivadas da LC) inseridas em portaria de gestão de documentos"
                :infoBody="myhelp.TS_LC"                
                >
                
                <template v-slot:conteudo>
                    <Listagem
                    :lista="fontesTS"
                    tipo="Tabelas de Seleção (não derivadas da LC) inseridas em portaria de gestão de documentos"
                    :entidades="entidades"
                    />
                </template>
            </PainelCLAV>
        </v-expansion-panels>        
    </v-card>
</template>
 
<script setup>
import Listagem from "../generic/Listagem.vue";
import Voltar from "@/components/generic/Voltar";
import PainelCLAV from "@/components/generic/PainelCLAV";
import help from "@/config/help"
import router from "@/router"
import { useAppStore } from "@/store/app"
import { host } from "@/config/global"

const store = useAppStore()

var fontesPGDReady = ref(false)
var fontesPGD = ref([])
var fontesPGDLC = ref([])
var fontesPGDTS = ref([])
var fontesPGDLCReady = ref(false)
var fontesPGDTSReady = ref(false)
var fontesTS = ref([])
var fontesTSReady = ref(false)
var entidades = ref([])
// Array para poder expandir/fechar todos os panels
var tabsSel = ref([])
var tabsSelItems = ref(3)
var myhelp = help

function goBack() {
    router.push("/tsInfo");
}

// Abrir todos os v-expansion-panel
function expandAll() {
    tabsSel = [...Array(tabsSelItems).keys()].map((k, i) => i);
}

// Fechar todos os v-expansion-panel
function closeAll() {
    tabsSel = [];
}

try {
    await fetch(host + "/pgd/lc", { method: "GET", headers: { "Authorization": "token " + store.token } })
    .then(response => response.json())
    .then((data) => {
    fontesPGDLC = data.map((f) => {
        return {
        idPGD: f.idPGD,
        data: f.data,
        tipo: f.tipo,
        numero: f.numero,
        entidades: f.entidades.map((e) => {
            return e.includes("ent_")
            ? e.split("ent_")[1]
            : e.split("tip_")[1];
        }),
        sumario: f.sumario,
        estado: f.estado,
        link: f.link,
        };
    });
    fontesPGDLCReady = true;
    })
} catch (e) {
  console.log(e);
}

try {
    await fetch(host + "/legislacao?fonte=PGD", { method: "GET", headers: { "Authorization": "token " + store.token } })
    .then(response => response.json())
    .then((data) => {
    fontesPGD = data.map((f) => {
        return {
        data: f.data,
        tipo: f.tipo,
        numero: f.numero,
        entidades: f.entidades,
        sumario: f.sumario,
        estado: f.estado,
        link: f.link,
        };
    });
    fontesPGDReady = true;
    })
} catch (e) {
  console.log(e);
}

try {
    await fetch(host + "/pgd", { method: "GET", headers: { "Authorization": "token " + store.token } })
    .then(response => response.json())
    .then((data) => {
    fontesPGDTS = fontesPGD.map((f) => {
        var obj = data.find(
        (res) => res.tipo == f.tipo && res.numero == f.numero
        );
        if (obj)
        return {
            idPGD: obj.idPGD,
            data: obj.data,
            tipo: obj.tipo,
            numero: obj.numero,
            entidades: obj.entidades.map((e) => {
            return e.includes("ent_")
                ? e.split("ent_")[1]
                : e.split("tip_")[1];
            }),
            sumario: obj.sumario,
            estado: obj.estado,
            link: obj.link,
        };
        else
        return {
            idPGD: "",
            data: f.data,
            tipo: f.tipo,
            numero: f.numero,
            entidades: f.entidades ? f.entidades : [],
            sumario: f.sumario,
            estado: f.estado ? f.estado : "Ativo",
            link: f.link,
        };
    });
    fontesPGDTSReady = true;
    })
} catch (e) {
  console.log(e);
}

try {
    await fetch(host + "/tabelasSelecao", { method: "GET", headers: { "Authorization": "token " + store.token } })
    .then(response => response.json())
    .then((data) => {
    fontesTS = data.map((f) => {
        return {
        id: f.id.split("clav#")[1],
        data: f.data,
        tipo: f.tipoLeg,
        numero: f.numLeg,
        sumario: f.designacao,
        entidades: f.entidades.map((e) => {
            return e.includes("ent_")
            ? e.split("ent_")[1]
            : e.split("tip_")[1];
        }),
        estado: f.estado ? f.estado : "Ativo",
        link: "",
        };
    });
    fontesTSReady = true;
    })
} catch (e) {
  console.log(e);
}

/*await fontesPGDTS.map(async (obj) => {
    var leg =
    obj.idPGD != ""
        ? await fetch(host +            
            `/legislacao/${obj.idPGD.split("pgd_")[1]}`,
            { method: "GET", headers: { "Authorization": "token " + store.token } }
        )
        : "";
    leg && leg.data.entidades1.length > 0
    ? (obj.entidades = leg.data.entidades1.map((e) => {
        return e.id.includes("ent_")
            ? e.id.split("ent_")[1]
            : e.id.split("tip_")[1];
        }))
    : "";
});

await fontesPGDLC.map(async (obj) => {
    var leg =
    obj.idPGD != ""
        ? await fetch(host +            
            `/legislacao/${obj.idPGD.split("pgd_lc_")[1]}`,
            { method: "GET", headers: { "Authorization": "token " + store.token } }
        )
        : "";
    leg && leg.data.entidades1.length > 0
    ? (obj.entidades = leg.data.entidades1.map((e) => {
        return e.id.includes("ent_")
            ? e.id.split("ent_")[1]
            : e.id.split("tip_")[1];
        }))
    : "";
});*/

// Faz load de todas as entidades
try {
    await fetch(host + "/entidades", { method: "GET", headers: { "Authorization": "token " + store.token } })
    .then(response => response.json())
    .then((data) => {
    entidades = data.map(function (item) {
        return item.sigla;
    });
    })
} catch (e) {
  console.log(e);
}

</script>

<style scoped>
.separador {
  color: white;
  padding: 5px;
  margin: 5px;
  font-weight: 400;
  width: 100%;
  min-height: 50px;
  background: linear-gradient(to right, #19237e 0%, #0056b6 100%) !important;
  font-size: 14pt;
  font-weight: bold;
  border-radius: 10px 10px 0 0;
}
#expanded-content {
  margin-right: 12px !important;
  margin-left: 17px !important;
  margin-top: -1.1rem;
  border: 1px solid #dee2f8;
  border-radius: 0 0 10px 10px;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.12);
}

.titulo {
   margin-bottom: 10px;
 }
 
 .conteudo {
   margin-top: -30px;
 }
</style>
 