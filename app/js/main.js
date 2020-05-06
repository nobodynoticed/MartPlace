$(document).ready(function () {
    $('.weeklyprod__slider-wrap').slick({
        arrows: true,
        prevArrow: '<span class="lnr lnr-chevron-left"></span>',
        nextArrow: '<span class="lnr lnr-chevron-right"></span>'
    });

    $('.slider-followers__slider').slick({
        arrows: true,
        prevArrow: '<span class="lnr lnr-chevron-left"></span>',
        nextArrow: '<span class="lnr lnr-chevron-right"></span>',
        slidesToShow: 3,
        infinite: true
    });

    $('.product__select, .sorting__select').styler();


    $(".rate-star").rateYo({
        rating: 4.5,
        spacing: "3px",
        starWidth: '17px',
        ratedFill: "#ffc000",
        readOnly: true
    });

    $(".prod-star").rateYo({
        rating: 4.5,
        spacing: '3px',
        starWidth: '15px',
        ratedFill: '#ffc000',
        readOnly: true
    });

    let mix = $('.filter-prod__box');
    if (mix) {
        var mixer = mixitup(mix); 
    }

});