$(document).ready(function(){

    $('.button').on('mouseover',function(){

        let w = $(window).width()-50;
        let h = $(window).height()-50;

        let getRandomInt = function(min,max){

            return Math.floor(Math.random() * (max - min + 1)) + min;
        };

        $(this).animate({

            top: getRandomInt(50, h),
            left: getRandomInt(50, w)

        },300);
    });
});