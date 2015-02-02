
var position = 0;

document.addEventListener('deviceready', function() {
	for (i = 0; i < 8; i++) {
		$('section div div textarea#' + (i + 1)).val(window.localStorage.getItem('block-' + (i + 1)));
	}
	$('section div div textarea').elastic();
	$('section div div textarea').focus(function() {
		$('nav').fadeOut(125);
		$('section').css('padding-top', '0');
	});
	$('section div div textarea').blur(function() {
		$('nav').fadeIn(125);
		$('section').css('padding-top', '4.625em');
		window.localStorage.setItem('block-' + (parseInt($(this).attr('id')) - 1), $(this).val());
	});
	$('nav a').click(function() {
		position = position ? 0 : 1;
		$('section>div').css('left', position ? '-100%' : '0');
		$('section>div:nth-child(' + (position + 1) + ')').css('height', 'auto');
		$('section>div:nth-child(' + (2 - position) + ')').css('height', '0');
		$('nav span').fadeOut(125, function() {
			$(this).html('Day ' + (position + 1));
			$(this).fadeIn(125);
		});
	});
}, false);
