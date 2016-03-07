
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

	$(".nav-pills li").click(function(){
       $(".active").removeClass("active");
       $(this).addClass("active");
   	});

   	$('#portfolioPill a').css({'background-color':'white', 'color':'#998571', 'border':'1px solid white'});
   	$('#portfolioPill a').find('.subViewTitleText').css({'color':'#998571'});
   	$("#skillsPill a").css({'color':'white', 'border':'1px solid white', 'border':'1px solid white'});
   	$(".nav-pills li").click(function(){
       	$(".active").removeClass("active");
       	$(this).addClass("active");
   	});

	$("#portfolioPill a").click(function() {
      	$(this).css({'background-color':'white','color':'#998571'});
      	$("#skillsPill a").css({'background-color':'#998571','border':'1px solid white'});
      	$(this).find('.subViewTitleText').css({'color':'#998571'});
      	$('#skillsPill a').find('.subViewTitleText').css({'color':'white'});
		$("#skillsView").hide();
		$("#portfolioBox").show();

		var offset = -150;
		$('.tab-content').animate({scrollTop:$(".tab-content").offset().top + offset}, 50);
   });

   $("#skillsPill a").click(function() {
      	$(this).css({'background-color':'white'});
      	$(this).find('.subViewTitleText').css({'color':'#998571'});
      	$("#portfolioPill a").css({'background-color':'#998571','border':'1px solid white'});
      	$('#portfolioPill a').find('.subViewTitleText').css({'color':'white'});
   		$("#portfolioBox").hide();
   		$("#skillsBox").show();

   		var offset = -150;
		$('.tab-content').animate({scrollTop:$(".tab-content").offset().top + offset}, 50);
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
		case 'skillsPortfolioCircle':
			$('#portfolioView').fadeIn(100);
			break;
	}
}