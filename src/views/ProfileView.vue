<template>
  <div class="row items-center fixed-center">

    <q-card class="col q-pa-sm" style="text-align: center;">

      <div class="text-h6 q-pa-sm">Dados do usuário</div>

      <div class="Flex row justify-between">
          <InputTexto
            v-model="var_nome"
            class="col-12 q-pa-xs"
            string_etiqueta="Nome"
            bg-color="grey-1"
            readonly
            :prm_limpavel="false"
          />
  
          <InputTexto
            v-model="var_email"
            class="col-7 q-ma-xs"
            string_etiqueta="E-mail"
            bg-color="grey-1"
            readonly
            :prm_limpavel="false"
            type="email"
          />

          <InputTexto
            v-model="var_pais"
            class="col-4 q-ma-xs"
            string_etiqueta="País"
            bg-color="grey-1"
            readonly
            :prm_limpavel="false"
          />
  
          <InputTexto v-maska="'#####-###'"
            v-model="var_cep"
            class="col-3 q-ma-xs"
            string_etiqueta="CEP"
            bg-color="grey-1"
            readonly
            :prm_limpavel="false"
          />

          <InputTexto
            v-model="var_estado"
            class="col-3 q-ma-xs"
            string_etiqueta="Estado"
            bg-color="grey-1"
            readonly
            :prm_limpavel="false"
          />
  
          <InputTexto
            v-model="var_municipio"
            class="col-5 q-ma-xs"
            string_etiqueta="Municipio"
            bg-color="grey-1"
            readonly
            :prm_limpavel="false"
          />

          <InputTexto
            v-model="var_bairro"
            class="col-3 q-ma-xs"
            string_etiqueta="Bairro"
            bg-color="grey-1"
            readonly
            :prm_limpavel="false"
          />

          <InputTexto
            v-model="var_rua"
            class="col-4 q-ma-xs"
            string_etiqueta="Rua"
            bg-color="grey-1"
            readonly
            :prm_limpavel="false"
          />

          <InputTexto
            v-model="var_numero"
            class="col-3 q-ma-xs"
            string_etiqueta="Número"
            bg-color="grey-1"
            readonly
            :prm_limpavel="false"
          />

          <InputTexto
            v-model="var_complemento"
            class="col-6 q-ma-xs"
            string_etiqueta="Complemento"
            bg-color="grey-1"
            readonly
            :prm_limpavel="false"
          />


        <q-separator/>


          <InputTexto v-maska="'###.###.###-##'"
            v-model="var_cpf"
            class="col-5 q-ma-xs"
            string_etiqueta="CPF"
            bg-color="grey-1"
            readonly
            :prm_limpavel="false"
          />

          <InputTexto
            v-model="var_pis"
            class="col-5 q-ma-xs"
            string_etiqueta="PIS"
            bg-color="grey-1"
            readonly
            :prm_limpavel="false"
          />

          <InputTexto
            v-model="var_senha"
            class="col-6 q-ma-xs"
            string_etiqueta="Senha"
            bg-color="grey-1"
            readonly
            :prm_limpavel="false"
          />

          <q-card-actions class="fit row justify-evenly">
            <q-btn 
              label="Logout"
              color="primary"
              type="submit"
              @click="Logout()"
            />

            <q-btn 
              label="Excluir conta" 
              color="negative"
              @click="DeleteAccount()"
            />

          </q-card-actions>

      </div>
      
    </q-card>
  </div>
</template>

<script>
import InputTexto from '@/components/campos/inputTexto.vue'

//Import Vue
import { ref } from 'vue'

export default {
  name:'Profile',
  components: {
    InputTexto,
  },
  data (){
    return{
      var_nome: ref(''),
      var_email: ref(''),
      var_pais: ref(''),
      var_cep: ref(''),
      var_estado: ref(''),
      var_municipio: ref(''),
      var_bairro: ref(''),
      var_rua: ref(''),
      var_numero: ref(''),
      var_complemento: ref(''),
      var_cpf: ref(''),
      var_pis: ref(''),
      var_senha: ref(''),
    }
  },
  methods: {
    Logout(){
      this.$router.push({name: 'home'})
    }
  }
}
</script>