import{v as r}from"./vue-3d-loader.esm.9060cd49.js";import{f as p,I as n,o as x,c as v,a as s,b as i,d as y,h as f,F as _,_ as h}from"../app.b47225a2.mjs";const m={class:"check-box"},k=p({__name:"LoadMultipleModels",setup(z){const u=n();u.value=["/vue-3d-loader-docs/models/fbx/Samba Dancing.fbx","/vue-3d-loader-docs/models/collada/pump/pump.dae"];const a=n();a.value=[{x:0,y:0,z:0},{x:100,y:100,z:100}];const t=n();t.value=[{x:0,y:0,z:0},{x:10,y:1,z:1}];const l=n();l.value=[{x:.4,y:.4,z:.4},{x:.8,y:.8,z:.8}];function c(d,o){const e=d.target.checked;switch(o){case"position":e?a.value=[{x:0,y:0,z:0},{x:100,y:100,z:100}]:a.value=[];break;case"rotation":e?t.value=[{x:0,y:0,z:0},{x:10,y:1,z:1}]:t.value=[];break;case"scale":e?l.value=[{x:.4,y:.4,z:.4},{x:.8,y:.8,z:.8}]:l.value=[];break}}return(d,o)=>(x(),v(_,null,[s("div",m,[s("input",{type:"checkbox",onChange:o[0]||(o[0]=e=>c(e,"position")),checked:""},null,32),i(" Set position "),s("input",{type:"checkbox",onChange:o[1]||(o[1]=e=>c(e,"rotation")),checked:""},null,32),i(" Set rotation "),s("input",{type:"checkbox",onChange:o[2]||(o[2]=e=>c(e,"scale")),checked:""},null,32),i(" Set scale ")]),y(f(r),{filePath:u.value,position:a.value,rotation:t.value,scale:l.value,cameraPosition:{x:-0,y:0,z:-500},height:350,backgroundColor:"#F2F2F2"},null,8,["filePath","position","rotation","scale"])],64))}});const M=h(k,[["__file","LoadMultipleModels.vue"]]);export{M as default};