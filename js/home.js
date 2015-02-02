
var position = 0;

document.addEventListener('deviceready', function() {
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
