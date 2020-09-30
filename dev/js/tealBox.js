import {gsap} from "gsap";

gsap.set(".teal-box",{borderRadius: "20"});

export function tealBoxAnimation(){

    var tl = gsap.timeline();
   tl.from(".teal-box",{duration: 2, x:400, y:300})
    .to(".teal-box",{duration: 2, rotation:270})
    .to(".teal-box",{duration: 1, borderRadius: "100"})
    .to(".teal-box",{duration: 2, x:800, y:200})
    .to(".teal-box",{duration: 1, borderRadius: "200"})
    .to(".teal-box",{duration: 2, scale: 2});

    return tl;

}