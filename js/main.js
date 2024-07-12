$(document).ready(function(){
$(".owl-carousel.hero").owlCarousel({
items: 1,
loop: true,
autoplay: true,
autoplayTimeout: 5000,
autoplayHoverPause: true,
autoHeight: true,
});
});

$(document).ready(function(){
$(".owl-carousel.sections").owlCarousel({
items: 2,
autoplay: true,
autoplayTimeout: 5000,
autoplayHoverPause: true,
autoHeight: true,
responsive: {
0: {
items: 3
},

768: {
items: 4
},

992: {
items: 6
},
},
margin: 20,
});
});

$(document).ready(function(){
$(".owl-carousel.products").owlCarousel({
items: 2,
autoplay: true,
autoplayTimeout: 5000,
autoplayHoverPause: true,
autoHeight: true,
responsive: {
0: {
items: 1
},
768: {
items: 3
},
1200: {
items: 5
},
},
margin: 20,
});
});

// scroll animation
const sr = ScrollReveal({
origin: "left",
distance: "20px",
duration: 1000,
delay: 500,
});

sr.reveal(".left-side-1sec");

sr.reveal(".reveal");

gsap.fromTo(
".loading-page",
{ opacity: 1 },
{
opacity: 0,
duration: 1,
display: "none",
delay: 2,
}
);