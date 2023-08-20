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
  createSketch(p) {
    let vertices;

    p.setup = () => {
      p.createCanvas(window.innerWidth, window.innerHeight, p.WEBGL);
      p.noStroke();

      // 顔の頂点座標を設定
      vertices = [];
      vertices[0] = p.createVector(0, -100, 0); // 顔の中心
      vertices[1] = p.createVector(-50, 50, 50); // 鼻先
      vertices[2] = p.createVector(50, 50, 50);  // 鼻先
      vertices[3] = p.createVector(-50, -50, -50); // 顎
      vertices[4] = p.createVector(50, -50, -50);  // 顎
    };

    p.draw = () => {
      p.background(20);
      p.lights();

      const rotation = p.map(p.mouseX, 0, p.width, -p.PI, p.PI);
      p.rotateY(rotation); // マウスのX座標に応じて回転

      // マウスの座標に応じて頂点位置を更新
      vertices[0] = p.createVector(p.mouseX-window.innerWidth/2, 0, 0);
      vertices[1] = p.createVector(0, p.mouseY-window.innerHeight/2, 0);
      vertices[3] = p.createVector(0, p.mouseY-window.innerHeight/2, 0);

      p.beginShape(p.TRIANGLE_STRIP); // 三角形ストリップを開始

      // 頂点座標を指定して顔の形状を描画
      for (let i = 0; i < vertices.length; i++) {
        const v = vertices[i];
        p.vertex(v.x, v.y, v.z);
      }

      p.endShape();
    };
  },
},
};
</script>

<style>

</style>