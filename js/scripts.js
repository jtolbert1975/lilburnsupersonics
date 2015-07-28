/*jslint browser: true*/
/*global $, jQuery, alert*/
$(document).ready(function () {
    'use strict';
     
    
 $("#aboutNav").on("click", function(){
     //alert("Hello Big Balls");
     $("#home").css("display", "none");
     $("#about").css("display", "inline-flex");
     
    
  });
    
    $('.circular1').wrap('<a href="home.html"></a>');
    
       //var winwidth = $(window).width();
    //alert(winwidth);
    
   
});