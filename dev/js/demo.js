import {gsap} from "gsap";


/* -----------------
    Demo Script
----------------- */
var boxAnimationTL = gsap.timeline();


boxAnimationTL.to(".red-box",{duration: 0, borderRadius: "100"})
        .to(".red-box",{duration: 3, x:800, y:200})
        .to(".red-box",{duration: 2, x:300, y:400})
        .to(".red-box",{duration: 2, scale: 2}, "2");

boxAnimationTL.to(".teal-box",{duration: 0, borderRadius: "20"},"-=7")
        .from(".teal-box",{duration: 3, x:400, y:300},"-=5")
        .to(".teal-box",{duration: 2, rotation:270, borderRadius:"20"},"-=3")
        .to(".teal-box",{duration: 1, borderRadius: "100"},"-=3")
        .to(".teal-box",{duration: 2, x:800, y:200},"-=2")
        .to(".teal-box",{duration: 2, scale: 2},"-=2")
        .to(".teal-box",{duration: 2, borderRadius: "200"},"-=2");
