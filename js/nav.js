$(document).ready(function(){
  $(".bars").on("click",function(){

    if ($(navigation).height() == 0) {
      $(navigation).animate({
          height: '180px'
      },"slow");
    } else {
      $(navigation).animate({
          height: '0px'
      },"slow");
    }

  });
});