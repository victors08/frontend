<template>
  <q-header class="bg-primary">
    <div class="fir row justify-end q-pa-sm">
          <q-btn 
            flat color = "white" 
            icon="home"
            label="Home"
            @click="this.$router.push('/')"
          />

          <q-btn 
            flat color = "white" 
            icon="account_circle"
            label="Criar conta"
            @click="this.$router.push('/register')"
          />
    </div>
  </q-header>
</template>

<script>

export default {
  name:'Header'  
}
</script>