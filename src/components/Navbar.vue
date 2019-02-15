<template>

    <v-toolbar
  >
    <v-toolbar-title><router-link to='/'>cMarket</router-link></v-toolbar-title>

    <v-divider
      class="mx-3"
      inset
      vertical
    ></v-divider>

    <span class="subheading"><router-link to='/allcoins'>Toplist</router-link></span>

    <v-divider
      class="mx-3"
      inset
      vertical
    ></v-divider>

    <span class="subheading">Exchanges</span>
    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn flat>
        News
      </v-btn>

      <v-divider vertical></v-divider>

      <v-btn flat>
        Blog
      </v-btn>

      <v-divider vertical></v-divider>
    </v-toolbar-items>

    <v-toolbar-side-icon></v-toolbar-side-icon>
  </v-toolbar>
</template>

<script>
export default {
  data: () => ({}),
}
</script>
