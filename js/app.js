let btnMenu = document.querySelector(".btn-menu");
let menu = document.querySelector(".list-container");
let containerMenu = document.querySelector(".menu")
let activator = true; 
btnMenu.addEventListener('click',()=>{
    document.querySelector('.btn-menu i').classList.toggle('fa-times');
    if(activator){
        menu.style.left = "0";
        menu.style.transition = "0.5s";
        activator = false;
    } else{ 
        menu.style.left = "-1000px";
        menu.style.transition = "0.5s";
        activator = true;
    }
})
//Intercalate class 'Activo'
let links = document.querySelectorAll(".lists li a");
links.forEach((Element)=>{
    Element.addEventListener('cick',(event)=>{
        links.forEach((link)=>{
            link.classList.remove('activo');
        })
        event.target.classList.add('activo');
    })
})

//Scroll Effect
let prevScrollPos = window.pageYOffset
let goTop = document.querySelector('.go-top')
window.onscroll= ()=>{
    let currentScrollPos=window.pageYOffset
    //show and hide menu
    if(prevScrollPos > currentScrollPos){
        containerMenu.style.top="0"
        containerMenu.style.transition="0.5s"        
    }else{
        containerMenu.style.top="-60px"
        containerMenu.style.transition="0.5s" 
    }
    prevScrollPos=currentScrollPos

    //Show and hide Scroll style
    let up = window.pageYOffset
    if(up <= 600){
        containerMenu.style.borderBottom = "none"
        goTop.style.right="-100%";
    }else{
        containerMenu.style.borderBottom = "3px Solid #ff2e63"
        goTop.style.right = "0%";
        goTop.style.transition="0.5s";
    }
}
goTop.addEventListener('click', ()=>{
    document.body.scrollTop=0
    document.documentElement.scrollTop=0

;})
let seeDown = document.querySelector("#Down")
seeDown.addEventListener('click', ()=>{
    document.body.scrollTop=600
    document.documentElement.scrollTop=600
})