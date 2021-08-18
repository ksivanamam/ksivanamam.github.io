import{p as e,a as n,o as t,c as i,b as a,t as r,F as o,r as l,n as s,d as c,e as d}from"./vendor.c46d35c4.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&n(e)})).observe(document,{childList:!0,subtree:!0})}function n(e){if(e.ep)return;e.ep=!0;const n=function(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?n.credentials="include":"anonymous"===e.crossorigin?n.credentials="omit":n.credentials="same-origin",n}(e);fetch(e.href,n)}}();const g={data:()=>({german:!0,germanContent:{title:"Hi :)",subTitle:"Ich heisse Kabilan Sivanamam.",paragraphs:[{id:1,text:"Ich bin ein ausgebildeter Informatiker und ein IT-Allrounder. Ich packe gerne an beim Einrichten von Netzwerken, arbeite aber auch gerne vor dem Laptop und schreibe Code."},{id:2,text:"Im Moment arbeite ich hauptsächlich an kleinen privaten Projekten wie die Entwicklung von Discord-Bots und einer Sport-App."},{id:3,text:"In meiner Freizeit sitze ich aber nicht nur vor dem Laptop. Wenn ich gerade nicht in der Emme schwimme, gehe ich gerne klettern oder spiele Gitarre. 🎸"}],links:[{id:1,text:"LinkedIn",page:"https://www.linkedin.com/in/kabilan-sivanamam-3607b5172/",style:"linkedIn"},{id:2,text:"GitHub",page:"https://github.com/ksivanamam",style:"gitHub"}]},englishContent:{title:"Hi :)",subTitle:"My name is Kabilan Sivanamam.",paragraphs:[{id:1,text:"I studied computer science and I'm an IT allrounder. I like to get my hands dirty setting up labs but I also like to cozy up and write code on my computer."},{id:2,text:"Currently I'm working on small projects like a private and a public Discord bot and I'm also developing a workout app."},{id:3,text:"But I'm not always working on stuff. In my free time I like to swim, climb, and play the guitar. 🎸"}],links:[{id:1,text:"LinkedIn",page:"https://www.linkedin.com/in/kabilan-sivanamam-3607b5172/",style:"linkedIn"},{id:2,text:"GitHub",page:"https://github.com/ksivanamam",style:"gitHub"}]},tags:[{id:1,name:"#vue",color:"#fff",backgroundColor:"#42b883"},{id:2,name:"#node",color:"#fff",backgroundColor:"#6cc24a"},{id:3,name:"#ionic",color:"#fff",backgroundColor:"#00758f"},{id:4,name:"#mysql",color:"#fff",backgroundColor:"#FFCA28"},{id:5,name:"#firebase",color:"#fff",backgroundColor:"#FFA500"},{id:6,name:"#knex",color:"#fff",backgroundColor:"#FFA500"}]}),methods:{changeLanguage(){console.log(this.german),this.german=!this.german}}};e("data-v-c8115474");const u={class:"content"},m={key:0,class:"subTitle anim-typewriter"},k={key:1,class:"subTitle anim-typewriter"},p={key:0},h={key:1},y={key:2},b=["href","id"],f={key:3},v=["href","id"],C={class:"stack"},I={key:0},w=[a("p",null,"Mein Technology Stack:",-1)],x={key:1},L=[a("p",null,"My Technology stack:",-1)],T={key:2},F={key:3};n(),g.render=function(e,n,c,d,g,A){return t(),i("div",u,[a("div",null,[g.german?(t(),i("h1",{key:0,class:"title",onClick:n[0]||(n[0]=(...e)=>A.changeLanguage&&A.changeLanguage(...e))},r(g.germanContent.title),1)):(t(),i("h1",{key:1,class:"title",onClick:n[1]||(n[1]=(...e)=>A.changeLanguage&&A.changeLanguage(...e))},r(g.englishContent.title),1))]),a("div",null,[g.german?(t(),i("h2",m,r(g.germanContent.subTitle),1)):(t(),i("h2",k,r(g.englishContent.subTitle),1))]),g.german?(t(),i("div",p,[(t(!0),i(o,null,l(g.germanContent.paragraphs,(e=>(t(),i("p",{key:e.id},r(e.text),1)))),128))])):(t(),i("div",h,[(t(!0),i(o,null,l(g.englishContent.paragraphs,(e=>(t(),i("p",{key:e.id},r(e.text),1)))),128))])),g.german?(t(),i("div",y,[(t(!0),i(o,null,l(g.germanContent.links,(e=>(t(),i("a",{key:e.id,href:e.page,target:"_blank",id:e.style},r(e.text),9,b)))),128))])):(t(),i("div",f,[(t(!0),i(o,null,l(g.englishContent.links,(e=>(t(),i("a",{key:e.id,href:e.page,target:"_blank",id:e.style},r(e.text),9,v)))),128))])),a("div",C,[g.german?(t(),i("div",I,w)):(t(),i("div",x,L)),g.german?(t(),i("div",T,[(t(!0),i(o,null,l(g.tags,(n=>(t(),i("div",{key:n-e.id,class:"tag",style:s({color:n.color,backgroundColor:n.backgroundColor})},r(n.name),5)))),128))])):(t(),i("div",F,[(t(!0),i(o,null,l(g.tags,(n=>(t(),i("div",{key:n-e.id,class:"tag",style:s({color:n.color,backgroundColor:n.backgroundColor})},r(n.name),5)))),128))]))])])},g.__scopeId="data-v-c8115474";d({setup:e=>(e,n)=>(t(),c(g))}).mount("#app");
