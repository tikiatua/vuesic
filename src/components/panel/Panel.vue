<template>
<div :class="$style.panel" class="container">
  <div>

  </div>

  <div>

    <div></div>

    <div :class="$style.controls">

      <div :class="$style.buttons">

        <!-- play previous song -->
        <svg xmlns="http://www.w3.org/2000/svg" width="12.631" height="15" viewBox="0 0 12.631 15">
          <g transform="translate(0)">
          <path class="$style.previous" d="M15.726,3.159A.843.843,0,0,1,16.22,3a.811.811,0,0,1,.832.791V17.209A.811.811,0,0,1,16.22,18a.843.843,0,0,1-.494-.159L6.332,11.131a.767.767,0,0,1,0-1.263Z" transform="translate(-4.421 -3)"/><path class="b" d="M21.395,6a.4.4,0,0,1,.395.395v9.473a.395.395,0,0,1-.789,0V6.395A.4.4,0,0,1,21.395,6Z" transform="translate(-21 -3.631)"/></g>
        </svg>

        <!-- play this song -->
        <svg xmlns="http://www.w3.org/2000/svg" width="40.425" height="40.425" viewBox="0 0 40.425 40.425">
          <g transform="translate(0)"><path :class="$style.run" d="M20.212,0A20.212,20.212,0,1,0,40.425,20.212,20.212,20.212,0,0,0,20.212,0Zm0,38.808a18.6,18.6,0,1,1,18.6-18.6,18.6,18.6,0,0,1-18.6,18.6Z"/><path class="a" d="M10.249,6.132A.8.8,0,0,0,9.811,6,.808.808,0,0,0,9,6.81v19.4a.809.809,0,0,0,.811.81.8.8,0,0,0,.439-.132l14.553-9.7a.808.808,0,0,0,0-1.357Z" transform="translate(5.553 3.702)"/></g>
        </svg>

        <!-- play next song -->
        <svg xmlns="http://www.w3.org/2000/svg" width="12.631" height="15" viewBox="0 0 12.631 15">
          <g class="a" transform="translate(0)"><path :class="$style.previous" d="M7.326,3.159A.843.843,0,0,0,6.832,3,.811.811,0,0,0,6,3.791V17.209A.811.811,0,0,0,6.832,18a.843.843,0,0,0,.494-.159l9.394-6.709a.767.767,0,0,0,0-1.263Z" transform="translate(-6 -3)"/><path class="b" d="M21.395,6A.4.4,0,0,0,21,6.395v9.473a.395.395,0,0,0,.789,0V6.395A.4.4,0,0,0,21.395,6Z" transform="translate(-9.158 -3.631)"/></g>
        </svg>

      </div>

      <div :class="$style.timing">
        <div :class="$style.played"></div>
      </div>

    </div>

  </div>

</div>
</template>

<script>
export default {
  name: 'Panel'
}
</script>

<style lang="stylus" module>

.panel {
  position: fixed
  bottom: 0px
  left: 0px
  right: 0px
  height: 100px
  background: #00BC7E
  display: flex
  flex-direction: row
  color: #fff
  align-items: center
}

.controls {
  display: flex;
  flex-direction: column
  max-width: 550px
  width: 550px
  margin-left: auto

  .buttons {
    display: flex
  }

  .previous {
    opacity: 0.84
    fill: #fff
    fill-rule: evenodd
  }

  .run {
    fill: #fff
  }

  .timing {
    height: 8px
    border-radius: 8px
    background: #179D71
  }

  .played {
    height: 100%
    border-radius: 8px
    background: #BBEADA
    width: 43%
  }
}


</style>
