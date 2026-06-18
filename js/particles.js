const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

let w,h;
let particles=[];

function resize(){

w=canvas.width=window.innerWidth;
h=canvas.height=window.innerHeight;

}

window.addEventListener("resize",resize);

resize();

class Particle{

constructor(){

this.x=Math.random()*w;
this.y=Math.random()*h;

this.vx=(Math.random()-.5)*1.2;
this.vy=(Math.random()-.5)*1.2;

this.size=Math.random()*3+1;

}

draw(){

ctx.beginPath();

ctx.arc(this.x,this.y,this.size,0,Math.PI*2);

ctx.fillStyle="rgba(6,182,212,.8)";

ctx.fill();

}

update(){

this.x+=this.vx;

this.y+=this.vy;

if(this.x<0||this.x>w)this.vx*=-1;
if(this.y<0||this.y>h)this.vy*=-1;

this.draw();

}

}

for(let i=0;i<120;i++){

particles.push(new Particle());

}

function connect(){

for(let a=0;a<particles.length;a++){

for(let b=a+1;b<particles.length;b++){

const dx=particles[a].x-particles[b].x;

const dy=particles[a].y-particles[b].y;

const dist=Math.sqrt(dx*dx+dy*dy);

if(dist<140){

ctx.beginPath();

ctx.moveTo(particles[a].x,particles[a].y);

ctx.lineTo(particles[b].x,particles[b].y);

ctx.strokeStyle=`rgba(37,99,235,${1-dist/140})`;

ctx.lineWidth=.5;

ctx.stroke();

}

}

}

}

function animate(){

ctx.clearRect(0,0,w,h);

particles.forEach(p=>p.update());

connect();

requestAnimationFrame(animate);

}

animate();

/* Mouse Spotlight */

document.addEventListener("mousemove",(e)=>{

document.body.style.setProperty("--mx",e.clientX+"px");

document.body.style.setProperty("--my",e.clientY+"px");

});