import{v as t}from"./vue-3d-loader.esm.1f9b77ea.js";import{f as r,I as a,o as d,q as n,h as c,_ as u}from"../app.3290af2c.mjs";const i=r({__name:"ParallelLoadModels",setup(p){const e=a();e.value=["/vue-3d-loader-docs/models/fbx/Samba Dancing.fbx","/vue-3d-loader-docs/models/collada/pump/pump.dae","/vue-3d-loader-docs/models/ply/Lucy100k.ply"];const o=a();o.value=[{x:100,y:100,z:100},{x:300,y:300,z:300}];const l=a();l.value=[{x:0,y:0,z:0},{x:10,y:1,z:1}];const s=a();return s.value=[{x:5,y:5,z:5},{x:3,y:3,z:3}],(f,m)=>(d(),n(c(t),{filePath:e.value,scale:s.value,position:o.value,rotation:l.value,cameraPosition:{x:100,y:200,z:3e3},parallelLoad:!0,height:350,backgroundColor:"#F2F2F2"},null,8,["filePath","scale","position","rotation"]))}}),x=u(i,[["__file","ParallelLoadModels.vue"]]);export{x as default};
