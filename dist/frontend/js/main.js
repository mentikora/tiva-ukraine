'use strict';

$(document).ready(function(){
	
	$('.mobile_menu_btn').on('click', function(){
		$(this).toggleClass('active');
		//$('#nav').toggleClass('active');

		if ($('#nav').is('.active')) {
      $('#nav, #nav .active').removeClass('active');
	  }
	  else{
      $('#nav').addClass('active');
	  }
	});

	$('#nav span').on('click', function(e){
		e.stopPropagation();
		$(this).toggleClass('active');
		$(this).siblings('ul').toggleClass('active');
	});

});