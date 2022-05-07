window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
	showNavigationOnScroll()
	showArrowOnScroll()

	activateMenuAtCurrentSection(hero)
	activateMenuAtCurrentSection(services)
	activateMenuAtCurrentSection(about)
	activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
	const targetLine = scrollY + innerHeight / 2

	const sectionTop = section.offsetTop
	const sectionHeight = section.offsetHeight
	const sectionEndsAt = sectionTop + sectionHeight

	const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
	const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

	const sectionBoundaries =
		sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

	const sectionId = section.getAttribute('id')

	const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

	menuElement.classList.remove('active')
	if (sectionBoundaries) {
		menuElement.classList.add('active')
	}
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
  #services .card,
  #about, 
  #about img,
	#contact,
	#contact .content,
	#contact .button,
	footer,
	footer #copyright,
	footer #social-links`)
