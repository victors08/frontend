<template>
  <q-header class="bg-teal-7">
    <div class="fir row justify-end q-pa-sm">
          <q-btn 
            flat color = "white" 
            label="Home"
            @click="this.$router.push('/')"
          />
    </div>
  </q-header>
</template>

<script>

export default {
  name:'Header'  
}
</script>