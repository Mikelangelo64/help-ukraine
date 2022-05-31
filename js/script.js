$(document).ready(function(){
    //menuToggle
    $('.menu__toggle').click(function(e){
        $(this).toggleClass('_active-menu')
        $('.menu__box').toggleClass('_active-menu')
        $('body').toggleClass('_lock')

    })
})