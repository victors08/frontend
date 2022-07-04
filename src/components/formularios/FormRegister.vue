<template>
  <div class="row items-center">

    <q-card class="col q-pa-md" style="text-align: center; max-width: 600px;">

      <div class="text-h6">Cadastro de usuário</div>

      <q-form
        class="fit row q-pa-xs"
        @submit="onSubmit"
      >
        <div class="fit row justify-around q-ma-sm" id="info">
          <InputTexto
            string_etiqueta="Nome"
            bg-color="grey-1"
            :prm_limpavel="true"
          />
  
          <InputTexto
            string_etiqueta="E-mail"
            bg-color="grey-1"
            :prm_limpavel="true"
            type="email"
          />
        </div>

        <q-separator/>
        
        <div class="" id="endereco">
          <InputTexto
            string_etiqueta="País"
            bg-color="grey-1"
            :prm_limpavel="true"
          />
  
          <InputTexto
            string_etiqueta="CEP"
            bg-color="grey-1"
            :prm_limpavel="true"
            v-on:mouseover="validarCep()"
          />
  
          <InputTexto
            string_etiqueta="Municipio"
            bg-color="grey-1"
            :prm_limpavel="true"
          />
        </div>
      </q-form>
    </q-card>
  </div>
</template>

<script>

import InputTexto from '@/components/campos/inputTexto.vue'

export default {
  name:'FormRegister',
  components: {
    InputTexto,
  },
  methods: {
    validarCep() {
      
    }
  }
}
</script>