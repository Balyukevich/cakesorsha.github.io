let dots = document.getElementsByClassName('dots_item'),
dotsArea = document.getElementsByClassName('dots_inner')[0],
  slides = document.getElementsByClassName('slides_items'),
     slideIndex=1;

showSlides(slIdeIndex);

function showSlides(n){
      if (n < 1){
          slideIndex=slides.length;
      } else if (n > slides.length){
          slideIndex=1;
      }
    for (let i = 0; i < slides.length; i++){
        slides[i].style.display='none';
    }
    for (let i = 0; i < dots.length; i++){
        dots[i].classList.remove('active');
 }
     slides[slideIndex - 1].style.display = 'block';
     dots[slideIndex - 1].classlist.add('active');
}

/*function plussSlide(n) {
      showslides(slideIndex +=)
}*/