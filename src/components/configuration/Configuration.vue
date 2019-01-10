<template>
  <div>
    <div>..</div>
    <input v-model="state.spotify.clientId" placeholder="Client ID">
    <input v-model="state.spotify.clientSecret" placeholder="Client Secret">
  </div>
</template>

<script>
import state from '../../store/state'

export default {
  name: 'Configuration',
  data () {
    return {
      state: state
    }
  }
}
</script>

<style lang="stylus" module>
</style>
