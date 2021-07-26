let scrolled = false;
let parallaxTitles = document.querySelectorAll(".parallax-title");
const scrollInProgress = () =>{
    scrolled = true;
}
const r = () =>{
    if(scrolled){
        parallaxTitles.forEach((element,index)=>{
            element.style.transform = "translateX(-"+ window.scrollY/20 +"%)"
        })
        scrolled = false;
    }
    requestAnimationFrame(r);
}
let photograph = document.querySelector('.photo')
const photo = () => {
    if(scrolled){
        photograph.style.transform = "translateX("+ window.scrolY/30 +"%) rotate("+ window.scrollY + 80 +"deg)"
    }
    scrolled = false;
    requestAnimationFrame(photo);
}
requestAnimationFrame(r);
requestAnimationFrame(photo);
window.addEventListener('scroll', scrollInProgress);