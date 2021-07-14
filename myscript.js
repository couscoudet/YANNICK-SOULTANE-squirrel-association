//Navbar burger toggle
document.querySelector(".navbar-burger").onclick = () => {
    document.querySelector(".navbar-burger").classList.toggle('is-active');
    document.querySelector("#navbar-menu").classList.toggle('is-active')
}