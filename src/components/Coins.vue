<template>
  <v-container>
    <div class="text-xs-center" v-if='isFetching'>
      <v-progress-circular
        :rotate="360"
        :size="100"
        :width="15"
        :value="value"
        color="teal"
        >
        {{ value }}
      </v-progress-circular>
    </div>
    <div v-else>
      <v-data-table
       :headers="headers"
       :items="getCoins"
       class="elevation-1"
      >

      <template 
          slot="items" 
          slot-scope="props"
      >
       <td class="text-xs-right">{{ props.item.SortOrder }}</td>
        <td>{{ props.item.CoinName }}</td>
        <td class="text-xs-right">{{ props.item.FullName }}</td>
        <td class="text-xs-right">{{ props.item.ProofType }}</td>
        <td class="text-xs-right">{{ props.item.ImageUrl }}</td>
        <td class="text-xs-right">{{ props.item.IsTrading }}</td>
      </template>
     </v-data-table>
   </div>
  </v-container>
</template>
<script>
import { mapState, mapGetters } from 'vuex';

export default {
  props: [],
  data: () => ({
        headers: [
          { text: 'Sort Order', value: 'SortOrder' },
          {
            text: 'Coin Name',
            align: 'left',
            sortable: false,
            value: 'CoinName'
          },
          { text: 'Full Name', value: 'FullName' },
          { text: 'Proof Type', value: 'ProofType' },
          { text: 'Image Url', value: 'ImageUrl' },
          { text: 'IsTrading', value: 'IsTrading' }
        ],
        interval: {},
        value: 0
  }),
  beforeDestroy () {
      clearInterval(this.interval)
  },
  mounted () { this.interval = setInterval(() => {
      if (this.value === 100) {
        return (this.value = 0)
      }
      this.value += 20
    }, 1000)
  },
  computed: {
    ...mapState({
      isFetching: state => state.coins.isFetching,
    }),
    ...mapGetters(
      'coins', {getCoins: 'convertCoinsObjToArray'}
    )
  }
}
</script>
<style lang="stylus" scoped>
  .v-progress-circular
    margin: 1rem
</style>
