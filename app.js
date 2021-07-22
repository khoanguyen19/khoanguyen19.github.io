const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const navbar = $('.navbar');
const faqBtn = $$('.faq-question');
const navbarContainer = $('.navbar-container');
const navbarMenu = $('.navbar-menu');
const navbarToggle = $('.navbar-toggler');
const navbarLink = $$('.navbar-link');
const navbarMenuStyle = getComputedStyle(navbarMenu);

console.dir(navbarMenu);

document.onscroll = function() {
    if(window.scrollY) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
}

Array.from(faqBtn).forEach(button => {
    button.addEventListener('click', function(e) {
        const faqElement = e.target;
        if(faqElement.parentElement.matches('.active')){
            faqElement.parentElement.classList.remove('active');
        } else {
            faqElement.parentElement.classList.add('active');
        }
    })
})

navbarToggle.onclick = function() {
    if(navbarMenuStyle.display == 'none'){
        navbarContainer.classList.add('active');
    } else {
        navbarContainer.classList.remove('active');
    }
}

Array.from(navbarLink).forEach(link => {
    link.addEventListener('click', function() {
        if(navbarContainer.classList.contains('active')) {
            navbarContainer.classList.remove('active');
        }
    })
})