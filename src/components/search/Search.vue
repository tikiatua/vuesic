<template>
<div>
  <input v-model="search">
  <button @click="doSearch">Search</button>
</div>
</template>

<script>
import state from '../../store/state'

export default {
  name: 'Search',
  data () {
    return {
      state: state,
      search: null
    }
  },
  methods: {
    doSearch () {
      let res = state.spotify.service.search(this.search)
      res.then((dta) => {
        console.log(dta)
      })
    }
  }
}
</script>

<style lang="stylus" module>
</style>
