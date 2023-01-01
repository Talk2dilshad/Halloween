'use strict';

//mobile navbar toggle

const[navToggler,navbar]=[
    document.querySelector("[data-nav-toggler]"),
    document.querySelector("[data-navbar]")
]

const toggleNav= function(){
    navbar.classList.toggle("active");
    this.classList.toggle("active");
}

navToggler.addEventListener("click",toggleNav);
