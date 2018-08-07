function openNav() {
  document.getElementById('nav').style.width = "100%";
  
}

function closeNav() {
  document.getElementById('nav').style.width = "0%";
};


$(document).ready(function() {
 /* $ ('#btn1').on('mouseover', function() {
        $('#panel1').toggle(1000); 
   });  
 $ ('#btn1').on('mouseleave', function() {
        $('#panel1').toggle(500); 
   });  

 $ ('#btn2').on('mouseover', function() {
        $('#panel2').toggle(1000); 
   });  
 $ ('#btn2').on('mouseleave', function() {
        $('#panel2').toggle(500); 
   });  

 $ ('#btn3').on('mouseover', function() {
        $('#panel3').toggle(1000); 
   });  
 $ ('#btn3').on('mouseleave', function() {
        $('#panel3').toggle(500); 
   });  

  $ ('#btn4').on('mouseover', function() {
        $('#panel4').toggle(1000); 
   });  
 $ ('#btn4').on('mouseleave', function() {
        $('#panel4').toggle(500); 
   });  

 $ ('#btn5').on('mouseover', function() {
        $('#panel5').toggle(1000); 
   });  
 $ ('#btn5').on('mouseleave', function() {
        $('#panel5').toggle(500); 
   });  

 $ ('#btn6').on('mouseover', function() {
        $('#panel6').toggle(1000); 
   });  
 $ ('#btn6').on('mouseleave', function() {
        $('#panel6').toggle(500); 
   });  
   Dont Repeat Yourself  Easy way */

$ ('.panel-button').on('mouseover', function() {
    var panelId = $(this).attr('data-panelid');
    $('#'+panelId).toggle(1000);
   });  

 $ ('.panel-button').on('mouseleave', function() {
  var panelId = $(this).attr('data-panelid');
      $('#'+panelId).toggle(500); 
   });  

  
 }); 
