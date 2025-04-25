const clientsSwiper = new Swiper('.swiper-clients-swiper', {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function(index, className) {
            return `<span class="${className}"></span>`;
        },
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        730: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        809: {
            slidesPerView: 3, 
            spaceBetween: 30
        },
        1034: {
            slidesPerView: 4,
            spaceBetween: 30
        }
    }
});