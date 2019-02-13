<template>
  <v-container>
    <v-content>Hello World</v-content>
    <v-h1>{{ msg }}</v-h1> 
  </v-container>
</template>

<script>
  export default {
    props: ['msg'],
    data: () => ({
    })
  }
</script>

<style>

</style>
