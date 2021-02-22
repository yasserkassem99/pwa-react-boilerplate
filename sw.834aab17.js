webpackJsonp([4],{300:/*!****************************!*\
  !*** ./src/sw-register.js ***!
  \****************************/
function(e,o,i){"use strict";"serviceWorker"in navigator&&navigator.serviceWorker.register("./sw.js",{scope:"/"}).then(function(e){console.log("Registration succeeded. Scope is "+e.scope)}).catch(function(e){console.log("Registration failed with "+e)})}},[300]);