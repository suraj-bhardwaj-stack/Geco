
   $(document).ready(function(){
      $(".respo-menu").click(function(){
        $("header nav").toggleClass("show");
      })
   });

// Responsive Toggle End

// Slider top js Start
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";
}
// End slider js

// video plater js
  let videoPlayer = document.querySelector('.video-player');
  let video = videoPlayer.querySelector('.video');
  let playButton = videoPlayer.querySelector('.play-button');

  playButton.addEventListener('click', (e) => {
    if(video.paused){
        video.play()
          e.target.innerHTML = "<span>&#9654;</span>"
    }else{
      video.pause()
      e.target.innerHTML = "<span>&#8214;</span>";
    }
  });
// video plater js end
$(document).ready(function() {

  // declare variable
  var scrollTop = $(".scrollTop");

  $(window).scroll(function() {
    // declare variable
    var topPos = $(this).scrollTop();

    // if user scrolls down - show scroll to top button
    if (topPos > 100) {
      $(scrollTop).css("opacity", "1");

    } else {
      $(scrollTop).css("opacity", "0");
    }

  }); // scroll END

  //Click event to scroll to top
  $(scrollTop).click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;

  }); // click() scroll top EMD
});


$(document).ready(function() {
  $(window).scroll(function() {
    if ($(document).scrollTop() > 100) {
      $(".topnav").addClass("fix-nav");
    } else {
      $(".topnav").removeClass("fix-nav");
    }
  });
});

