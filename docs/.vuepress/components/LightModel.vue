<template>
  <vue3dLoader
    filePath="/vue-3d-loader-docs/models/collada/elf/elf.dae"
    :lights="lights"
    :cameraPosition="{ x: 0, y: 10, z: 10 }"
    :height="350"
    backgroundColor="#F2F2F2"
  />
</template>
<script setup lang="ts">
import { ref } from "vue";
import { vue3dLoader } from "vue-3d-loader";
const lights = ref();
lights.value = [
  {
    type: "AmbientLight",
    color: "red",
  },
  {
    type: "DirectionalLight",
    position: { x: 100, y: 10, z: 100 },
    color: "green",
    intensity: 0.8,
  },
  {
    type: "PointLight",
    color: "#000000",
    position: { x: 200, y: -200, z: 100 },
    intensity: 1,
  },
  {
    type: "HemisphereLight",
    skyColor: "#00FF00",
    groundColor: "#000000",
    position: { x: 200, y: -200, z: 100 },
  },
];
</script>