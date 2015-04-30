/*jshint esnext:true */

import appControllers from './js/app_controller.js';

module.exports = angular.module('app', [
  'ngMaterial',
  'app.controllers'
]);  
// default params
function printMessage (status='working') {  
// let
  let message = 'ES6';                    
// template string           
  console.log(`${message} is ${status}`);    
}
printMessage();  
