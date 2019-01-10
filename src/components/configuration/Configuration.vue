<template>
  <div>
    <div>..</div>
    <input v-model="state.spotify.clientId" placeholder="Client ID">
    <input v-model="state.spotify.clientSecret" placeholder="Client Secret">
    <input v-model="search" placeholder="search">
    <button @click="verify">Verify spotify credentials</button>
    <button @click="searchFor">Search</button>
  </div>
</template>

<script>
import state from '../../store/state'

export default {
  name: 'Configuration',
  data () {
    return {
      state: state,
      search: null
    }
  },
  methods: {
    verify () {
      let dta = this.state.spotify.service.init(this.state.spotify.clientId)
      if (dta.response === 'error') {
        window.alert('Whoaaa. there was an error: ' + dta.message)
      }
    },
    searchFor () {
      let result = this.state.spotify.service.search(this.search)
      result.then((res) => {
        console.log('result', res)
      })
    }
  }
}
</script>

<style lang="stylus" module>
</style>
