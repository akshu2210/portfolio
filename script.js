
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });
},{
    threshold:0.2
});

sections.forEach(section=>{
    observer.observe(section);
});


// ===============================
// Typing Effect
// ===============================

const roles=[
    "Web Developer",
    "Python Developer",
    "B.Tech IT Student",
    "Frontend Enthusiast"
];

const roleText=document.querySelector(".hero-text h2");

let roleIndex=0;
let charIndex=0;
let deleting=false;

function typeEffect(){

    const currentRole=roles[roleIndex];

    if(!deleting){

        roleText.textContent=currentRole.substring(0,charIndex);

        charIndex++;

        if(charIndex>currentRole.length){

            deleting=true;

            setTimeout(typeEffect,1200);

            return;

        }

    }

    else{

        roleText.textContent=currentRole.substring(0,charIndex);

        charIndex--;

        if(charIndex===0){

            deleting=false;

            roleIndex++;

            if(roleIndex===roles.length){
                roleIndex=0;
            }

        }

    }

    setTimeout(typeEffect,deleting?50:100);

}

typeEffect();


// ===============================
// Back To Top Button
// ===============================

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};


// ===============================
// Active Navigation
// ===============================

const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-150;

        if(pageYOffset>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});