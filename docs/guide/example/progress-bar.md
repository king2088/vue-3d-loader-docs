# Loading progress

<ProgressBar/>

:::tip
Using this feature, in version 1.2. x (Vue2) of the dev (development) environment, it may not be possible to obtain the correct progress of file loading. To obtain the correct progress of file loading, it may be necessary to package it and deploy it to the corresponding HTTP server before it can be obtained normally. The main reason is that the local HTTP service launched by the local webpack cannot return the correct Content-Length properly during response.
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
