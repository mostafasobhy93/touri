$(document).ready(function () {
    'use strict';
    
// Mobile Nav toggle
    $('header nav .bars').click(function () {
        $(this).next('header nav .links-list').slideToggle();
    });
    

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
    
// toggle places section content
    $('.places-section .places-container').mouseover(function() {
        $(this).next().addClass('opened').siblings().removeClass('opened');
    });
    
    
//    scroll top btn
    $(window).scroll(function () {
        if($(this).scrollTop() > 400) {
            $('#scroll-top').fadeIn();
        } else {
            $('#scroll-top').fadeOut();
        }
    });
    $('#scroll-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 600);
    });
    

//// switch list and grid view
    $('.list').click(function () {
        console.log('ali');
        $('.tours-section .tours-slides .slide .tours-col').addClass('col-12 list-view').removeClass('col-md-4');
    });
    
    $('.tours-section .tours-filter .display-style i.grid').click(function () {
        $('.tours-section .tours-slides .slide .tours-col').removeClass('col-12 list-view').addClass('col-md-4');
    });
    
    $('#date').click(function() {
        console.log('alisss');
    });
});

