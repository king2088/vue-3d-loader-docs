# 背景颜色及透明度

<BackgroundColorAndAlpha/>

```vue
<template>
  <div class="content">
    <div class="text">This text is on the back of the model</div>
    <div class="model">
      <vue3dLoader
        filePath="/models/gltf/DamagedHelmet.gltf"
        :backgroundColor="'#00ffff'"
        :backgroundAlpha="0.5"
        :height="600"
        :width="600"
        outputEncoding="sRGB"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { vue3dLoader } from "vue-3d-loader";
</script>
<style>
.content {
  position: relative;
}
.text,
.model {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
.text {
  z-index: 0;
  font-size: 60px;
  width: 100%;
  text-align: center;
}
.model {
  z-index: 100;
}
</style>
```
