<template>

  <div class="fit row justify-center">

    <div class="column text-h1">
      <h2 v-if="prm_nomeUsuario === '' " class="col-8 fixed-bottom-left q-pa-xl">
        Bem vindo, visitante!
      </h2>
      <h2 v-else>
        Bem vindo, <br/> visitante!
      </h2>
    </div>

    <div>
      <LoginView/>
    </div>
  </div>

</template>

<script>

import LoginView from '@/components/formularios/FormLogin.vue'

import { SessionStorage, Cookies } from 'quasar'

export default {
  name: 'HomeView',
  components: {
    LoginView,
  },
  data (){
    return {
      prm_nomeUsuario: SessionStorage.getItem('usuario')
    }
  },
  setup () {
    const value = Cookies.get('cookie_name')

    return {
      value
    }
  },
  methods: {
    isAuth(){
      if(prm_nomeUsuario == ""){
        return false;
      }else{
        return true;
      }
    }
  }
  // No começo da renderização, ele verifica se tem um Key/Valor na Sessão, se tiver tá logado
  // Se não tiver, visitante;
  // Criar uma variável aqui (isLogado), booleana. Baseado a cima, tu deixa falso ou verdadeiro
  // if (Elfo) descricao: A floresta de elfo; else Uma floresta misteriosa
  // nomeUsuario: isAuth ? SessionStorage.get('usuario') : visitante
  // funcao: isAuth ? () => {this.navegar('Fechar')} : () => {this.navegar('Abrir')}

}
</script>

