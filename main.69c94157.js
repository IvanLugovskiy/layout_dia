parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=document.getElementById("header-small"),s=document.getElementById("header-big"),t=document.getElementById("hiddenmenu"),l=document.getElementById("footer"),c=document.querySelectorAll(".form__field"),o=document.querySelectorAll(".button"),a=document.querySelectorAll(".icon"),_=document.querySelectorAll(".contacts__social__img"),n=document.getElementById("backNumBlue"),i=document.getElementById("backNumBlueSmall"),d=document.getElementById("countBlue"),r=document.getElementById("countBlueSmall"),m=document.getElementById("roundBlue"),u=document.getElementById("roundBlueSmall"),b=document.getElementById("backNumYellow"),k=document.getElementById("backNumYellowSmall"),v=document.getElementById("countYellow"),L=document.getElementById("countYellowSmall"),g=document.getElementById("roundYellow"),y=document.getElementById("roundYellowSmall"),f=document.getElementById("backNumGreen"),E=document.getElementById("backNumGreenSmall"),h=document.getElementById("countGreen"),B=document.getElementById("countGreenSmall"),I=document.getElementById("roundGreen"),w=document.getElementById("roundGreenSmall"),S=document.getElementById("backNumRed"),q=document.getElementById("backNumRedSmall"),N=document.getElementById("countRed"),R=document.getElementById("countRedSmall"),Y=document.getElementById("roundRed"),G=document.getElementById("roundRedSmall"),A=document.getElementById("testimonialsBlue"),M=document.getElementById("MarksBlue"),p=document.getElementById("testimonialsYellow"),j=document.getElementById("MarksYellow"),x=document.getElementById("testimonialsRed"),z=document.getElementById("MarksRed"),C=document.getElementById("visionBack"),D=document.querySelectorAll(".slider");document.querySelector(".themes-changer--def-small").addEventListener("click",function(){t.classList.remove("hiddenmenu--blueskin"),l.classList.remove("footer__background--blueskin"),c.forEach(function(e){e.classList.remove("form__field--blueskin")}),_.forEach(function(e){e.classList.remove("contacts__social__img--blueskin")}),e.classList.remove("header-blue"),a.forEach(function(e){e.classList.remove("icon--linkred")}),o.forEach(function(e){e.classList.remove("button__red")}),A.classList.remove("testimonials__block__container--blue"),M.classList.remove("testimonials__block__marks--blue"),p.classList.remove("testimonials__block__container--yellow"),j.classList.remove("testimonials__block__marks--yellow"),x.classList.remove("testimonials__block__container--red"),z.classList.remove("testimonials__block__marks--red"),i.classList.remove("creative__block__num--blue"),r.classList.remove("creative__block__count--blue"),u.classList.remove("creative__block__round--blue"),k.classList.remove("creative__block__num--yellow"),L.classList.remove("creative__block__count--yellow"),y.classList.remove("creative__block__round--yellow"),E.classList.remove("creative__block__num--green"),B.classList.remove("creative__block__count--green"),w.classList.remove("creative__block__round--green"),q.classList.remove("creative__block__num--red"),R.classList.remove("creative__block__count--red"),G.classList.remove("creative__block__round--red")}),document.querySelector(".themes-changer--blue-small").addEventListener("click",function(){t.classList.add("hiddenmenu--blueskin"),l.classList.add("footer__background--blueskin"),c.forEach(function(e){e.classList.add("form__field--blueskin")}),_.forEach(function(e){e.classList.add("contacts__social__img--blueskin")}),e.classList.add("header-blue"),a.forEach(function(e){e.classList.add("icon--linkred")}),o.forEach(function(e){e.classList.add("button__red")}),A.classList.add("testimonials__block__container--blue"),M.classList.add("testimonials__block__marks--blue"),p.classList.add("testimonials__block__container--yellow"),j.classList.add("testimonials__block__marks--yellow"),x.classList.add("testimonials__block__container--red"),z.classList.add("testimonials__block__marks--red"),C.classList.add("vision__background--blueskin"),i.classList.add("creative__block__num--blue"),r.classList.add("creative__block__count--blue"),u.classList.add("creative__block__round--blue"),k.classList.add("creative__block__num--yellow"),L.classList.add("creative__block__count--yellow"),y.classList.add("creative__block__round--yellow"),E.classList.add("creative__block__num--green"),B.classList.add("creative__block__count--green"),w.classList.add("creative__block__round--green"),q.classList.add("creative__block__num--red"),R.classList.add("creative__block__count--red"),G.classList.add("creative__block__round--red")}),document.querySelector(".themes-changer--def").addEventListener("click",function(){s.classList.remove("header-blue"),l.classList.remove("footer__background--blueskin"),c.forEach(function(e){e.classList.remove("form__field--blueskin")}),o.forEach(function(e){e.classList.remove("button__red")}),a.forEach(function(e){e.classList.remove("icon--linkred")}),_.forEach(function(e){e.classList.remove("contacts__social__img--blueskin")}),D.forEach(function(e){e.classList.remove("slider--blue")}),n.classList.remove("creative__block__num--blue"),d.classList.remove("creative__block__count--blue"),m.classList.remove("creative__block__round--blue"),b.classList.remove("creative__block__num--yellow"),v.classList.remove("creative__block__count--yellow"),g.classList.remove("creative__block__round--yellow"),f.classList.remove("creative__block__num--green"),h.classList.remove("creative__block__count--green"),I.classList.remove("creative__block__round--green"),S.classList.remove("creative__block__num--red"),N.classList.remove("creative__block__count--red"),Y.classList.remove("creative__block__round--red"),A.classList.remove("testimonials__block__container--blue"),M.classList.remove("testimonials__block__marks--blue"),p.classList.remove("testimonials__block__container--yellow"),j.classList.remove("testimonials__block__marks--yellow"),x.classList.remove("testimonials__block__container--red"),z.classList.remove("testimonials__block__marks--red"),C.classList.remove("vision__background--blueskin"),C.classList.remove("vision__background--blueskin")}),document.querySelector(".themes-changer--blue").addEventListener("click",function(){s.classList.add("header-blue"),l.classList.add("footer__background--blueskin"),c.forEach(function(e){e.classList.add("form__field--blueskin")}),o.forEach(function(e){e.classList.add("button__red")}),a.forEach(function(e){e.classList.add("icon--linkred")}),a.forEach(function(e){e.classList.add("icon--linkred")}),_.forEach(function(e){e.classList.add("contacts__social__img--blueskin")}),D.forEach(function(e){e.classList.add("slider--blue")}),n.classList.add("creative__block__num--blue"),d.classList.add("creative__block__count--blue"),m.classList.add("creative__block__round--blue"),b.classList.add("creative__block__num--yellow"),v.classList.add("creative__block__count--yellow"),g.classList.add("creative__block__round--yellow"),f.classList.add("creative__block__num--green"),h.classList.add("creative__block__count--green"),I.classList.add("creative__block__round--green"),S.classList.add("creative__block__num--red"),N.classList.add("creative__block__count--red"),Y.classList.add("creative__block__round--red"),A.classList.add("testimonials__block__container--blue"),M.classList.add("testimonials__block__marks--blue"),p.classList.add("testimonials__block__container--yellow"),j.classList.add("testimonials__block__marks--yellow"),x.classList.add("testimonials__block__container--red"),z.classList.add("testimonials__block__marks--red"),C.classList.add("vision__background--blueskin")}),window.addEventListener("hashchange",function(){"#hiddenmenu"===window.location.hash?document.body.classList.add("page__body--with-hiddenmenu"):document.body.classList.remove("page__body--with-hiddenmenu")});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.69c94157.js.map