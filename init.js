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
	bttnr.style.backgroundColor = 'white'
	bttns.style.backgroundColor = 'white'
	bttn.style.backgroundColor = '#008CBA'
}
function leftClick() {
	bttn.style.backgroundColor = 'white'
	bttns.style.backgroundColor = 'white'
	bttnr.style.backgroundColor = '#008CBA'
}
function rightClick() {
	bttnr.style.backgroundColor = 'white'
	bttn.style.backgroundColor = 'white'
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
	document.getElementById("bdrs").style.display = "none";
});

/*--Compétences--*/
$(".slider").owlCarousel({ /*--appel de l'élément slider pour définir des attributs--*/
	loop: true,
	autoplay: true,
	autoplayTimeout: 2000, //2000ms = 2s;
	autoplayHoverPause: true,
});