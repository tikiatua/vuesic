<template>
  <div :class="$style.app">

    <logo />

    <div id="configuration">
      
    </div>

    <div id="search">

    </div>

    <div id="controls">

    </div>
  </div>
</template>

<script>
import Logo from './components/logo/Logo.vue';
import Search from './components/search/Search.vue';

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style lang="stylus" module>

.app {
  font-family 'Inter UI', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing antialiased;
  -moz-osx-font-smoothing grayscale;
  text-align center;
  color #2c3e50;
  margin-top 60px;
}

</style>
