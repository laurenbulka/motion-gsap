
import {gsap} from "gsap";

export function redBoxAnimation(){

    var tl = gsap.timeline();
    tl.to(".red-box",{duration: 0, borderRadius: "100"})
            .to(".red-box",{duration: 3, x:800, y:200})
            .to(".red-box",{duration: 3, x:300, y:400})
            .to(".red-box",{duration: 2, scale: 2});

    return tl;

}


