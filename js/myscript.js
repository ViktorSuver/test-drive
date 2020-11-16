$('.button').bind("click", function(event) {
    if ($(this).hasClass('on')) {
        //если данная мелодия уже проигрывается
        //снимаем флаг ON
        $(this).removeClass('on');
        //останавливаем проигрыватель
        $('#my-hidden-player').get(0).pause();
    } else {
        //если данная мелодия не проигрывается в текущий момент
        //выключаем все остальные кнопки
        $('.button').removeClass('on');
        //добавляем класс ON
        $(this).addClass('on');
        var pl = $('#my-hidden-player').get(0);
        //останавливаем текущую мелодию
        pl.pause();
        //устанавливаем новый источник
        pl.src = $(this).attr('data-src');
        //включаем проигрывание
        pl.play();
    }

});