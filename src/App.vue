<template>
  <v-app>

    <v-toolbar
  >
  <v-toolbar-title><router-link to='/'>cMarket</router-link></v-toolbar-title>

    <v-divider
      class="mx-3"
      inset
      vertical
    ></v-divider>

    <span class="subheading">Toplist</span>

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

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  created() {
    this.$store.dispatch('coins/getCoins');
  },
  data () {
    return {
      //
    }
  },
}
</script>
