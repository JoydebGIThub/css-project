document.addEventListener("mousemove",(e)=>{
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;

    document.querySelectorAll(".parallax").forEach((element)=>{
        const speed= element.getAttribute("data-speed");
        element.style.transform = `translate(${x*speed*20}px, ${y*speed*20}px)`
    })
})

//Signin page open and close Animation
const signinButton= document.getElementById("signinButton");
const signinPage = document.getElementById("signinPage");
const closeIcon = document.getElementById("closeIcon");

signinButton.addEventListener('click', ()=>{
    signinPage.classList.remove("closeSignin");
    signinPage.classList.add("openSignin");
})

closeIcon.addEventListener('click', ()=>{
    signinPage.classList.remove("openSignin");
    signinPage.classList.add("closeSignin");
})