$(function() {
	AOS.init();
  
	$('.menu').click(function () {
		
		$(this).animate({
			right: -100
		});
		
		$('.wrap, footer').addClass('blur');
		
		$('nav').animate({
			right: 0
		});

		$('body').css('overflow', 'hidden');
	});
	
	$('a[href^="#"] , .wrap').click(function (e) {
		$('.wrap , footer').removeClass('blur');

		$boxWidth = $('nav').width() + 50;

		$('nav').animate({
			right: -$boxWidth
		});
		
		$('.menu').animate({
			right: 0
		});
		
		$('body').css('overflow', 'auto');

		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 500);
		e.preventDefault();
	});

	$('.project').hover(function(){
		$(this).children('.captionContent').css('bottom', '0');
	},function(){
		$('.captionContent').css('bottom', '-150px');});
});