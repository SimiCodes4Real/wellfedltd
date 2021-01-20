function showMenu() {
  let x = document.getElementById("menuTopNav");
  if (x.className === "top-nav") {
    x.className += " responsive";
  } else {
    x.className = "top-nav";
  }
}


$(document).ready(function(){
  // setting slider starting point
  let slider = 1;

  // iterate all the slider images
  let _images = document.getElementsByClassName('slides');
  let images = $('#slider .slides').length - 0;
  const dots = document.getElementsByClassName('dot');

  // switch slides every 5 secs
  setInterval(() => {
      //get active slider position
      slider = slider < images ? slider + 1 : 1;
      
      // instantly hide all slides
      $('#slider .slides').css('opacity', .0);

      // showing the current index
      $('#slider .slides').eq(slider - 1).css('opacity', 1);
  }, 5000)
  

  const $msg = $("#blink");

  $msg.css({opacity:1});
  let visible = true;

  setInterval(() => {
    if(visible){
        $msg.css({opacity:0});
    }else{
        $msg.css({opacity:1});
    }
    visible = !visible;
  }, 2000);

})

