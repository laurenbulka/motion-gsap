
import {gsap} from "gsap";

gsap.set(".red-box",{borderRadius: "100"});

export function redBoxAnimation(){

    var tl = gsap.timeline();
    tl.to(".red-box",{duration: 4, x:800, y:200})
            .to(".red-box",{duration: 4, x:300, y:400})
            .to(".red-box",{duration: 2, scale: 2});

    return tl;

}



