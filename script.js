$(document).ready(function(){
    $("button").click(function(){
      $("#home").fadeToggle();
      $("#minbox").fadeToggle("slow");
      $("#maxbox").fadeToggle(3000);
    });
  });