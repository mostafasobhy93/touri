$(document).ready(function () {
    'use strict';

// main slider
    var swiper = new Swiper('.main-section .main-slider .swiper-container', {
        spaceBetween: 30,
        effect: 'fade',
        loop: 'true',
        pagination: {
        clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
      autoplay: {
        delay: 3000,
      },
    });
    
// tours slider
    $('.tours-section1 .tours-slides1').slick({
        slidesToShow: 4,
        nextArrow: '.tours-section1 .slider-arrows .next1',
        prevArrow: '.tours-section1 .slider-arrows .prev1',
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    
// tours section2
    $('.tours-section2 .tours-slides2').slick({
        slidesToShow: 4,
        nextArrow: '.tours-section2 .slider-arrows .next2',
        prevArrow: '.tours-section2 .slider-arrows .prev2',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    
// tours section3
    $('.tours-section3 .tours-slides3').slick({
        slidesToShow: 4,
        nextArrow: '.tours-section3 .slider-arrows .next3',
        prevArrow: '.tours-section3 .slider-arrows .prev3',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    
// tours section3
    $('.tours-section4 .tours-slides4').slick({
        slidesToShow: 4,
        nextArrow: '.tours-section4 .slider-arrows .next4',
        prevArrow: '.tours-section4 .slider-arrows .prev4',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    
// tours section3
    $('.tours-section5 .tours-slides5').slick({
        slidesToShow: 4,
        nextArrow: '.tours-section5 .slider-arrows .next5',
        prevArrow: '.tours-section5 .slider-arrows .prev5',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    
// blog slider
    var swiper = new Swiper('.blog-section .blog-slider .swiper-container', {
        direction: 'vertical',
        pagination: {
        clickable: true,
        },
        navigation: {
            nextEl: '.blog-section .blog-card .slider-arrow .next',
            prevEl: '.blog-section .blog-card .slider-arrow .prev',
        },
//      autoplay: {
//        delay: 3000,
//      },
    });
    
// brands section
    $('.brands-section .brands-slider').slick({
        slidesToShow: 6,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
    
});

