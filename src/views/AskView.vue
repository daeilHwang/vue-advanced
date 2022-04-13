<template>
  <div>
      <div v-for="item in fetchedAsk" v-bind:key="item.id">{{ item.title }}</div>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex';

export default {
  computed:{
    // #3
    ...mapGetters([
      'fetchedAsk'
    ]),

    // #2
    ...mapState({
      fetchedAsk: state => state.ask
    })

    // #1
    // ask(){
    //   return this.$store.state.ask;
    // }
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
  }
}
</script>

<style>

</style>