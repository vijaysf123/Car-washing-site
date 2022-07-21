"use strict"


let navbar = document.querySelector('.navbar')
let menubtn = document.getElementById("menu");
let search = document.getElementById("search")

menu.addEventListener('click', function(){
    if(navbar.classList.toggle('active')){
        search.style.visibility = "visible"
        search.style.zIndex = "1000"
    }else{
        search.style.visibility = "hidden"
    }
});