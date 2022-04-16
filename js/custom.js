
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


