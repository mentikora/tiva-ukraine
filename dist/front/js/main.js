'use strict';

$(document).ready(function(){
  
  //show nav => theme-def
  $('.mobile_menu_btn').on('click', function(){
    $(this).toggleClass('active');
    $('#nav').slideToggle(200);
    if ($('#nav').is('.active')){ 
      $('#nav ul.active').slideUp();
      $('#nav, #nav .active').removeClass('active');
    } else{
      $('#nav').addClass('active');
    }
  });

  //add active to domtree => theme-def
  $('#nav span').on('click', function(e){
    e.stopPropagation();
    $(this).toggleClass('active').siblings('ul').slideToggle(200).toggleClass('active');
  });

  //show top => theme-def
  $('#header_top_mobile_button').on('click', function(){
    if( $(this).hasClass('active')){
      $(this).removeClass('active');
      $('#header_top_menu_mobile').slideUp().removeClass('active');
    } else {
      $(this).addClass('active');
      $('#header_top_menu_mobile').slideDown().addClass('active');
    }
  });

  // categories => filter
  $('.filter_mobile_button').on('click', function(){
    $(this).toggleClass('active');
    $(this).parent('ul').toggleClass('active');
  });

});