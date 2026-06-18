/* ==========================================
   PORTFOLIO SCRIPT
========================================== */

// ================= Loader =================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 2200);

});

// ================= Typed Effect =================

new Typed("#typing", {

    strings: [

        "Web Developer",

        "Frontend Developer",

        "AI Creator",

        "UI Designer",

        "Freelancer"

    ],

    typeSpeed: 80,

    backSpeed: 50,

    backDelay: 1500,

    loop: true

});

// ================= Custom Cursor =================

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});

document.querySelectorAll("a, button").forEach((item) => {

    item.addEventListener("mouseenter", () => {

        cursor.classList.add("active");

    });

    item.addEventListener("mouseleave", () => {

        cursor.classList.remove("active");

    });

});

// ================= Scroll Progress =================

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const height =

        document.documentElement.scrollHeight -

        document.documentElement.clientHeight;

    const progress = (scrollTop / height) * 100;

    document.getElementById("progress-bar").style.width = progress + "%";

});

// ================= Navbar Blur =================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.background = "rgba(3,7,18,.85)";
        header.style.backdropFilter = "blur(20px)";
        header.style.boxShadow = "0 10px 35px rgba(0,0,0,.35)";

    }

    else {

        header.style.background = "transparent";
        header.style.boxShadow = "none";

    }

});

// ================= GSAP Intro =================

gsap.from(".logo", {

    y: -80,

    opacity: 0,

    duration: 1

});

gsap.from(".navbar ul li", {

    y: -50,

    opacity: 0,

    duration: .8,

    stagger: .15,

    delay: .3

});

gsap.from(".hire-btn", {

    x: 120,

    opacity: 0,

    duration: 1,

    delay: .5

});

gsap.from(".hero-left h1", {

    x: -120,

    opacity: 0,

    duration: 1.2,

    delay: .8

});

gsap.from(".hero-left p", {

    y: 50,

    opacity: 0,

    duration: 1,

    delay: 1

});

gsap.from(".hero-buttons a", {

    y: 40,

    opacity: 0,

    stagger: .2,

    delay: 1.3

});

gsap.from(".profile-card", {

    scale: .7,

    rotate: 10,

    opacity: 0,

    duration: 1.4,

    delay: .9

});

// ================= Floating Card =================

gsap.to(".profile-card", {

    y: -20,

    repeat: -1,

    yoyo: true,

    duration: 3,

    ease: "power1.inOut"

});

// ================= Reveal Animation =================

const revealItems = document.querySelectorAll("section");

const observer = new IntersectionObserver(

(entries) => {

entries.forEach((entry)=>{

if(entry.isIntersecting){

gsap.from(entry.target,{

opacity:0,

y:80,

duration:1

});

}

});

},

{

threshold:.2

}

);

revealItems.forEach((section)=>{

observer.observe(section);

});

// ================= Magnetic Buttons =================

document.querySelectorAll(".hero-buttons a").forEach(button=>{

button.addEventListener("mousemove",(e)=>{

const rect=button.getBoundingClientRect();

const x=e.clientX-rect.left-rect.width/2;

const y=e.clientY-rect.top-rect.height/2;

button.style.transform=`translate(${x*0.2}px,${y*0.2}px)`;

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translate(0,0)";

});

});

// ================= Smooth Scroll =================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

target.scrollIntoView({

behavior:"smooth"

});

});

});

console.log("🚀 Nirbhay Portfolio Loaded Successfully");
// ABOUT ANIMATION

gsap.from(".about-image",{

scrollTrigger:{

trigger:".about-image",

start:"top 80%"

},

x:-150,

opacity:0,

duration:1.2

});

gsap.from(".about-content",{

scrollTrigger:{

trigger:".about-content",

start:"top 80%"

},

x:150,

opacity:0,

duration:1.2

});

gsap.from(".info-card",{

scrollTrigger:{

trigger:".about-info",

start:"top 80%"

},

y:80,

opacity:0,

stagger:.25,

duration:1

});
/* ===========================
SKILL BAR ANIMATION
=========================== */

const skillCards = document.querySelectorAll(".skill-card");

const skillObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const bar = entry.target.querySelector(".skill-bar span");

const width = bar.getAttribute("style");

bar.style = width;

}

});

},{

threshold:.5

});

skillCards.forEach(card=>{

skillObserver.observe(card);

});

/* ===========================
HOVER TILT
=========================== */

skillCards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;

const y = e.clientY - rect.top;

const rotateX = (y-rect.height/2)/18;

const rotateY = -(x-rect.width/2)/18;

card.style.transform =

`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="perspective(1000px) rotateX(0) rotateY(0)";

});

});
/*=========================
SERVICES ANIMATION
==========================*/

gsap.from(".service-card",{

scrollTrigger:{

trigger:".services-grid",

start:"top 75%"

},

opacity:0,

y:100,

duration:1,

stagger:.25

});

/*=========================
MAGNET EFFECT
==========================*/

document.querySelectorAll(".service-card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.background=

`radial-gradient(circle at ${x}px ${y}px,
rgba(6,182,212,.15),
rgba(255,255,255,.05))`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="rgba(255,255,255,.05)";

});

});
/*=========================
PROJECT FILTER
=========================*/

const filterButtons=document.querySelectorAll(".project-filter button");
const cards=document.querySelectorAll(".project-card");

filterButtons.forEach(button=>{

button.addEventListener("click",()=>{

filterButtons.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

const filter=button.dataset.filter;

cards.forEach(card=>{

if(filter==="all" || card.dataset.category===filter){

card.style.display="block";

gsap.fromTo(card,
{opacity:0,y:40},
{opacity:1,y:0,duration:.5});

}

else{

card.style.display="none";

}

});

});

});

/*=========================
PROJECT HOVER TILT
=========================*/

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateX=(y-rect.height/2)/20;
const rotateY=-(x-rect.width/2)/20;

card.style.transform=
`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="perspective(1000px) rotateX(0) rotateY(0)";

});

});

/*=========================
PROJECT REVEAL
=========================*/

gsap.from(".project-card",{

scrollTrigger:{
trigger:".projects-grid",
start:"top 80%"
},

opacity:0,
y:80,
duration:1,
stagger:.2

});
/*===============================
TIMELINE ANIMATION
================================*/

gsap.from(".timeline-item",{

scrollTrigger:{

trigger:".timeline",

start:"top 80%"

},

opacity:0,

x:function(i){

return i%2===0?-120:120;

},

duration:1,

stagger:.3

});

/*===============================
TIMELINE DOT GLOW
================================*/

gsap.to(".timeline-dot",{

scale:1.4,

repeat:-1,

yoyo:true,

duration:1,

stagger:.2

});
/*=========================
TESTIMONIAL AUTO SLIDER
=========================*/

let slider=document.querySelector(".testimonial-slider");

let scroll=0;

setInterval(()=>{

scroll+=380;

if(scroll>=slider.scrollWidth-slider.clientWidth){

scroll=0;

}

slider.scrollTo({

left:scroll,

behavior:"smooth"

});

},3500);

/*=========================
CONTACT FORM
=========================*/

document.querySelector(".contact-form")
.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you! Your message has been received.");

});
/*============================
BACK TO TOP
=============================*/

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.classList.add("show");

}else{

topBtn.classList.remove("show");

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

/*============================
THEME TOGGLE
=============================*/

const theme=document.getElementById("themeToggle");

theme.onclick=()=>{

document.body.classList.toggle("light");

};

/*============================
LIGHT MODE
=============================*/

if(localStorage.getItem("theme")=="light"){

document.body.classList.add("light");

}

theme.onclick=()=>{

document.body.classList.toggle("light");

localStorage.setItem(

"theme",

document.body.classList.contains("light")?

"light":"dark"

);

};
/*=========================
MOBILE MENU
=========================*/

const menu=document.querySelector(".menu-toggle");

const nav=document.querySelector(".navbar ul");

menu.addEventListener("click",()=>{

nav.classList.toggle("active");

menu.classList.toggle("open");

});

/* Close menu on click */

document.querySelectorAll(".navbar a").forEach(link=>{

link.addEventListener("click",()=>{

nav.classList.remove("active");

menu.classList.remove("open");

});

});