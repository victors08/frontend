<template>

  <q-layout view="hhh Lpr lFf">

    <Header />

    <q-page-container>

      <router-view />
      
    </q-page-container>
    
  </q-layout>

</template>

<script>

import Header from '@/components/navegacao/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>