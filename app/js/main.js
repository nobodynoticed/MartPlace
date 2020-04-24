$(document).ready(function () {
    $('.weeklyprod__slider-wrap').slick({
        arrows: true,
        prevArrow: '<button class="lnr lnr-chevron-left"></button>',
        nextArrow: '<button class="lnr lnr-chevron-right"></button>'
    });

    $('.slider-followers__slider').slick({
        arrows: true,
        prevArrow: '<button class="lnr lnr-chevron-left"></button>',
        nextArrow: '<button class="lnr lnr-chevron-right"></button>',
        slidesToShow: 3,
        // centerMode: true,
        infinite: true
    });

    $('select').styler();


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