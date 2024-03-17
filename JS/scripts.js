$(document).ready(function(){

    const btnMenuMobile = $('.btn-menumobile');
    
    $(btnMenuMobile).on('click', function(){
        
        $('.nav-container ul').toggleClass('open');

    })

    const addNumber = $('#number');

    $(addNumber).on('click', function () {
        $('.hide').toggleClass('show')
    })
});