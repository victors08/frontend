<template>
  <div class="row items-center fixed-center">

    <q-card class="col q-pa-sm" style="text-align: center;">

      <div class="text-h6 q-pa-sm">Cadastro de usuário</div>

      <q-form
        class="fit row justify-center"
        @submit="enviarFormulario($event)"
      >
        
          <InputTexto
            v-model="var_nome"
            class="col-5 q-ma-xs"
            string_etiqueta="Nome"
            bg-color="grey-1"
            :prm_limpavel="false"
          />
  
          <InputTexto
            v-model="var_email"
            class="col-5 q-ma-xs"
            string_etiqueta="E-mail"
            bg-color="grey-1"
            :prm_limpavel="false"
            type="email"
          />


        <q-separator/>
        

          <InputTexto
            v-model="var_pais"
            class="col-5 q-ma-xs"
            string_etiqueta="País"
            bg-color="grey-1"
            :prm_limpavel="false"
          />
  
          <InputTexto
            v-model="var_cep"
            class="col-5 q-ma-xs"
            string_etiqueta="CEP"
            bg-color="grey-1"
            :prm_limpavel="false"
            v-on:mouseover="validarCep()"
          />

          <InputTexto
            v-model="var_estado"
            class="col-5 q-ma-xs"
            string_etiqueta="Estado"
            bg-color="grey-1"
            :prm_limpavel="false"
          />
  
          <InputTexto
            v-model="var_municipio"
            class="col-5 q-ma-xs"
            string_etiqueta="Municipio"
            bg-color="grey-1"
            :prm_limpavel="false"
          />

          <InputTexto
            v-model="var_rua"
            class="col-5 q-ma-xs"
            string_etiqueta="Rua"
            bg-color="grey-1"
            :prm_limpavel="false"
          />

          <InputTexto
            v-model="var_numero"
            class="col-5 q-ma-xs"
            string_etiqueta="Número"
            bg-color="grey-1"
            :prm_limpavel="false"
          />

          <InputTexto
            v-model="var_complemento"
            class="col-5 q-ma-xs"
            string_etiqueta="Complemento"
            bg-color="grey-1"
            :prm_limpavel="false"
          />


        <q-separator/>


          <InputTexto
            v-model="var_cpf"
            class="col-5 q-ma-xs"
            string_etiqueta="CPF"
            bg-color="grey-1"
            :prm_limpavel="false"
          />

          <InputTexto
            v-model="var_pis"
            class="col-5 q-ma-xs"
            string_etiqueta="PIS"
            bg-color="grey-1"
            :prm_limpavel="false"
          />

          <InputTexto
            v-model="var_senha"
            class="col-5 q-ma-xs"
            string_etiqueta="Senha"
            bg-color="grey-1"
            :prm_limpavel="false"
            type="password"
          />

          <div>
            <q-checkbox v-model="check" label="Eu aceito os termos e licenças" />
          </div>

          <q-card-actions class="fit row justify-evenly">
            
            <q-btn 
              label="Confirmar" 
              color="positive"
              type="submit"
            />

            <q-btn 
              label="Cancelar" 
              color="negative"
              @click="this.$router.push('/')"
            />

          </q-card-actions>

      </q-form>
      
    </q-card>
  </div>
</template>

<script>

import InputTexto from '@/components/campos/inputTexto.vue'
import { UsuarioPost } from '@/services/usuario/axios-usuario.js'
import { useQuasar } from 'quasar'
import { ref } from 'vue'

export default {
  name:'FormRegister',
  components: {
    InputTexto,
  },
  setup () {
    const $q = useQuasar()

    function onFeedback (tipo, msg) {
      $q.notify({
      type: tipo,
      position: 'top',
      progress: true,
      message: msg  
      })
    }

    return {
      check: ref(false),
      onFeedback,
    }
  },
  data (){
    return{ 
      var_nome: ref(''),
      var_email: ref(''),
      var_pais: ref(''),
      var_cep: ref(''),
      var_estado: ref(''),
      var_municipio: ref(''),
      var_rua: ref(''),
      var_numero: ref(''),
      var_complemento: ref(''),
      var_cpf: ref(''),
      var_pis: ref(''),
      var_senha: ref(''),
    }
  },
  methods: {
    validarCep() {
      
    },
    enviarFormulario(){
      let var_login = {
        "nome": this.v_nome,
        "email": this.v_email,
        "pais": this.v_pais,
        "cep": this.v_cep,
        "uf_endereco": this.v_estado,
        "cidade": this.v_municipio,
        "rua": this.v_rua,
        "casa": this.v_numero,
        "complemento_endereco": this.v_complemento,
        "cpf": this.v_cpf,
        "numero_pis": this.v_pis,
        "senha": this.v_senha
      }
      UsuarioPost(var_login)
      .then(response => {
        if(response.data.IsOk){
          this.$router.push('/')
          return window.alert("Usuário criado com sucesso");
        }
        this.onFeedback('negative', response.data.Msg)
      })
    },
  }
}
</script>