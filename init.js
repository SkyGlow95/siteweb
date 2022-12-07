/*--Apparition au scroll--*/
const ratio = .5
const options = {
	root: null,
	rootMargin: '0px',
	threshold: ratio
}

const handleIntersect = function (entries, observer) {
	entries.forEach(function (entry) {
		if (entry.intersectionRatio > ratio) {
			entry.target.classList.add('reveal-visible')
			observer.unobserve(entry.target)
		}
	})
}
const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('.reveal').forEach(function(r) {
	observer.observe(r)
})

const handleIntersect2 = function (entries, observer) {
	entries.forEach(function (entry) {
		if (entry.intersectionRatio > ratio) {
			entry.target.classList.add('reveal-visible2')
			observer.unobserve(entry.target)
		}
	})
}
const observer2 = new IntersectionObserver(handleIntersect2, options);
document.querySelectorAll('.reveal2').forEach(function(r) {
	observer2.observe(r)
})

const handleIntersect3 = function (entries, observer) {
	entries.forEach(function (entry) {
		if (entry.intersectionRatio > ratio) {
			entry.target.classList.add('reveal-visible3')
			observer.unobserve(entry.target)
		}
	})
}
const observer3 = new IntersectionObserver(handleIntersect3, options);
document.querySelectorAll('.reveal3').forEach(function(r) {
	observer3.observe(r)
})

const handleIntersect4 = function (entries, observer) {
	entries.forEach(function (entry) {
		if (entry.intersectionRatio > ratio) {
			entry.target.classList.add('reveal-visible4')
			observer.unobserve(entry.target)
		}
	})
}
const observer4 = new IntersectionObserver(handleIntersect4, options);
document.querySelectorAll('.reveal4').forEach(function(r) {
	observer4.observe(r)
})


/*--Menu--*/
const menuHamburger = document.querySelector(".menuh")
const navLinks = document.querySelector(".navMenu")
const nav = document.querySelector(".nav")
const menua = document.querySelector(".navMenu")

menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')
})

menuHamburger.addEventListener('click',()=>{
nav.classList.toggle('mobile-menu')
})

menua.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')
})

menua.addEventListener('click',()=>{
nav.classList.toggle('mobile-menu')
})


/*--Expériences--*/
const bttn = document.getElementById('bttn')
const bttnr = document.getElementById('bttnr')
const bttns = document.getElementById('bttns')
function Click() {
	bttnr.style.backgroundColor = '#eeeeee'
	bttns.style.backgroundColor = '#eeeeee'
	bttn.style.backgroundColor = '#008CBA'
}
function leftClick() {
	bttn.style.backgroundColor = '#eeeeee'
	bttns.style.backgroundColor = '#eeeeee'
	bttnr.style.backgroundColor = '#008CBA'
}
function rightClick() {
	bttnr.style.backgroundColor = '#eeeeee'
	bttn.style.backgroundColor = '#eeeeee'
	bttns.style.backgroundColor = '#008CBA'
}
/*--$(allias de jQuery)--*/
$(document).ready(function() { /*--créer une fonction pour la page--*/
	$("#bttn").click(function() { /*--lors du clique sur l'élément--*/
	$("#bdrr").hide(); /*--cacher l'élément--*/
	$("#bdrs").hide();
	$("#bdr").show(); /*--montrer l'élément--*/
	});
	$("#bttnr").click(function() {
	$("#bdr").hide();
	$("#bdrs").hide();
	$("#bdrr").show();
	});
	$("#bttns").click(function() {
	$("#bdr").hide();
	$("#bdrr").hide();
	$("#bdrs").show();
	});
	});
window.addEventListener("load", () => { /*--quand la page load--*/
	document.getElementById("bdrr").style.display = "none"; /*--récupérer l'élément et changer sont style--*/
	document.getElementById("bdr").style.display = "none";
});

/*--Compétences--*/
$(".slider").owlCarousel({ /*--appel de l'élément slider pour définir des attributs--*/
	loop: true,
	autoplay: true,
	autoplayTimeout: 2000, //2000ms = 2s;
	autoplayHoverPause: true,
	nav: false,
	dots: false,
});