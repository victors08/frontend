<template>

  <div class="row items-center q-pa-md justify-center fixed-right">

    <q-card class="col" style="width:340px;height: 400px;">

      <div class="text-h5 q-mt-md" style="text-align:center;">
        Login
      </div>

      <div class="row">
        <q-form 
          class="fit row justify-center"
          @submit="enviarFormulario()"
        >
          <InputTexto v-model="var_email"
          class="q-my-md"
          lazy-rules="ondemand"
          :rules="[ val => !!val || 'Por favor, informe o email']"
          string_etiqueta="E-mail"
          :prm_limpavel="true"
          />

          <InputTexto v-model="var_senha"
          string_etiqueta="Senha"
          type="password"
          :prm_limpavel="true"
          />

          <q-toggle
          v-model="var_isLembrar"
          color="blue"
        >
          <template v-slot:default>
            <h6> Permanecer conectado?</h6>
          </template>
        </q-toggle>

          
            <q-btn type="submit"
              color="blue-8" 
              label="Entrar"
             />
         

          <div class="q-ma-xs">
            Ainda não tem conta? 
            <q-btn 
              flat color="primary" 
              label="Criar conta"
              size="15px"
              @click="this.$router.push({name : 'register' })"
            />
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
  name: 'FormLogin',
  components: {
      InputTexto,
  },
  data(){
    return{
      var_email: ref(''),
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

    let login = {  "Usuario": this.var_email, "Senha": this.var_senha}
    getLoginGeral(login)
    .then(response => {
      //SE INFORMAÇÕES CORRETAS
      this.console(response)
      if(response.data.IsOk) {
        
        // Set session email usuario
        SessionStorage.set('email', this.var_email)
        //Set session nome usuario
        SessionStorage.set('usuario', response.data.nome)
        //Set session id do usuario
        SessionStorage.set('usuario_id', response.data.id)

        this.$router.push({name : 'profile' })
        
        return;
      }
      this.onFeedback('negative', response.data.Msg)
      })
      .catch(err =>{
        this.console(err.data)
        this.feedback('negative','Não foi possivel realizar o login')
      })
    }
  },
}
</script>

