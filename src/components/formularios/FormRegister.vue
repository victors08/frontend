<template>
  <div class="row items-center fixed-center">

    <q-card class="col q-pa-sm" style="text-align: center;">

      <div class="text-h6 q-pa-sm">Cadastro de usuário</div>

      <q-form
        class="Flex row justify-between"
        @submit="enviarFormulario($event)"
      >
        
          <InputTexto
            v-model="var_nome"
            class="col-12 q-pa-xs"
            lazy-rules="ondemand"
            :rules="[ val => !!val || 'Por favor, informe um nome']"
            string_etiqueta="Nome"
            bg-color="grey-1"
            :prm_limpavel="false"
          />
  
          <InputTexto
            v-model="var_email"
            class="col-7 q-ma-xs"
            lazy-rules="ondemand"
            :rules="[ val => !!val || 'Por favor, informe o email']"
            string_etiqueta="E-mail"
            bg-color="grey-1"
            :prm_limpavel="false"
            type="email"
          />

          <InputTexto
            v-model="var_pais"
            class="col-4 q-ma-xs"
            string_etiqueta="País"
            bg-color="grey-1"
            :prm_limpavel="false"
          />
  
          <InputTexto v-maska="'#####-###'"
            v-model="var_cep"
            class="col-3 q-ma-xs"
            string_etiqueta="CEP"
            bg-color="grey-1"
            :prm_limpavel="false"
            v-on:focusout="buscarCep()"
          />

          <InputTexto
            v-model="var_estado"
            class="col-3 q-ma-xs"
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
            class="col-3 q-ma-xs"
            string_etiqueta="Bairro"
            bg-color="grey-1"
            :prm_limpavel="false"
          />

          <InputTexto
            v-model="var_rua"
            class="col-4 q-ma-xs"
            string_etiqueta="Rua"
            bg-color="grey-1"
            :prm_limpavel="false"
          />

          <InputTexto
            v-model="var_numero"
            class="col-3 q-ma-xs"
            string_etiqueta="Número"
            bg-color="grey-1"
            :prm_limpavel="false"
          />

          <InputTexto
            v-model="var_complemento"
            class="col-6 q-ma-xs"
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
            class="col-6 q-ma-xs"
            lazy-rules="ondemand"
            :rules="[ val => !!val || 'Por favor, informe uma senha']"
            string_etiqueta="Senha"
            bg-color="grey-1"
            :prm_limpavel="false"
            type="password"
          />

          <div class="fit row justify-center">
            <q-checkbox v-model="check"
              label="Eu aceito os termos e licenças"
            />
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
              @click="SingUp()"
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

//Import Vue
import { ref } from 'vue'

export default {
  name:'FormRegister',
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
      check: ref(false),
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
          window.alert("CEP digitado inválido ou não existente!")
        }
      }) 
    },
    enviarFormulario(e, clearCep , clearCpf) {
      // Impede Evento padrão de usar @submit
      e.preventDefault();
      
      if(clearCep == "" && clearCpf == "") 
      clearCep = this.var_cep.replace(/\.|\-/g, '');
      clearCpf = this.var_cpf.replace(/\.|\-/g, '');

      let var_login = {
        "nome": this.var_nome,
        "email": this.var_email,
        "pais": this.var_pais,
        "cep": clearCep,
        "uf_endereco": this.var_estado,
        "cidade": this.var_municipio,
        "rua": this.var_rua,
        "casa": this.var_numero,
        "complemento_endereco": this.var_complemento,
        "cpf": clearCpf,
        "numero_pis": this.var_pis,
        "senha": this.var_senha
      }
      UsuarioPost(var_login)
      .then(response => {
        if(response.status == 200){
          console.log("Usuário criado com sucesso")
        }
      })
      .catch(err => {
          this.onRejected(err.response.statusText);
        })
    },
    SingUp(){
      firebase.auth().createUserWithEmailAndPassword(this.var_email, this.var_senha)
      .then((user) => {
        this.$router.push({name: 'home'});
      },
        (err) => {
          alert('Aconteceu algo inesperado.' + err.message)
        }
      );
    }
  }
}
</script>