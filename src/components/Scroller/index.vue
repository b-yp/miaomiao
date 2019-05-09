<template>
  <div class="wrapper" ref="wrapper">

  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'Scroller',
  mounted() {
    new BScroll(this.$refs.wrapper, {
      tap: true,
      probeType: 1
    })
  }
}
</script>

<style scoped>
  .wrapper {width: 100%}
</style>