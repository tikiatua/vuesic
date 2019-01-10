<template>
    <div>
        <youtube :video-id="videoId" ref="youtube"></youtube>
        <button v-on:click="playVideo">Play</button>
        <button v-on:click="pauseVideo">Pause</button>
        <button v-on:click="playSomething">Play something</button>
    </div>
</template>
<script>
import { findMatchingVideo } from '../lib/YoutubeService'

export default {
  name: 'YoutubePlayer',
  data () {
    return {
      videoId: 'lG0Ys-2d4MA'
    }
  },
  methods: {
    playVideo () {
      this.$refs.youtube.player.playVideo()
    },
    pauseVideo () {
      this.$refs.youtube.player.pauseVideo()
    },
    playSomething () {
      findMatchingVideo('Imagine Dragons', 'Friction').then(video => { this.videoId = video.id }).then(() => this.playVideo())
    }
  }
}
</script>
