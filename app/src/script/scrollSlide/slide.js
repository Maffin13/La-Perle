//  const slide = () => {
 
//  }
// const sliderDots = document.getElementsByClassName('.slider-dots_item');

// sliderDots.forEach(dots => {
//     dots.addEventListener('click', function (n) {
//         showSlides(slideIndex = n)
//     })
// })

//   /* Индекс слайда по умолчанию */
//     let slideIndex = 1;
//     showSlides(slideIndex);
    
    
    
//     /* Устанавливает текущий слайд */
//     function currentSlide(n) {
//         showSlides(slideIndex = n);
//     }
    
//     /* Основная функция слайдера */
//     function showSlides(n) {
//         let i;
//         let slides = document.getElementsByClassName("item");
//         let dots = document.getElementsByClassName("slider-dots_item");
//         if (n > slides.length) {
//           slideIndex = 1
//         }
//         if (n < 1) {
//             slideIndex = slides.length
//         }
//         for (i = 0; i < slides.length; i++) {
//             slides[i].style.display = "none";
//         }
//         for (i = 0; i < dots.length; i++) {
//             dots[i].className = dots[i].className.replace(" active", "");
//         }
//         slides[slideIndex - 1].style.display = "block";
//         dots[slideIndex - 1].className += " active";
//     }
