<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <YoutubePlayer/>
    <Search />
    <Playlist />
    <Panel />
  </div>
</template>

<script>

import Search from './components/search/Search.vue'
import Playlist from './components/playlist/Playlist.vue'
import Panel from './components/panel/Panel.vue'
import YoutubePlayer from './components/playlist/YoutubePlayer.vue'

import state from './store/state'
import SpotifyService from './lib/SpotifyService'

export default {
  name: 'app',
  components: {
    Search,
    Playlist,
    Panel,
    YoutubePlayer
  },
  mounted () {
    // create a new spotify service instance
    state.spotify.service = new SpotifyService()
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

.container {
  max-width: 1250px;
  padding: 0px 40px;
}
</style>
