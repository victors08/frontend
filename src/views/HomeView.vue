<template>

  <div class="fit row justify-center" id="body">

    <div class="column text-h1">
      <div class="col-8 fixed-bottom-left q-pa-xl">
        Ola, 
        <br/>
        Visitante!

      </div>
    </div>

    <div>
      <LoginView/>
    </div>

  </div>

</template>

<script>

import LoginView from '@/components/formularios/FormLogin.vue'

export default {
  name: 'HomeView',
  components: {
    LoginView,
  }
  // No começo da renderização, ele verifica se tem um Key/Valor na Sessão, se tiver tá logado
  // Se não tiver, visitante;
  // Criar uma variável aqui (isLogado), booleana. Baseado a cima, tu deixa falso ou verdadeiro
  // if (Elfo) descricao: A floresta de elfo; else Uma floresta misteriosa
  // nomeUsuario: isAuth ? SessionStorage.get('usuario') : visitante
  // funcao: isAuth ? () => {this.navegar('Fechar')} : () => {this.navegar('Abrir')}

}
</script>

<style scoped>
#body {
  background-image: url(https://br.freepik.com/fotos-gratis/agua-da-chuva-em-um-macro-verde-da-folha_5017036.htm#query=nature&position=10&from_view=search);
}
</style>
