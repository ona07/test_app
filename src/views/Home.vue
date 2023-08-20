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
}
</script>

<style>

</style>