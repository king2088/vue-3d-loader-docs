import{v as n}from"./vue-3d-loader.esm.d85925bb.js";import{f as r,I as l,o as s,q as d,h as u,_ as f}from"../app.55b22865.mjs";const i=r({__name:"RotateModel",setup(c){const o=l();o.value={x:-Math.PI/2,y:0,z:0};function a(){e()}function e(){requestAnimationFrame(e),o.value.z-=.01}return(_,t)=>(s(),d(u(n),{rotation:o.value,onLoad:t[0]||(t[0]=m=>a()),filePath:"/vue-3d-loader-docs/models/collada/elf/elf.dae",height:350,backgroundColor:"#F2F2F2"},null,8,["rotation"]))}}),h=f(i,[["__file","RotateModel.vue"]]);export{h as default};