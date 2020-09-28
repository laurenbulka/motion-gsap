import {gsap} from "gsap";


/* -----------------
    Demo Script
----------------- */



gsap.to(".red-box",{duration: 0, borderRadius: "100"});
gsap.to(".red-box",{duration: 4, x:800, y:200, delay: 1});
gsap.to(".red-box",{duration: 4, x:300, y:400, delay: 4});
gsap.to(".red-box",{duration: 2, scale: 2, delay:3});

gsap.to(".teal-box",{duration: 0, borderRadius: "100"});
gsap.from(".teal-box",{duration: 2, x:400, y:300, delay:1});
gsap.to(".teal-box",{duration: 4, x:800, y:200, delay: 4});
gsap.from(".teal-box",{duration: 2, borderRadius: "200", delay: 5});
gsap.from(".teal-box",{duration: 2, rotation:270, borderRadius:"20", delay:3});
gsap.to(".teal-box",{duration: 2, scale: 2, delay:4});