const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

left.addEventListener("mouseenter", () => {
	container.classList.add("hover-left");
});

left.addEventListener("mouseleave", () => {
	container.classList.remove("hover-left");
});

right.addEventListener("mouseenter", () => {
	container.classList.add("hover-right");
});

right.addEventListener("mouseleave", () => {
	container.classList.remove("hover-right");
});

$(document).ready(function() {
	$(".menu-icon").on("click", function() {
		$("nav ul").toggleClass("showing");
	});
});

$(window).on("scroll", function() {
	if ($(window).scrollTop()) {
		$("nav").addClass("black");
	} else {
		$("nav").removeClass("black");
	}
});
