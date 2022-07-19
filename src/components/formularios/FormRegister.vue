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
  
          <InputTexto v-maska="'#####-###'"
            v-model="var_cep"
            class="col-5 q-ma-xs"
            string_etiqueta="CEP"
            bg-color="grey-1"
            :prm_limpavel="false"
            v-on:focusout="buscarCep()"
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
            v-model="var_bairro"
            class="col-5 q-ma-xs"
            string_etiqueta="Bairro"
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


          <InputTexto v-maska="'###.###.###-##'"
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
              @click="this.$router.push({name: home})"
            />

          </q-card-actions>

      </q-form>
      
    </q-card>
  </div>
</template>

<script>
//Import components
import InputTexto from '@/components/campos/inputTexto.vue'

//Import Axios
import { UsuarioPost } from '@/services/usuario/axios-usuario.js'
import { pesquisarCep } from '@/services/cep/axios-cep.js'

//Import Quasar
import { useQuasar } from 'quasar'

//Import Vue
import { ref } from 'vue'

export default {
  name:'FormRegister',
  components: {
    InputTexto,
  },
  setup () {
    const $q = useQuasar()

    function onSuccess(tipo, msg) {
      $q.notify({
      type: tipo,
      position: 'top',
      progress: true,
      message: msg  
      })
    }

    function onRejected(msg) {
      $q.notify({
        type: "negative",
        position: "top",
        progress: true,
        message: msg,
      });
    }

    return {
      check: ref(false),
      onSuccess,
      onRejected,
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
    async buscarCep(){
      let cep = this.var_cep.replace(/\.|\-/g, '');
      pesquisarCep(cep)
      .then(response => {
        if(response.status == 200){
          this.var_rua = response.data.logradouro;
          this.var_estado = response.data.uf;
          this.var_municipio = response.data.localidade;
          this.var_bairro = response.data.bairro;
          this.var_complemento = response.data.complemento;
        }else{
          const msg = "O CEP digitado é inválido!"
          this.onRejected(msg);
        }
      }) 
    },
    enviarFormulario(){
      let var_login = {
        "nome": this.var_nome,
        "email": this.var_email,
        "pais": this.var_pais,
        "cep": this.var_cep,
        "uf_endereco": this.var_estado,
        "cidade": this.var_municipio,
        "rua": this.var_rua,
        "casa": this.var_numero,
        "complemento_endereco": this.var_complemento,
        "cpf": this.var_cpf,
        "numero_pis": this.var_pis,
        "senha": this.var_senha
      }
      UsuarioPost(var_login)
      .then(response => {
        if(response.data.IsOk){
          this.$router.push('/')
          return window.alert("Usuário criado com sucesso");
        }
        this.onRejected('negative', response.data.Msg)
      })
      .catch(err => {
          this.onRejected(err.response.statusText);
        })
    },
  }
}
</script>