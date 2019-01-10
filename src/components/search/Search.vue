<template>
<div>
  ClientID: {{state.spotify.clientId}}
</div>
</template>

<script>
import state from '../../store/state'

export default {
  name: 'Search',
  data () {
    return {
      state: state
    }
  }
}
</script>

<style lang="stylus" module>
</style>
