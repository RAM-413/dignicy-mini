$('.slide').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '.btnprev',
    nextArrow: '.btnnxt',
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,

        }
    },
    {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
        }
    },

    ]
});


// $('.slide').slick({
//     slidesToShow: 3,
//     Infinity: true,
//     slidesToScroll: 1,
//     autoplay: false,
//     autoplaySpeed: 200,
//     arrows: true,
//     prevArrow: '.btnnxt',
//     nextArrow: '.btnprev',

// });








