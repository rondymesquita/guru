import{d as v,o as u,c as d,a,n as f,t as m,r as g,b as _,w as y,u as k,e as b,f as A,g as P,h as w}from"./vendor.5e0910b0.js";const B=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}};B();var C="/guru/assets/chicken-white.e3f4cdc7.png";const O="0.0.1";const D={class:"ui-nav-button-shadow"},L={class:"ui-nav-button-border"},x=v({props:{label:null,isActive:{type:Boolean}},setup(s){return(o,l)=>(u(),d("div",D,[a("div",L,[a("div",{class:f(["ui-nav-button",{"ui-nav-button--active":s.isActive}])},[a("span",null,m(s.label),1)],2)])]))}});const N=v({setup(s){return(o,l)=>{const n=g("router-link");return u(),d("nav",null,[_(n,{to:"/"},{default:y(({href:e,route:t,navigate:i,isActive:h,isExactActive:p})=>[_(x,{label:"Planning Poker","is-active":p},null,8,["is-active"])]),_:1}),_(n,{to:"/luck-day"},{default:y(({href:e,route:t,navigate:i,isActive:h,isExactActive:p})=>[_(x,{label:"Sorte do Dia!","is-active":p},null,8,["is-active"])]),_:1})])}}});const S=a("h1",null,"Chicken Guru",-1),z={class:"pb-4"},F=a("img",{class:"",src:C},null,-1),I=v({setup(s){return(o,l)=>(u(),d("header",null,[S,a("span",z,"Vers\xE3o: "+m(k(O)),1),F,_(N)]))}});const M={class:"main"},j={class:"page"},H=v({setup(s){return(o,l)=>{const n=g("router-view");return u(),d("main",M,[_(I),a("section",j,[_(n)])])}}});const V={class:"ui-button-shadow"},G={class:"ui-button-border"},q=["disabled"],R={key:0},T={key:1},U=v({props:{label:null,disabledLabel:null,isDisabled:{type:Boolean}},setup(s){return(o,l)=>(u(),d("div",V,[a("div",G,[a("button",{class:f(["ui-button",{"ui-button--disabled":s.isDisabled}]),disabled:s.isDisabled},[s.isDisabled?(u(),d("span",R,m(s.disabledLabel),1)):(u(),d("span",T,m(s.label),1))],10,q)])]))}});const J={class:"page-home"},K=a("h3",null,"Deixe-me ajud\xE1-lo com suas estimativas!",-1),W={class:"estimative-phrase"},Q=v({setup(s){const o=[1,2,3,5,8,13,21],l={1:["Bastante simples, pra quem vem pedir minha ajuda.","Voc\xEA est\xE1 de brincadeira comigo, s\xF3 pode."],2:["Eu nem criaria um card pra essa","Eu priorizaria essa pra ontem."],3:["Essa \xE9 muito f\xE1cil. J\xE1 deveria ter feito."],5:["Se juntar 2 devs, voc\xEAs conseguem fazer logo depois da Planning."],8:["Esse, d\xE1 pra fazer no intervalo do almo\xE7o."],13:["Treze \xE9 meu n\xFAmero da sorte (Ou do azar)","Fonte: Confia!"],21:["O cliente vai adorar essa estimativa","O PO vai amar essa estimativa."]},n=b("0"),e=b(""),t=b(!1);function i(){const r=Math.floor(Math.random()*o.length),c=o[r];return c.toString()===n.value?i():c}function h(r){const c=l[r],$=Math.floor(Math.random()*c.length);return c[$]}function p(){return new Promise(r=>{const c=setInterval(()=>{n.value=i().toString()},100);setTimeout(()=>{clearInterval(c),r({})},2e3)})}async function E(){t.value=!0,e.value="",await p();const r=i();n.value=r.toString(),e.value=`"${h(r)}"`,t.value=!1}return(r,c)=>(u(),d("div",J,[K,a("div",{class:f(["estimative font-fancy",{"estimative--disabled":t.value}])},[a("span",null,m(n.value),1)],2),a("p",W,m(e.value),1),_(U,{label:"Adivinhar","disabled-label":"Adivinhando...","is-disabled":t.value,onClick:E},null,8,["is-disabled"])]))}}),X={},Y=A({history:P(),routes:[{path:"/",component:Q},{path:"/luck-day",component:X}]});w(H).use(Y).mount("#app");