# 加载进度

<ProgressBar/>

:::tip
使用此功能，在dev（开发）环境下1.2.x版本（vue2），可能会无法正确的获取到文件加载的进度，想要正确获取文件加载的进度，可能需要打包后，将其部署到对应的http服务器中后，才可以正常获取到加载进度。主要原因是由于本地webpack启动的本地http服务在response的时候，无法正常返回正确的Content-Length导致的。
:::

```vue
<template>
  <div class="content">
    <vue3dLoader
      :filePath="filePath"
      :scale="{ x: 0.4, y: 0.4, z: 0.4 }"
      :cameraPosition="{ x: 100, y: 200, z: 30 }"
      @process="onProcess"
      :height="350"
      backgroundColor="#F2F2F2"
    />
    <div class="process">
      current model: {{ currentModelIndex }}, loadding: {{ process + "%" }}
    </div>
  </div>
</template>
<script setup lang="ts">
import { vue3dLoader } from "vue-3d-loader";
import { ref } from "vue";
const filePath = ref();
filePath.value = ["/models/obj/male02.obj", "/models/fbx/Samba Dancing.fbx"];
const currentModelIndex = ref();
const process = ref(0);
function onProcess(event: any, index: number) {
  process.value = Math.floor((event.loaded / event.total) * 100);
  if (index != 0) {
    currentModelIndex.value = index;
  }
}
</script>
<style>
.content {
  height: 100%;
}
.process {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 3px 8px;
  background-color: aquamarine;
  color: red;
}
</style>
```
