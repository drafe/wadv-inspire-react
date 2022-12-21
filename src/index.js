import {React} from "react"
import ReactDOM from "react-dom/client";
import {App} from "./components/app";

document.addEventListener("DOMContentLoaded", setup)

function setup() {
    const root = ReactDOM.createRoot(document.getElementById('app'))
    const element = <App />
    root.render(element)
}

// import {Inspire} from "./inspire";
// import {Colors} from "./colors";
//
// document.addEventListener("DOMContentLoaded", setup)
//
// let palette=[];
// let quotes;
// let i_q=0;
//
// function setup(){
//     create_svg('postContainer');
//     const button = document.getElementById('next_but');
//     button.onclick = nextQuote;
//     const insp = new Inspire();
//     insp.quotes().then(qs => quotes=qs);
//
//     const col = new Colors();
//     col.tagged().then(cs => cs.colors.forEach(c => palette.push(c)));
// }
//
// function create_svg(container ){
//     const [w,h,font_size, max_let] = [500, 300, 20, 44];
//     const iconSvg = document.getElementById('svg');
//     iconSvg.setAttribute('width', `${w}px`);
//     iconSvg.setAttribute('height', `${h}px`);
//
//     const textSvg = document.getElementById('text');
//     textSvg.setAttribute("x", `${w/2}px`);
//     textSvg.setAttribute("y", `${h/2}px`);
//     textSvg.setAttribute("font-size", `${font_size}px`);
//
//     const authSvg = document.getElementById('author');
//     authSvg.setAttribute("y", `${h*0.8}`);
//     authSvg.setAttribute("x", `${w*0.9}`);
//     authSvg.setAttribute("font-size", `${font_size-2}px`);
//
//     const rect = document.getElementById('background');
//     rect.setAttribute("height", `${h}`);
//     rect.setAttribute("width", `${w}`);
// }
// function nextQuote(){
//     const count = palette.length;
//     const [f,s] = [Math.floor(Math.random() * count/2), Math.floor(Math.random() * count/2 + count/2)]
//     draw(quotes[i_q], [palette[f], palette[s]]);
//     i_q+=1;
//
// }
//
// // todo text wraping
// function draw(text, colors=[]) {
//     const txt = document.getElementById("text");
//     const author = document.getElementById("author");
//     const left = document.getElementById("gradient-left");
//     const right = document.getElementById("gradient-right");
//     txt.innerHTML=text.text;
//     author.innerHTML=text.author;
//
//     left.setAttribute('stop-color', `#${colors[0].hex}`)
//     right.setAttribute('stop-color', `#${colors[1].hex}`)
//     // console.log("draw")
//     // console.log(colors)
//
// }
