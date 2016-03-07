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
	    $('.circleLabel').css({'visibility':'visible'});
	  }, function() {
	    $(this).css({'border-width':'10px'});
	    $('.circleLabel').css({'visibility':'hidden'});
	  }
	);

	$('.navCircle').click(function(){
		var id = $(this).attr('id');
		openSubviewFor(id);
	});

	$('.subViewExitBtn').hover(
		function() {
			$(this).css({'height':'55px', 'width':'55px'});
		}, function() {
			$(this).css({'height':'50px', 'width':'50px'});
		}
	).click(function() {
		$(this).parent().fadeOut(100);
	});

});

function openSubviewFor(id) {
	$('.subView').fadeOut(100);
	$('.circleLabel').css({'visibility':'hidden'});
	switch(id) {
		case 'infoCircle':
			$('#aboutView').fadeIn(100);
			break;
		case 'experienceCircle':
			$('#experienceView').fadeIn(100);
			break;
	}
}