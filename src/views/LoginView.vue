<template>

  <div class="text-h1 q-ml-xl q-my-xl" id="welcome">
    Olá 
    <br/>
    Visitante
  </div>

  <div class="row items-center q-pa-md justify-center fixed-right">

    <q-card class="col" style="width:340px;height: 400px;">

      <div class="text-h5" style="text-align:center;">
        Login
      </div>

      <div class="row">
        <q-form 
          class="fit row justify-center"
        >
          <InputTexto v-model="var_nome"
          class="q-my-md"
          lazy-rules="ondemand"
          :rules="[ val => !!val || 'Por favor, informe o nome']"
          string_etiqueta="E-mail"
          bg-color="grey-1"
          :prm_limpavel="true"
          />

          <InputTexto v-model="var_senha"
          string_etiqueta="Senha"
          bg-color="grey-1"
          type="password"
          :prm_limpavel="true"
          />

          <q-toggle
          class="q-ma-sm"
          v-model="var_isLembrar"
          dark
          color="blue"
          keep-color
          label="Permanecer conectado?"
          />

          <div class="q-ma-lg">
            <q-btn type="submit" color="blue-8" label="Entrar"/>
          </div>
          <div class="">
            Ainda não tem conta? <a href="#">Criar conta</a>
          </div>
        </q-form>
      </div>
    </q-card>
  </div>
</template>

<script>

import { useQuasar, SessionStorage} from 'quasar'
import { ref } from 'vue'
import InputTexto from '@/components/campos/inputTexto.vue'


export default {
  name: 'LoginView',
  components: {
      InputTexto,
  },
  data(){
    return{
      var_nome: ref(''),
      var_senha: ref(''),
      var_isLembrar: ref(false),
    }
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

    return { onFeedback }
  },
  methods: {
  enviarFormulario(e) {
    // Impede Evento padrão de usar @submit
    e.preventDefault();

    let login = {  "Usuario": this.var_nome, "Senha": this.var_senha}
    getLoginGeral(login)
    .then(response => {
      //SE INFORMAÇÕES CORRETAS
      this.console(response)
      if(response.data.IsOk) {
        SessionStorage.set('cs_str_login', response.data.Model)
        this.console(response.data)
        this.$router.push({name : 'Marketing'})
        
        return;
      }
      this.onFeedback('negative', response.data.Msg)
      })
      .catch(err =>{
        this.console(err.data)
      })
    },
    console(e) {
      console.log(e)
    }
  },
}
</script>

