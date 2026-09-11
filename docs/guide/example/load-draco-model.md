# Loader draco model

:::tip
Need to download Draco repository storage with local static folder of your project, download url: [Draco decoder](https://github.com/king2088/vue-3d-loader/blob/master/public/assets/draco.7z) or download on [CDN](https://cdn.jsdelivr.net/npm/three@0.185.0/examples/jsm/libs/draco/)，Unzip it and place it in the `public/assets` directory of your local project. The draco default path is："assets/draco/gltf/"，if you want to change it, you can modify the `dracoDir` property. Example：if the `dracoDir` directory is `public/draco/gltf/` ，you can modify the `dracoDir` property to `public/draco/gltf/`, the last `/` is not required.
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
