!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/js/",n(n.s=297)}({297:function(e,t){!function(){"use strict";function e(){var e=new XMLHttpRequest;e.addEventListener("load",t),e.addEventListener("error",n),e.open("REPORT","http://127.0.0.1:8080/remote.php/dav/calendars/Serioga/cal-m/"),e.setRequestHeader("Depth","1"),e.setRequestHeader("Content-Type","text/xml; charset=utf-8"),e.send('<?xml version="1.0" encoding="utf-8" ?><C:calendar-query xmlns:D="DAV:" xmlns:C="urn:ietf:params:xml:ns:caldav"><D:prop><C:calendar-data/></D:prop><C:filter><C:comp-filter name="VCALENDAR"><C:comp-filter name="VEVENT"><C:time-range start="20200308T050000Z" end="20200315T040000Z"/></C:comp-filter></C:comp-filter></C:filter></C:calendar-query>')}function t(){console.log(this)}function n(e){console.log(e)}window.addEventListener("DOMContentLoaded",(function(){document.getElementById("f2_btn").addEventListener("click",e)}))}()}});