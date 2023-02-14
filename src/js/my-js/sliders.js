const swiper = new Swiper('.swiper', {
    loop: false,
    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
    slidesPerView: "auto",
    spaceBetween: 24,
    1200: {
        spaceBetween: 33,
    }
});

const swiper1 = new Swiper('.swiper1', {
    loop: false,
    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
    slidesPerView: 'auto',
    spaceBetween: 24,
    1200: {
        spaceBetween: 33,
    }
});

const swiperTalin = new Swiper('.slider-talin', {
    loop: false,
    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
    slidesPerView: "auto",
    spaceBetween: 24,
    1200: {
        spaceBetween: 33,
    }
});

const otherTorusSlider = new Swiper('.other-tours-slider', {
    loop: false,
    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
    slidesPerView: 'auto',
    spaceBetween: 24,

    1200: {
        spaceBetween: 33,
    }
});