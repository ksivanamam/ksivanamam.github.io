import{p as e,a as t,r as i,o as n,c as r,b as a,t as s,u as o,F as c,d as l,e as d,f as u}from"./vendor.3460b987.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const i of e)if("childList"===i.type)for(const e of i.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();e("data-v-c614c0ec");const p={class:"content"},m={class:"title"},h={class:"subTitle anim-typewriter"},b=["href","id"];t();const f={setup(e){const t=i({title:"Hi :)",subTitle:"Ich heisse Kabilan Sivanamam.",paragraphs:[{id:1,text:"Ich bin ein ausgebildeter Betriebsinformatiker und ein absoluter Informatik-Allrounder. Ich packe gerne an bei der Einrichtung von Netzwerken, arbeite aber auch gerne vor dem Laptop und schreibe Code."},{id:2,text:"Im Moment arbeite ich hauptsächlich an kleinen privaten Projekten wie die Entwicklung von Discord Bots und einer Sport-App."},{id:3,text:"In meiner Freizeit sitze ich aber nicht nur vor dem Laptop. Wenn ich gerade nicht in der Emme schwimme, gehe ich gerne klettern oder spiele Gitarre. 🎸"}],links:[{id:1,text:"LinkedIn",page:"https://www.linkedin.com/in/kabilan-sivanamam-3607b5172/",style:"linkedIn"},{id:2,text:"GitHub",page:"https://github.com/ksivanamam",style:"gitHub"}]});return(e,i)=>(n(),r("div",p,[a("div",null,[a("h1",m,s(o(t).title),1)]),a("div",null,[a("h2",h,s(o(t).subTitle),1)]),(n(!0),r(c,null,l(o(t).paragraphs,(e=>(n(),r("p",{key:e.id},s(e.text),1)))),128)),(n(!0),r(c,null,l(o(t).links,(e=>(n(),r("a",{key:e.id,href:e.page,target:"_blank",id:e.style},s(e.text),9,b)))),128))]))},__scopeId:"data-v-c614c0ec"};u({setup:e=>(e,t)=>(n(),d(f))}).mount("#app");
