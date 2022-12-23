import {useEffect, useState} from "react";
import {Colors} from "../api/colors";
import {Inspire} from "../api/inspire";
import {PostContainer} from "./postContainer";


function App(){

    const [quotes, setQuotes] = useState([]);
    const insp = new Inspire();
    useEffect(()=>{
        insp.quotes().then(data =>{
            setQuotes(data)
        })
    },[])
    const [colors, setColors] = useState([]);
    const col = new Colors();
    useEffect(()=>{
        col.tagged().then(data =>{
            setColors(data)
        })
    },[])
    const [color, setColor] = useState(["fff", "000"]);
    const [quote, setQuote] = useState({text:"to inspiration click button next", author:"."})
    const [click, setClick] = useState(0);
    function next() {
        setClick(click+1);
        const count = colors.colors.length
        const [f,s] = [Math.floor(Math.random() * count/2),
            Math.floor(Math.random() * count/2 + count/2)];
        setColor([colors.colors[f].hex, colors.colors[s].hex]);
        setQuote(quotes[click])
    }

    return(
        <main className='main'>
            <PostContainer colors={color} quote={quote} click={click}/>
            <button id='next_but' onClick={next} className="btn">next</button>
        </main>
    )
}

export {App};