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
    <div class="text-xs-center" v-else>
      <v-data-table
        :headers="headers"
        :items="getToplist"
        :pagination.sync="pagination"
       class="elevation-1"
      >

      <template 
          slot="items" 
          slot-scope="props"
      >
       <td class="text-xs-left">{{ props.item.CoinInfo.FullName }}</td>
        <td class="text-xs-left">{{ props.item.CoinInfo.Name }}</td>
        <td class="text-xs-left">{{ props.item.DISPLAY.USD.PRICE }}</td>
        <td class="text-xs-left">{{ props.item.DISPLAY.USD.LASTVOLUMETO }}</td>
        <td class="text-xs-left">{{ props.item.DISPLAY.USD.VOLUMEDAYTO }}</td>
        <td class="text-xs-left">{{ props.item.DISPLAY.USD.VOLUME24HOURTO }}</td>
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
        pagination: {
          rowsPerPage: 25,
        },
        headers: [
          { text: 'Full Name', value: 'FullName' },
          {
            text: 'Short Name',
            align: 'left',
            sortable: false,
            value: 'Name'
          },
          { text: 'Price', value: 'Price' },
          { text: 'LAST VOLUME TO', value: 'LASTVOLUMETO' },
          { text: 'Volume Day To', value: 'VOLUMEDAYTO' },
          { text: 'Volume (24HR)', value: 'VOLUME24HOURTO' }
        ],
        interval: {},
        value: 0
  }),
  created() {
    this.$store.dispatch('toplist/getToplist');
  },   
  computed: {
  ...mapState({
    isFetching: state => state.toplist.isFetching,
    toplist: state => state.toplist.toplist,
  }),
    ...mapGetters('toplist',
    {
      getToplist: 'getToplist'
    }), 
 },
}
</script>
<style>
</style>
