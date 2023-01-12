"use strict"
//slider
$(document).ready(function(){
    $('.slider').slick({       
       
       
        
        slidesToShow: 3,
       
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3
              
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2
              
            }
          },
          {
            breakpoint: 487,
            settings: {
              slidesToShow: 1.3
              
            }
          }
      
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });
});


//animation
console.clear()

const container = document.querySelector('.brand-logos-block')

container.addEventListener('onload', () => {
  container.classList.remove('animate')
  setTimeout(() => {
    container.classList.add('animate')
  }, 500)
})