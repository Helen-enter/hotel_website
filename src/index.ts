import 'normalize.css'
import './styles/main.scss';
import './styles/header.scss'
import * as $ from 'jquery';

// @ts-ignore
$(function(){
// @ts-ignore
  //$('p').text('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
// @ts-ignore
  $(".field-departure:after").datepicker({
    showOn: "button",
    buttonImage: '',
    buttonImageOnly: true,
    buttonText: "Выбрать дату"
  });
});