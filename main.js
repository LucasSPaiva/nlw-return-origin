// alert('Ainda não está acabado!!')

// Resolve o problema de carregamento do js depois da página
window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
	showNavigationOnScroll()
	showArrowOnScroll()
}

function showNavigationOnScroll() {
	if (scrollY > 0) {
		navigation.classList.add('scroll')
	} else {
		navigation.classList.remove('scroll')
	}
}

function showArrowOnScroll() {
	if (scrollY > 300) {
		arrow.classList.add('scroll')
	} else {
		arrow.classList.remove('scroll')
	}
}

function openMenu() {
	document.body.classList.add('menu-expanded')
}

function closeMenu() {
	document.body.classList.remove('menu-expanded')
}

ScrollReveal({
	origin: 'top',
	distance: '30px',
	duration: 700
}).reveal(`
  #hero .content,
  #hero img, 
  #hero .details .items, 
  #services,
  #services header,
  #services .card
  #about, 
  #about img,
	#contact,
	#contact .content,
	#contact .button,
	footer,
	footer #copyright,
	footer #social-links`)
