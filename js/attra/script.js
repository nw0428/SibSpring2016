$(document).ready(function(){

	$('.navCircle').hover(
	  function() {
	    $(this).css({'border-width':'5px'});
	    $(this).find('.circleLabel').css({'visibility':'visible'});
	  }, function() {
	    $(this).css({'border-width':'10px'});
	    $(this).find('.circleLabel').css({'visibility':'hidden'});
	  }
	);

	$('#homeCircle').hover(
	  function() {
	    $(this).css({'border-width':'5px'});
	  }, function() {
	    $(this).css({'border-width':'10px'});
	  }
	);
});