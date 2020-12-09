;(function() {
	"use strict";
	let menuBtn = document.querySelector('.ba-menu-toggle');
	let menu = document.querySelector('.ba-nav');
	menuBtn.addEventListener('click', () => menu.classList.toggle('open'));
})();

const slider = $('.ba-section-customers__comments');

slider.slick({
	infinite: true,
	slidesToShow:2,
	slidesToScroll:1,
	variableWidth: true,
	nextArrow: '.ba-slider-btn__next',
	prevArrow: '.ba-slider-btn__prev',
	dots: true,
});
