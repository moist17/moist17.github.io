$(window).on('scroll', function(){
    if ($(window).scrollTop()){
        console.log('testing');
        $('nav').addClass('resizing');
    }
    else {
        $('nav').removeClass('resizing');
    }
})