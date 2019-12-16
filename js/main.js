$(document).ready(function() {

// DEVICE VIEW NAVIGATION COLLAPSE
	$('.fa-bars').click(function() {
		$('.header-wrap').css('visibility','visible');
		$('body').css('overflow','hidden');
	});

	$('.fa-times-circle').click(function() {
		$('.header-wrap').removeAttr('style');
		$('body').removeAttr('style');
	});

	if ($(window).innerWidth() <= 1080) {
		$('header').removeClass('gold-header');
		$('.header-wrap').removeAttr('style');
	} else if($(window).innerWidth() >= 1081) {
		$('header').addClass('gold-header');
		$('.header-wrap').removeAttr('style');
	};

// SLIDETOGGLE FOR ARTICLES

	$('.one-h').click(function() {
	  $('.one-b').slideToggle('display');
	});
	$('.two-h').click(function() {
	  $('.two-b').slideToggle('display');
	});

// DISABLED

	$('#n-gallery button a').click(function() {
		alert('Denne side er ikke en del af prototypen');
	});

// END
});
