import{v as d}from"./vue-3d-loader.esm.9d341351.js";import{f,I as t,o as i,q as u,h as m,_ as p}from"../app.e49454f6.mjs";const _=f({__name:"CloneSameModel",setup(v){const l=t(),c="/vue-3d-loader-docs/models/gltf/DamagedHelmet.gltf",e=t();l.value={x:0,y:0,z:0};const r=()=>{const{children:o}=e.value.scene;if(o){const a=c.split("/").pop();o.forEach(s=>{if(s.fileName===a){const n=s.clone();n.fileName="clone_"+a,n.position.set(5,0,0),e.value.scene.add(n)}})}};return(o,a)=>(i(),u(m(d),{filePath:c,backgroundColor:"#cccccc",cameraPosition:l.value,ref_key:"vue3dLoaderRef",ref:e,onLoad:r,outputEncoding:"sRGB",scale:{x:1,y:1,z:1},enableAxesHelper:!0,axesHelperSize:20,enableGridHelper:!0,height:350},null,8,["cameraPosition"]))}}),g=p(_,[["__file","CloneSameModel.vue"]]);export{g as default};