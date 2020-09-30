import {gsap} from "gsap";

export function tealBoxAnimation(){

    var tl = gsap.timeline();
   tl.to(".teal-box",{duration: 0, borderRadius: "20"},"-=8")
    .from(".teal-box",{duration: 2, x:400, y:300},"-=8")
    .to(".teal-box",{duration: 2, rotation:270})
    .to(".teal-box",{duration: 2, borderRadius: "100"},"-=3")
    .to(".teal-box",{duration: 3, x:800, y:200},"-=2")
    .to(".teal-box",{duration: 2, borderRadius: "200"},"-=2")
    .to(".teal-box",{duration: 2, scale: 2},"-=2");

        return tl;

}