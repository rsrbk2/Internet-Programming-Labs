$(document).ready(function(){

    let symbol_user = 'X';
    let symbol_comp = 'O';

    let exit_flag = false;
    let win_user_array = ['123','456','789','147','258','369','159','357'];

    function check_3_user(symbol){
        for (let i = 0; i < 8; i++) {

            let first = 'cell' + win_user_array[i].substr(0,1);
            let second = 'cell' + win_user_array[i].substr(1,1);
            let third = 'cell' + win_user_array[i].substr(2,1);

            if( $('.'+first).text() == symbol && $('.'+second).text() == symbol && $('.'+third).text() == symbol ){
                $('.'+first+',.'+second+',.'+third).css("background-color", "#83e2c3");
                $('.result').text('Вы выиграли!');
                $('.tic_tac_toe .block').unbind('click');
                exit_flag = true;
            }
        }
    }

    function check_2_comp(symbol){
        for (let i = 0; i < 8; i++) {

            let first = 'cell' + win_user_array[i].substr(0,1);
            let second = 'cell' + win_user_array[i].substr(1,1);
            let third = 'cell' + win_user_array[i].substr(2,1);

            if( $('.'+first).text() == symbol && $('.'+second).text() == symbol && $('.'+third).text() == '' ){
                $('.'+third).text(symbol);
                $('.'+first+',.'+second+',.'+third).css("background-color", "#EF7C7C");
                $('.result').text('Вы проиграли!');
                $('.tic_tac_toe .block').unbind('click');
                exit_flag = true;
            }

            if( $('.'+first).text() == symbol && $('.'+second).text() == '' && $('.'+third).text() == symbol ){
                $('.'+second).text(symbol);
                $('.'+first+',.'+second+',.'+third).css("background-color", "#EF7C7C");
                $('.result').text('Вы проиграли!');
                $('.tic_tac_toe .block').unbind('click');
                exit_flag = true;
            }

            if( $('.'+first).text() == '' && $('.'+second).text() == symbol && $('.'+third).text() == symbol ){
                $('.'+first).text(symbol);
                $('.'+first+',.'+second+',.'+third).css("background-color", "#EF7C7C");
                $('.result').text('Вы проиграли!');
                $('.tic_tac_toe .block').unbind('click');
                exit_flag = true;
            }
        }
    }

    function check_2_user(symbol){

        for (let i = 0; i < 8; i++) {

            let first = 'cell' + win_user_array[i].substr(0,1);
            let second = 'cell' + win_user_array[i].substr(1,1);
            let third = 'cell' + win_user_array[i].substr(2,1);


            if( exit_flag == false ){
                if( $('.'+first).text() == symbol && $('.'+second).text() == symbol && $('.'+third).text() == '' ){
                    $('.'+third).text(symbol_comp);
                    exit_flag = true;
                }
            }

            if( exit_flag == false ){
                if( $('.'+first).text() == symbol && $('.'+second).text() == '' && $('.'+third).text() == symbol ){
                    $('.'+second).text(symbol_comp);
                    exit_flag = true;
                }
            }

            if( $('.'+first).text() == '' && $('.'+second).text() == symbol && $('.'+third).text() == symbol ){
                $('.'+first).text(symbol_comp);
                exit_flag = true;
            }

            if(exit_flag) break;
        }
    }

    $('.tic_tac_toe .block').click(function(){

        if( $(this).text() == '' ){
            $(this).text(symbol_user);
            check_3_user(symbol_user);
            check_2_comp(symbol_comp);
            check_2_user(symbol_user);

            if( exit_flag == false ){
                for (let i = 1; i < 10; i++) {
                    if( $('.cell'+i).text() == '' ){
                        $('.cell'+i).text(symbol_comp);
                        break;
                    }
                }
            }else exit_flag = false;


        }
    });
});