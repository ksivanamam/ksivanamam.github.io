import{p as e,a as n,r as i,o as t,c as r,b as a,t as o,u as s,d as l,e as c}from"./vendor.9e6b6aa2.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver((e=>{for(const i of e)if("childList"===i.type)for(const e of i.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&n(e)})).observe(document,{childList:!0,subtree:!0})}function n(e){if(e.ep)return;e.ep=!0;const n=function(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?n.credentials="include":"anonymous"===e.crossorigin?n.credentials="omit":n.credentials="same-origin",n}(e);fetch(e.href,n)}}();e("data-v-d38f94a8");const d={class:"content"},u={class:"title"},p={class:"subTitle anim-typewriter"},m={href:"https://www.linkedin.com/in/kabilan-sivanamam-3607b5172/",target:"_blank"};n();const h={setup(e){const n=i({title:"Hallo :)",subTitle:"Ich heisse Kabilan Sivanamam.",p1:"Ich bin ein ausgebildeter Betriebsinformatiker und ein absoluter Informatik-Allrounder. Ich packe gerne an bei der Einrichtung von Netzwerken, arbeite aber auch gerne vor dem Laptop und schreibe Code.",p2:"Im Moment arbeite ich hauptsächlich an kleinen privaten Projekten wie die Entwicklung Discord Bots.",p3:"In meiner Freizeit sitze ich aber nicht nur vor dem Laptop. Wenn ich gerade nicht in der Emme schwimme, gehe ich gerne klettern oder spiele Gitarre.",p4:"LinkedIn"});return(e,i)=>(t(),r("div",d,[a("div",null,[a("h1",u,o(s(n).title),1)]),a("div",null,[a("h2",p,o(s(n).subTitle),1)]),a("p",null,o(s(n).p1),1),a("p",null,o(s(n).p2),1),a("p",null,o(s(n).p3),1),a("p",null,[a("a",m,o(s(n).p4),1)])]))},__scopeId:"data-v-d38f94a8"};c({setup:e=>(e,n)=>(t(),l(h))}).mount("#app");
