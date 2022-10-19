import 'normalize.css'
import './styles/main.scss';
import './styles/header.scss'
import * as $ from 'jquery';
import 'webpack-jquery-ui'

// @ts-ignore
$(function(){
// @ts-ignore
  const dateFormat = "mm/dd/yy",
    // @ts-ignore
    from = $( ".field-arrival" )
      .datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1
      })
      .on( "change", function() {
        // @ts-ignore
        to.datepicker( "option", "minDate", getDate( this ) );
      }),
    // @ts-ignore
    to = $( ".field-departure" ).datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      numberOfMonths: 1
    })
      .on( "change", function() {
        // @ts-ignore
        from.datepicker( "option", "maxDate", getDate( this ) );
      });
// @ts-ignore
  function getDate( element ) {
    let date;
    try {
      date = $.datepicker.parseDate( dateFormat, element.value );
    } catch( error ) {
      date = null;
    }

    return date;
  }




  // @ts-ignore
  // $(".datepicker").datepicker({
  //   showOn: "both",
  //   minDate: 0,
  //   maxDate: "+30D",
  //   //@ts-ignore
  //   // buttonImage: $( ".field-arrival:after" ).datepicker( "option", "showOn" ),
  //   //buttonImage: "https://snipp.ru/demo/437/calendar.gif",
  //   buttonImageOnly: true,
  //   stepMonths: true,
  // });

  $.datepicker.regional['ru'] = {
    closeText: 'Закрыть',
    prevText: 'Предыдущий',
    nextText: 'Следующий',
    currentText: 'Сегодня',
    monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
    monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
    dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
    dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
    dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
    weekHeader: 'Не',
    dateFormat: 'dd.mm.yy',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: '',
    //selectOtherMonths: true
    //showOtherMonths: true
  };
  $.datepicker.setDefaults($.datepicker.regional['ru']);

});