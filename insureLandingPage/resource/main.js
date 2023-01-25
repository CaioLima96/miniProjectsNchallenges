let headerNavMenu = document.getElementById("headerNavMenu")

function myNavBar() {
	headerNavMenu.classList.toggle('hideShowHeaderNavMenu')
}

function closeNavBar() {
    headerNavMenu.classList.remove('hideShowHeaderNavMenu')
}