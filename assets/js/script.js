// ********************************
// ******** Main Scripts **********
// ********************************

// Password eye button
$(document).ready(function () {
	$('#show_hide_password').on('click', function (event) {
		event.preventDefault();
		if ($('.password_input input').attr('type') == 'text') {
			$('.password_input input').attr('type', 'password');
			$('.password_input button i').addClass('fa-eye-slash');
			$('.password_input button i').removeClass('fa-eye');
		} else if ($('.password_input input').attr('type') == 'password') {
			$('.password_input input').attr('type', 'text');
			$('.password_input button i').removeClass('fa-eye-slash');
			$('.password_input button i').addClass('fa-eye');
		}
	});
});

// Controlling TopNav Opacity Changes
$(window).scroll(function (event) {
	var scroll = $(window).scrollTop();
	if (window.innerWidth > 600) {
		if (scroll >= 130) {
			$('.topnav_blur').css('background-color', 'rgb(0 0 0 / 82%)');
			$('.topnav_blur').css('filter', 'blur(3px) saturate(180%)');
			$('.navbar-mobile').css('background-color', 'rgb(0 0 0 / 82%)');
			$('.glassy_dropdown').css(
				'background-color',
				'rgba(255, 255, 255, 0.98)',
			);
		} else {
			$('.topnav_blur').css('background-color', 'rgba(74, 74, 74, 0.5)');
			$('.topnav_blur').css('filter', 'blur(0px) saturate(0%)');
			$('.navbar-mobile').css('background-color', 'rgba(74, 74, 74, 0.5)');
			$('.glassy_dropdown').css('background-color', 'rgba(255, 255, 255, 0.5)');
		}
	} else {
		if (scroll >= 20) {
			$('.topnav_blur').css('background-color', 'rgb(0 0 0 / 82%)');
			$('.topnav_blur').css('filter', 'blur(3px) saturate(180%)');
			$('.navbar-mobile').css('background-color', 'rgb(0 0 0 / 82%)');
			$('.glassy_dropdown').css(
				'background-color',
				'rgba(255, 255, 255, 0.98)',
			);
		} else {
			$('.topnav_blur').css('background-color', 'rgba(74, 74, 74, 0.5)');
			$('.topnav_blur').css('filter', 'blur(0px) saturate(0%)');
			$('.navbar-mobile').css('background-color', 'rgba(74, 74, 74, 0.5)');
			$('.glassy_dropdown').css('background-color', 'rgba(255, 255, 255, 0.5)');
		}
	}
});

// Control the Change of Accardion icon in FAQ
$('.faq_accar_btn').click(function (e) {
	let targetButton;

	// Get the clicked object
	const clickedItem = e.target;

	// handle clicking from different objects
	if ($(clickedItem).is('span')) {
		targetButton = $(clickedItem).parent();
	} else if ($(clickedItem).is('i')) {
		targetButton = $(clickedItem).parent().parent();
	} else if ($(clickedItem).is('button')) {
		targetButton = $(clickedItem);
	}

	// the state of clicked button : open / close
	const isExpand = targetButton[0].attributes['aria-expanded'].value;

	if (isExpand === 'true') {
		// Turn back other buttons to normal state
		$('.faq_accar_btn').parent().removeClass('faq_accar_header_open');
		$('.faq_accar_btn').parent().addClass('faq_accar_header_close');
		$('.faq_accar_btn').find('span.faq_icon').removeClass('faq_icon_open');
		$('.faq_accar_btn').find('span.faq_icon').addClass('faq_icon_close');
		$('.faq_accar_btn').find('span.faq_icon i').remove();
		$('.faq_accar_btn')
			.find('span.faq_icon')
			.append('<i class="fa-regular fa-plus"></i>');
		// Opening accardion
		$(targetButton).parent().removeClass('faq_accar_header_close');
		$(targetButton).parent().addClass('faq_accar_header_open');
		$(targetButton).find('span.faq_icon').removeClass('faq_icon_close');
		$(targetButton).find('span.faq_icon').addClass('faq_icon_open');
		$(targetButton).find('span.faq_icon i').remove();
		$(targetButton)
			.find('span.faq_icon')
			.append('<i class="fa-solid fa-minus"></i>');
	} else {
		// Closing accardion
		$(targetButton).parent().removeClass('faq_accar_header_open');
		$(targetButton).parent().addClass('faq_accar_header_close');
		$(targetButton).find('span.faq_icon').removeClass('faq_icon_open');
		$(targetButton).find('span.faq_icon').addClass('faq_icon_close');
		$(targetButton).find('span.faq_icon i').remove();
		$(targetButton)
			.find('span.faq_icon')
			.append('<i class="fa-regular fa-plus"></i>');
	}
});

// Control the Change of Accardion icon in Answer Review
$('.answer_accar_btn').click(function (e) {
	let targetButton;

	// Get the clicked object
	const clickedItem = e.target;

	// handle clicking from different objects
	if ($(clickedItem).is('span')) {
		targetButton = $(clickedItem).parent().parent();
	} else if ($(clickedItem).is('i')) {
		targetButton = $(clickedItem).parent().parent().parent();
	} else if ($(clickedItem).is('button')) {
		targetButton = $(clickedItem);
	} else if ($(clickedItem).is('div')) {
		targetButton = $(clickedItem).parent();
	} else if ($(clickedItem).is('p')) {
		targetButton = $(clickedItem).parent().parent();
	} else if ($(clickedItem).is('input')) {
		targetButton = $(clickedItem).parent().parent().parent();
	} else if ($(clickedItem).is('label')) {
		targetButton = $(clickedItem).parent().parent().parent();
	}

	// the state of clicked button : open / close
	const isExpand = targetButton[0].attributes['aria-expanded'].value;

	if (isExpand === 'true') {
		$(targetButton)
			.find('.answer_icon i')
			.css({ transform: 'rotate(-180deg)' });
	} else {
		$(targetButton).find('.answer_icon i').css({ transform: 'rotate(0)' });
	}
});

// Handle Image Modal
var modal = document.getElementById('testImgModal');
var img = document.getElementById('testImg');
var modalImg = document.getElementById('modalImg');
img.onclick = function () {
	modal.style.display = 'block';
	modalImg.src = this.src;
};
var span = document.getElementsByClassName('modalImg-close')[0];
span.onclick = function () {
	modal.style.display = 'none';
};
