<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <YoutubePlayer/>
    <configuration />
    <search />
  </div>
</template>

<script>

import Configuration from './components/configuration/Configuration.vue'
import Search from './components/search/Search.vue'
import YoutubePlayer from './components/YoutubePlayer.vue'

export default {
  name: 'app',
  components: {
    Configuration,
    Search,
    YoutubePlayer
  }
}
</script>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
