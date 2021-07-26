let scrolled = false;
let parallaxTitles = document.querySelectorAll(".parallax-title");
const scrollInProgress = () =>{
    scrolled = true;
}
const r = () =>{
    if(scrolled){
        parallaxTitles.forEach((element,index)=>{
            element.style.transform = "translateX(-"+ window.scrollY/20 +"%)";
        })
        scrolled = false;
    }
    requestAnimationFrame(r);
}
let photograph = document.querySelector('.photo')
requestAnimationFrame(r);
window.addEventListener('scroll', scrollInProgress);
