
//Rolar página suave
$('.call-home a').on('click', function (e) {
	e.preventDefault();
	var id = $(this).attr('href'),
		targetOffset = $(id).offset().top;

	$('html, body').animate({
		scrollTop: targetOffset - 50
	}, 500);
});

$('.mouse').on('click', function (e) {
	e.preventDefault();
	var id = $(this).attr('href'),
		targetOffset = $(id).offset().top;

	$('html, body').animate({
		scrollTop: targetOffset - 50
	}, 500);
});

$('.overlay-menu ul li a').on('click', function (e) {
	e.preventDefault();
	var id = $(this).attr('href'),
		targetOffset = $(id).offset().top;

	$('html, body').animate({
		scrollTop: targetOffset - 50
	}, 500);
});

//Whatsapp Mobile
var windowWidth = window.innerWidth;

if (windowWidth < 768) {
	document.getElementById("zap").setAttribute('href', 'https://api.whatsapp.com/send?phone=5562996292161&text=Ol%C3%A1%2C+gostaria+de+obter+mais+informa%C3%A7%C3%B5es%21');
}


// Hide Header on on scroll down

$(window).scroll(function () {
	var scroll = $(window).scrollTop();

	if (scroll >= 10) {
		$(".header").addClass("nav-up");
	} else {
		$(".header").removeClass("nav-up");
	}
});

//E-MAIL
$(function () {

	// Get the form.
	var form = $('.form-proposta');

	// Get the messages div.
	var formMessages = $('#form-messages');

	// Set up an event listener for the contact form.
	$(form).submit(function (e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		var formData = $(form).serialize();

		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
			.done(function (response) {
				// Make sure that the formMessages div has the 'success' class.
				$(formMessages).removeClass('error');
				$(formMessages).addClass('success');

				// Set the message text.
				$(formMessages).text("Obrigado! A sua mensagem foi enviada. Em breve entraremos em contato com você.");

				// Clear the form.
				$('#nome').val('');
				$('#telefone').val('');
				$('#email').val('');
				$('#empresa').val('');
				$('#solucao').val('');
				$('#mensagem').val('');
			})
			.fail(function (data) {
				// Make sure that the formMessages div has the 'error' class.
				$(formMessages).removeClass('success');
				$(formMessages).addClass('error');

				// Set the message text.
				if (data.responseText !== '') {
					$(formMessages).text(data.responseText);
				} else {
					$(formMessages).text('Ocorreu um erro ao enviar a sua mensagem.');
				}
			});

	});

});

// Abre o menu
$('#toggle').click(function() {
	$(this).toggleClass('active');
	$('#overlay').toggleClass('open');
});

// Fecha o menu quando clica em um item
$('.overlay-menu ul li a').click(function() {
	if ($(this).attr('class') != 'overlay open' && $(this).attr('class') != 'overlay') {
		$('#overlay').toggleClass('open');
		$('#toggle').toggleClass('active');
	}
  });