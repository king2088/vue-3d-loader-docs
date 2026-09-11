# 加载Draco压缩模型

:::tip
使用此功能需要下载[draco解码器](https://github.com/king2088/vue-3d-loader/blob/master/public/assets/draco.7z)或者到[CDN](https://cdn.jsdelivr.net/npm/three@0.185.0/examples/jsm/libs/draco/)下载，并解压放到本地项目public/assets目录中，draco默认路径应：“assets/draco/gltf/”，若你把draco直接放到public中，即public/draco，那可以直接使用public/draco/gltf/即可，目录最后的“/”可有可无
:::
<LoaderDracoModel/>

```vue
<template>
  <vue3dLoader
    filePath="/models/gltf/LittlestTokyo.glb"
    :cameraPosition="{ x: 10, y: 700, z: 1000 }"
    :enableDraco="true"
    outputEncoding="sRGB"
    :height="350"
    backgroundColor="#F2F2F2"
    dracoDir="../../assets/draco/gltf/"
  />
</template>
<script lang="ts" setup>
import { vue3dLoader } from "vue-3d-loader";
</script>
```
