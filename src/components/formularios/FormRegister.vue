<template>
  <div class="row items-center">

    <q-card class="col q-pa-xs" style="text-align: center; max-width: 600px;">

      <div class="text-h6">Cadastro de usuário</div>

      <q-form
        class="fit row justify-around q-ma-sm q-pa-sm"
        @submit="enviarFormulario($event)"
      >
        
          <InputTexto
            v-model="v_nome"
            class="col-6"
            string_etiqueta="Nome"
            bg-color="grey-1"
            :prm_limpavel="true"
          />
  
          <InputTexto
            v-model="v_email"
            class="col-6"
            string_etiqueta="E-mail"
            bg-color="grey-1"
            :prm_limpavel="true"
            type="email"
          />


        <q-separator/>
        

          <InputTexto
            v-model="v_pais"
            class="col-6"
            string_etiqueta="País"
            bg-color="grey-1"
            :prm_limpavel="true"
          />
  
          <InputTexto
            v-model="v_cep"
            class="col-6"
            string_etiqueta="CEP"
            bg-color="grey-1"
            :prm_limpavel="true"
            v-on:mouseover="validarCep()"
          />

          <InputTexto
            v-model="v_estado"
            class="col-6"
            string_etiqueta="Estado"
            bg-color="grey-1"
            :prm_limpavel="true"
          />
  
          <InputTexto
            v-model="v_municipio"
            class="col-6"
            string_etiqueta="Municipio"
            bg-color="grey-1"
            :prm_limpavel="true"
          />

          <InputTexto
            v-model="v_rua"
            class="col-6"
            string_etiqueta="Rua"
            bg-color="grey-1"
            :prm_limpavel="true"
          />

          <InputTexto
            v-model="v_numero"
            class="col-6"
            string_etiqueta="Número"
            bg-color="grey-1"
            :prm_limpavel="true"
          />

          <InputTexto
            v-model="v_complemento"
            class="col-6"
            string_etiqueta="Complemento"
            bg-color="grey-1"
            :prm_limpavel="true"
          />


        <q-separator/>


          <InputTexto
            v-model="v_cpf"
            class="col-6"
            string_etiqueta="CPF"
            bg-color="grey-1"
            :prm_limpavel="true"
          />

          <InputTexto
            v-model="v_pis"
            class="col-6"
            string_etiqueta="PIS"
            bg-color="grey-1"
            :prm_limpavel="true"
          />

          <InputTexto
            v-model="v_password"
            class="col-6"
            string_etiqueta="Senha"
            bg-color="grey-1"
            :prm_limpavel="true"
            type="password"
          />

      </q-form>
      
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
    </q-card>
  </div>
</template>

<script>

import InputTexto from '@/components/campos/inputTexto.vue'
import { UsuarioPost } from '@/services/usuario/axios-usuario.js'

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
      .catch(err =>{
        this.console(err.data)
      })
    },
  }
}
</script>