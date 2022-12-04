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


const menuHamburger = document.querySelector(".menuh")
const navLinks = document.querySelector(".navMenu")
const menua = document.querySelector(".navMenu")

menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')
})

menua.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')
})


var bttn = document.getElementById('bttn')
var bttnr = document.getElementById('bttnr')
var bttns = document.getElementById('bttns')
function Click() {
	bttnr.style.backgroundColor = 'white'
	bttns.style.backgroundColor = 'white'
	bttn.style.backgroundColor = 'blue'
}
var bttn = document.getElementById('bttn')
var bttnr = document.getElementById('bttnr')
var bttns = document.getElementById('bttns')
function leftClick() {
	bttn.style.backgroundColor = 'white'
	bttns.style.backgroundColor = 'white'
	bttnr.style.backgroundColor = 'blue'
}
var bttn = document.getElementById('bttn')
var bttnr = document.getElementById('bttnr')
var bttns = document.getElementById('bttns')
function rightClick() {
	bttnr.style.backgroundColor = 'white'
	bttn.style.backgroundColor = 'white'
	bttns.style.backgroundColor = 'blue'
}
$(document).ready(function() {
	$("#bttn").click(function() {
	$("#bdrr").hide();
	$("#bdrs").hide();
	$("#bdr").show();
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


$(".slider").owlCarousel({
	loop: true,
	autoplay: true,
	autoplayTimeout: 2000, //2000ms = 2s;
	autoplayHoverPause: true,
});