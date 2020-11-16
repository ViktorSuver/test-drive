$('.button').bind("click", function(event) {
    if ($(this).hasClass('on')) {
 
        $(this).removeClass('on');
       
        $('#my-hidden-player').get(0).pause();
    } else {
 
        $('.button').removeClass('on');
     
        $(this).addClass('on');
        var pl = $('#my-hidden-player').get(0);
      
        pl.pause();
      
        pl.src = $(this).attr('data-src');
       
        pl.play();
    }



});




