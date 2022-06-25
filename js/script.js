$(document).ready(function(){
    //menuToggle
    $('.menu__toggle').click(function(e){
        $(this).toggleClass('_active-menu')
        $('.menu__box').toggleClass('_active-menu')
        $('body').toggleClass('_lock')

    })

    //SORT-active
    $('.sort').click(function(e){
        $(this).toggleClass('_active-sort')
        $(".sort__choise").toggleClass('_active-sort')
    })

    //swiper`s

    //swiper ruls
    let rulsCategories = ['Постраждалі', 'Будівельні компанії', 'Юридичні компанії', 'Ангели']

    let rulsSwiper = new Swiper('.ruls-swiper.swiper', {
        slidesPerView: 1,

        allowTouchMove: false,

        spaceBetween: 80,
        autoHeight: true,
        loop: false,
        pagination: {
            
            el: '.swiper-pagination.ruls-list__title__container',
            clickable: true,
            renderBullet: function (index, className) {
                return `<span class="ruls-list__title ${className}">${rulsCategories[index]}</span>`;
            },
        },
        
    })

    //swiper partners
    let partnersSwiper = new Swiper('.partners-swiper.swiper', {
        slidesPerView: 1,

        allowTouchMove: true,

        spaceBetween: 20,
        autoHeight: true,
        loop: false,
        navigation: {
            nextEl: '.partners-swiper__next',
            prevEl: '.partners-swiper__prev',
        },
        breakpoints: {
            370: {
                slidesPerView: 2,
                //spaceBetween: 60,
            },
            440: {
                slidesPerView: 3,
                //spaceBetween: 60,
            },
            650: {
                slidesPerView: 4,
                spaceBetween: 60,
            },
            940: {
                spaceBetween: 120,
            },
            1400: {
                spaceBetween: 250,
            },
        },
        
    })
})