$(window).on('scroll', function(){
    if ($(window).scrollTop()){
        console.log('testing');
        $('nav').addClass('resizing');
    }
    else {
        $('nav').removeClass('resizing');
    }
})

// modal

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})