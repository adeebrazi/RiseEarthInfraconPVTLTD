let menu_Icon = document.getElementById("hamburger_icon");


menu_Icon.addEventListener("click", () => {
	menu_Icon.classList.toggle("click");
	document.getElementById("main-menu").classList.toggle("active");
})