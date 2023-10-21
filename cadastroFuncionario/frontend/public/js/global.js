// ========================= NAVBAR =========================

let menuBtn = document.getElementsByClassName('navMenuBtn')[0]
let menu = document.getElementsByClassName('navMenu')[0]

menuBtn.addEventListener('click', () => {
  console.log(menuBtn)
  menu.classList.toggle('hideShowNavMenu')
})

document.addEventListener('click', (event) => {
  if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
    menu.classList.remove('hideShowNavMenu')
  }
});