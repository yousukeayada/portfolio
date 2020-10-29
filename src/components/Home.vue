<template>
    <div>
  <b-jumbotron header="Welcome" lead="ここはユーのポートフォリオサイトです。">
  </b-jumbotron>
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
  background: url("/static/img/home.jpg") center no-repeat;
  background-size: cover;
  background-color: rgba(255,255,255,0.1);
  background-blend-mode: lighten;
  font-family: Times, serif;
  color: gray;
  border-radius: 10px;
  /* background: #474848; */
  box-shadow:  8px 8px 16px #3c3d3d, 
              -8px -8px 16px #525353;
}
</style>