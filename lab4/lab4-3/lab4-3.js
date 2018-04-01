$(document).ready(function(){

    $('.table > ul > li').hover(function(){

        let index = $(this).index();

        $('.table').find('.selected').removeClass('selected');

        $(this).parent().addClass('selected');

        $('.table > ul').each(function(){

            $(this).children('li').eq(index).addClass('selected');
        });

    },function(){

        $('.table').find('.selected').removeClass('selected');
    });
});