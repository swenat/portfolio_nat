function toggleMenu() {
	const menu = document.querySelector(".menu-links");
	const icon = document.querySelector(".hamburger-icon");
	menu.classList.toggle("open");
	icon.classList.toggle("open");
}
function openModal() {
	document.getElementById("noodletimeModal").style.display = "block";
}

function closeModal() {
	document.getElementById("noodletimeModal").style.display = "none";
}

// Stänger modalen om användaren klickar utanför innehållet
window.onclick = function (event) {
	const modal = document.getElementById("noodletimeModal");
	if (event.target === modal) {
		modal.style.display = "none";
	}
};
