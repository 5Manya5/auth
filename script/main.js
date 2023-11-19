$(document).ready(function(){

    $('.main_wrapper_form').submit(function(event){ //событие отправки формы

        event.preventDefault();     //отмена действия по умолчанию при отправке
        const formDate = $(this).serialize();   //получение данных формы
        $.ajax({
            type: 'POST',   //метод(безопасный)
            url: '#',   //адрес запроса
            data: formDate,     //отправляемые данные
            dataType: 'json',   //тип данных
            success: function(response){    //функция, срабатывающая при успешной загрузке
                console.log(response);
            },
            error: function(response){  //функция, срабатывающая при ошибке
                console.log('ошибка загрузки', response);
            }
        });
    });
});