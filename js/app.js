"use strict"


function slider(element, options) {
    if(typeof options === "undefined") {
        options = {};
    }
    
    new Swiper(element, {
        slidesPerWiew : options.slidesPerWiew ? options.slidesPerWiew : 'auto',
        spaceBetween: options.spaceBetween ? options.spaceBetween : 30,
        centeredSlides: options.centeredSlides ? options.centeredSlides : true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: 'swiper-button-prev',
        },
        breakpoints: {
            
            1024: {
                slidesPerWiew: 1,
                spaceBetween: 0,
            }
        }
    })
}

window.addEventListener('load', function() {
    slider(".swiper-container")
});