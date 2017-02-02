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

    var toggleCurrent = function() {
      var ul = $(this).toggleClass('active').siblings('ul');

      ul.children('li:has(span.active)').children('span.active').each(function() {
        // recursion
        toggleCurrent.apply(this);
      });

      // if (window.matchMedia('(max-width: 1800px)').matches) {
      //   if (ul.parents('ul.open').length) {
      //     ul.css('left', '-' + (ul.width() + 2) + 'px');
      //   }
      // }

      ul.slideToggle(200)
      .toggleClass('active')
      .toggleClass('open');
    };

    var activeRoot = $(this).parent().siblings('li').find('span.active');
    if (activeRoot.length) {
      activeRoot.toggleClass('active')
        .parent()
        .find('ul.open')
          .slideUp(50, toggleCurrent.bind(this))
          .toggleClass('active')
          .toggleClass('open');
    } else {
      toggleCurrent.apply(this);
    }

  });

  //$('#nav > li > span').on('click', function(){
  //  if( !$(this).hasClass('active') ){
  //    $(this).siblings().find('ul').slideUp();
  //    $(this).siblings().find('.active').removeClass('active');
  //  }
  //});

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
