<template>
    <q-input v-model="modelo"
        outlined
        dense
        label-slot
        hide-bottom-space
        color="blue-10"
        :clearable="prm_limpavel"
    >
        <template v-slot:label>
            <span class="row all-pointer-events"
                style="font-size:20px; font-weight: 500; padding-bottom:0.1em;"
            >
                {{string_etiqueta}}<span v-if="prm_isObrigatorio" class="text-red">*</span>
            </span>
        </template>
    </q-input>
</template>

<script>
import {ref} from 'vue'

export default {
    name: 'InputTexto',
    props: {
        string_etiqueta: String,
        prm_limpavel: Boolean,
        prm_isObrigatorio: Boolean,
    },
    data (){
        return { modelo: ref(''), }
    }
}
</script>