(()=>{var e={254:()=>{ymaps.ready((function(){var e=new ymaps.Map("map",{center:[59.93,30.31],zoom:12,controls:[]}),t=new ymaps.control.SearchControl({options:{noPlacemark:!0}}),o=new ymaps.GeoObjectCollection(null,{hintContentLayout:ymaps.templateLayoutFactory.createClass("$[properties.name]")});e.controls.add(t),e.geoObjects.add(o),o.events.add("click",(function(e){e.get("target").options.set("preset","islands#redIcon")})),t.events.add("resultselect",(function(e){var r=e.get("index");t.getResult(r).then((function(e){o.add(e)}))})).add("submit",(function(){o.removeAll()}))}))}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,o),a.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";o(254);const e=document.querySelector(".header__burger"),t=document.querySelector(".header__burger-line"),r=document.querySelector(".header__navigation");e.addEventListener("click",(function(){t.classList.toggle("header__burger-line--open"),r.classList.toggle("header__navigation--open")}))})()})();
//# sourceMappingURL=scripts.448b158fb374a0018977.js.map