<template>
    <div refs="canvas" class="home">
    </div>
</template>

<script>
import p5 from 'p5';
const fontPath = require("@/assets/nameFont.ttf");

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
      let customFont; 

      p.preload = () => {
        customFont = p.loadFont(fontPath);
      };

      p.setup = () => {
        p.createCanvas(window.innerWidth, window.innerHeight, p.WEBGL);
        p.textFont(customFont);
      }

      p.draw = () => {
        p.background(20);

        p.fill(255); 
        p.textSize(30); 
        p.textAlign(p.CENTER, p.CENTER); 
        p.text("Nao Kokubo", 0, 0); 
      }
    }
  }
}
</script>

<style>

</style>