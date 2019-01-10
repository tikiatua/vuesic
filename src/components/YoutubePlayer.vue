<template>
    <div>
        <youtube :video-id="videoId" ref="youtube" hidden></youtube>
        <button v-on:click="playVideo">Play</button>
        <button v-on:click="pauseVideo">Pause</button>
        <br/><br/>
        Artist: <input type="text" v-model="artist" placeholder="Artist"><br/>
        Track: <input type="text" v-model="track" placeholder="Track"><br/>
        <button v-on:click="playSomething">Play matching</button>
    </div>
</template>
<script>
import { findMatchingVideo } from '../lib/YoutubeService'

export default {
  name: 'YoutubePlayer',
  data () {
    return {
      videoId: 'lG0Ys-2d4MA',
      artist: '',
      track: ''
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
      findMatchingVideo(this.artist, this.track).then(video => { this.videoId = video.id }).then(() => this.playVideo())
    }
  }
}
</script>
