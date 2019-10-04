$(document).ready(function () {
    'use strict';
    
// sticky header
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 200) {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
    });
    
// Mobile Nav toggle
    $('header nav .bars').click(function () {
        $(this).next('header nav .links-list').slideToggle();
    });
    
    
// toggle places section content
    $('.places-section .places-container').mouseover(function () {
        $(this).next().addClass('opened').siblings().removeClass('opened');
    });
    
    
//    scroll top btn
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
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
    $('.tours-section .tours-filter .display-style i.list').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        $('.tours-section .tours-slides .tours-col').addClass('col-12 list-view').removeClass('col-md-4');
    });
    
    $('.tours-section .tours-filter .display-style i.grid').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        $('.tours-section .tours-slides .tours-col').removeClass('col-12 list-view').addClass('col-md-4');
    });
    
//// filter tours-city 
    $('.tours-filter .filter-list ul .list-item').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        $('.tours-section .tours-city-content .filter-section').fadeOut();
        $('#' + $(this).data('filter')).fadeIn();
    });
    
/// open/close main-form
    $('.main-form .overlay').click(function () {
        $(this).parent('.main-form').fadeOut();
    });
    $('header nav .links-list ul .list-item .link.sign-in').click(function (e) {
        e.preventDefault();
        $('#main-form').fadeIn();
    });
//// switch main-form 
    $('.main-form .form-container .main-form-btns button').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        $('.main-form .form-container form').hide();
        $('#' + $(this).data('form')).show();
    });
    
//// faq slide up
///// slide list
    $('.faq-page .table-slide .table-list li .drop-down').click(function () {
        $(this).parent().siblings().find('.drop-content').slideUp().prev().removeClass('slide-active');
        $(this).toggleClass('slide-active');
        $(this).next('.drop-content').slideDown();
    });
    
///// profile sidebar toggle
    $('.profile-page .profile-sidebar .sidebar-mobile-btn').click(function () {
        $(this).parent('.profile-page .profile-sidebar').toggleClass('active');
    });
    
//// form-dropdown 
    $('.tours-city-page .page-side .form-dropdown .drop-link a').click(function (e) {
        e.preventDefault();
        $(this).parents('.tours-city-page .page-side .form-dropdown').toggleClass('active');
    });
    
    
});

