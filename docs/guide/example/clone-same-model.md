# Clone same model

<CloneSameModel/>

```vue
<template>
    <vue3dLoader 
        :filePath="filePath" 
        backgroundColor="#cccccc" 
        :cameraPosition="{x:0, y:0, z:0}" 
        ref="vue3dLoaderRef"
        @load="cloneObj" 
        outputEncoding="sRGB" 
        :scale="{ x: 1, y: 1, z: 1 }" 
        :enableAxesHelper="true"
        :axesHelperSize="20" 
        :enableGridHelper="true" 
    />
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
const filePath = '/models/gltf/DamagedHelmet.gltf'
const vue3dLoaderRef = ref();

const cloneObj = () => {
    const { children } = vue3dLoaderRef.value.scene
    if (children) {
        const fileName = filePath.split('/').pop()
        children.forEach((item: any) => {
            // same fileName obj
            if (item.fileName === fileName) {
                const cloneItem = item.clone()
                // Set new obj fileName
                cloneItem.fileName = 'clone_' + fileName
                // Set new obj position
                cloneItem.position.set(5, 0, 0)
                // add new obj to scene
                vue3dLoaderRef.value.scene.add(cloneItem)
            }
        })
    }
}
</script>
```