  var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})	

const navSlide = ()=>{
	let burger = document.querySelector('.burger');
	let nav = document.querySelector('.navbar');

	burger.addEventListener('click', ()=>{
		nav.classList.toggle('navbar-active');
	})
}
navSlide()