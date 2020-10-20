const navSlide = () => {
	const burger = document.querySelector('.burger')
	const nav = document.querySelector('.nav-links')
	const navLinks = document.querySelectorAll('.nav-links li')
	//Toggle Nav
	burger.addEventListener('click', () => {
		nav.classList.toggle('nav-active');
		//Burger animation
		burger.classList.toggle('toggle');
	});

}
navSlide();


let people = document.querySelectorAll('.gridfoto img')

	people.forEach(person => {
		person.addEventListener('click', (event) => {
			people.forEach(p => p.classList.remove('pulse-active'))
			
			let name = event.target.getAttribute('data-name')
			event.target.classList.add('pulse-active')

			let description = document.querySelector(`[data-target="${name}"]`)
			let allDescription = document.querySelectorAll('.grid-cambio')

			allDescription.forEach(desc => desc.classList.remove('active'))
			description.classList.add('active')

		})
	})


document.addEventListener('DOMContentLoaded', () => {
	var swiper = new Swiper('.swiper', {
		pagination: '.swiper-pagination',
		paginationClickable: true,
		effect: 'coverflow',
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: 'auto',
		coverflowEffect: {
			rotate: 0,
			stretch: 0,
			depth: 150,
			modifier: 1,
			slideShadows: true,
		},
		pagination: {
			el: 'swiper-pagination'
		}
	});

})
