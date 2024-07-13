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

const sr = ScrollReveal({
origin: "bottom",
distance: "50px",
duration: 900,
});

sr.reveal(".reveal", { delay: 1000 });
sr.reveal(".reveal2 ", { delay: 800 });

gsap.fromTo(
".loading-page",
{ opacity: 1 },
{
opacity: 0,
duration: 1,
display: "none",
delay: 1,
}
);