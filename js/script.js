let enlaces_header = document.querySelectorAll(".enlaces-header")[0];
let ico_hamburger = true;

document.querySelectorAll(".hamburger")[0].addEventListener("click", function(){
    if(ico_hamburger){
        document.querySelectorAll(".hamburger")[0].style.color ="#fff";
        ico_hamburger= false;
    }else{
        document.querySelectorAll(".hamburger")[0].style.color ="#000";
        ico_hamburger= true;
    }

    enlaces_header.classList.toggle("hamburgeropen");
})

document.querySelectorAll(".enlaces-header")[0].addEventListener("click", function(){
    enlaces_header.classList.toggle("hamburgeropen");
    document.querySelectorAll(".hamburger")[0].style.color ="#000";
})