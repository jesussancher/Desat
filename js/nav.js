$(document).ready(function(){
  $(".bars").on("click",function(){

    if ($(navbox).height() == 0) {
      
      $(burger).animate({
        opacity: '0%'
    },"slow");

      $(navbox).animate({
          height: '380px',
          width: '60%',
          opacity: '100%'
      },"1s");

      $(navigation).animate({
        height: '210px',
        opacity: '100%'
      },"slow");

      $(certi).animate({
        opacity: '100%'
      }, "slow");

    } else {

      $(navigation).animate({
          height: '0px',
          opacity: '0%'
      },"slow");
      
      $(navbox).animate({
        height: '0px',
        width: '0%',
        opacity: '0%'
      },"slow");

      $(certi).animate({
        opacity: '0%'
      }, "slow");

      $(burger).animate({
        opacity: '100%'
      },"slow");
    
    }

  });

});

$(document).ready(function(){
$("header nav ul li a").on("click",function(){

  if ($(navbox).height() > 0) {
    
    $(navigation).animate({
        height: '0px'
    },"slow");

    $(navbox).animate({
      height: '0px',
      width: '0%'
    },"slow");

    $(burger).animate({
      opacity: '100%'
     },"slow");

  } 

});
});

window.onscroll = function() {naviOpacity()};

function naviOpacity() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").classList.add("top-nav-opacity");
  } else {
    document.getElementById("navbar").classList.remove("top-nav-opacity");
  }
}