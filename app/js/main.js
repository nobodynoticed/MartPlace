$(document).ready(function () {
    $('.weeklyprod__slider-wrap').slick({
        arrows: true,
        prevArrow: '<span class="lnr lnr-chevron-left"></span>',
        nextArrow: '<span class="lnr lnr-chevron-right"></span>'
    });

    $(".rate-star").rateYo({
        rating: 4.5,
        spacing: "3px",
        starWidth: '17px',
        ratedFill: "#ffc000",
        rating: 4.5,
        readOnly: true
    });

    var mixer = mixitup('.filter-prod__inner-box');

});