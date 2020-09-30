//import * as Demo from './demo.js';


import {gsap} from "gsap";
import {redBoxAnimation} from "./redBox.js"
import {tealBoxAnimation} from "./tealBox.js"



 const mainTL = gsap.timeline();
    mainTL.add(redBoxAnimation(),"startTogether")
       .add(tealBoxAnimation(),"startTogether")
       //.addlabel(tealBox)
       //.seek(tealBox)
       .play();
