<template>
    <div refs="canvas" class="home">
    </div>
</template>

<script>
import p5 from 'p5';

export default {
  name: 'MyProfile',
  mounted() {
    this.sketch = new p5(this.createSketch, this.$refs.canvas);
  },
  beforeUnmount() {
    this.sketch.remove();
  },
  methods: {
    createSketch(p){

      p.setup = () => {
        p.createCanvas(window.innerWidth, window.innerHeight, p.WEBGL);
      }

      p.draw = () => {
        p.background(20);
      }
    }
  }
}
</script>

<style>

</style>