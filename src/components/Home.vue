<template>
    <div>
    <div>
  <b-jumbotron header="Welcome" lead="ここはユーのポートフォリオサイトです。">
  </b-jumbotron>
</div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style scoped>
div {
    color: white;
    border-radius: 10px;
    background: #474848;
    box-shadow:  8px 8px 16px #3c3d3d, 
                -8px -8px 16px #525353;
}
</style>