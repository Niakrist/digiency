const mobileMenu = document.querySelector('.burger__button'); 
const mobileMenuOpenClass = document.querySelector('.nav-mob');


mobileMenu.addEventListener('click', function() {
    mobileMenuOpenClass.classList.toggle('open-mob-menu');
})
