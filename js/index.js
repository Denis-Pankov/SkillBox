$(document).ready(function () {
    $('.dropdown__item-a').click(function (event) {
        $('.dropdown__block-a,.dropdown__span-a').toggleClass('is-active');
    });
    $('.dropdown__item-a').click(function (event) {
        $('.dropdown__block-b,.dropdown__span-b,.dropdown__block-c,.dropdown__span-c,.dropdown__block-d,.dropdown__span-d,.dropdown__block-e,.dropdown__span-e').removeClass('is-active');
    });
    $('.header-bottom__dropdown-item').click(function (event) {
        $('.dropdown__block-a,.dropdown__span-a').removeClass('is-active');
    });
    $('.dropdown__item-b').click(function (event) {
        $('.dropdown__block-b,.dropdown__span-b').toggleClass('is-active');
    });
    $('.dropdown__item-b').click(function (event) {
        $('.dropdown__block-a,.dropdown__span-a,.dropdown__block-c,.dropdown__span-c,.dropdown__block-d,.dropdown__span-d,.dropdown__block-e,.dropdown__span-e').removeClass('is-active');
    });
    $('.header-bottom__dropdown-item').click(function (event) {
        $('.dropdown__block-b,.dropdown__span-b').removeClass('is-active');
    });
    $('.dropdown__item-c').click(function (event) {
        $('.dropdown__block-c,.dropdown__span-c').toggleClass('is-active');
    });
    $('.dropdown__item-c').click(function (event) {
        $('.dropdown__block-a,.dropdown__span-a,.dropdown__block-b,.dropdown__span-b,.dropdown__block-d,.dropdown__span-d,.dropdown__block-e,.dropdown__span-e').removeClass('is-active');
    });
    $('.header-bottom__dropdown-item').click(function (event) {
        $('.dropdown__block-c,.dropdown__span-c').removeClass('is-active');
    });
    $('.dropdown__item-d').click(function (event) {
        $('.dropdown__block-d,.dropdown__span-d').toggleClass('is-active');
    });
    $('.dropdown__item-d').click(function (event) {
        $('.dropdown__block-a,.dropdown__span-a,.dropdown__block-b,.dropdown__span-b,.dropdown__block-c,.dropdown__span-c,.dropdown__block-e,.dropdown__span-e').removeClass('is-active');
    });
    $('.header-bottom__dropdown-item').click(function (event) {
        $('.dropdown__block-d,.dropdown__span-d').removeClass('is-active');
    });
    $('.dropdown__item-e').click(function (event) {
        $('.dropdown__block-e,.dropdown__span-e').toggleClass('is-active');
    });
    $('.dropdown__item-e').click(function (event) {
        $('.dropdown__block-a,.dropdown__span-a,.dropdown__block-b,.dropdown__span-b,.dropdown__block-c,.dropdown__span-c,.dropdown__block-d,.dropdown__span-d').removeClass('is-active');
    });
    $('.header-bottom__dropdown-item').click(function (event) {
        $('.dropdown__block-e,.dropdown__span-e').removeClass('is-active');
    });
    $('.header-burger').click(function (event) {
        $('.header-menu__dropdown,.header-burger,.header-burger:before,.header-burger__span,.header-burger:after').toggleClass('active');
    });
    $('.header-menu__dropdown').click(function (event) {
        $('.header-menu__dropdown,.header-burger,.header-burger:before,.header-burger__span,.header-burger:after').removeClass('active');
    });
    $('.header-top__magnifier-svg').click(function (event) {
        $('.header-top,.header-top__magnifier-input,.header-top__magnifier-closed,.header-burger,.header-top__logo,.header-top__magnifier').toggleClass('is-active');
    });
    $('.header-top__magnifier-closed').click(function (event) {
        $('.header-top,.header-top__magnifier-input,.header-top__magnifier-closed,.header-burger,.header-top__logo,.header-top__magnifier').removeClass('is-active');
    });
});


// Hero
var mySwiper = new Swiper('.swiper-container', {
    autoplay: {
        delay: 30000,
    },
});

// Galery 
const element = document.querySelector('#selectFilter');
const choices = new Choices(element, {
    searchEnabled: false,
    shouldSort: false,
    itemSelectText: '',
});

new Swiper('.gallery-right__swiper', {
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    keyboard: {
        enable: true,
        onlyInViewport: true,
        pageUpDown: false,
    },
    watchOverflow: true,    

    breakpoints: {
        1025: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            slidesPerColumn: 2,
            spaceBetween: 48,            
        },
        500: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            slidesPerColumn: 2,
            spaceBetween: 32,
        },
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerColumn: 1,
            spaceBetween: 0,
        },
    },
});



