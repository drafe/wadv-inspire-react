function PostContainer(props) {
    const [w,h,font_size, max_let] = [500, 300, 20, 44];
    // const [s_w, s_h] = ["${w}", h/2]
    const [q_w, q_h] = [w*0.5, h*0.4]
    const [a_w, a_h] = [w*0.9, h*0.8]
    // console.log(props.colors)
    let quote_lines = []
    let t = props.quote.text
    while (t.length > max_let){
        const i = t.slice(0, max_let).lastIndexOf(" ")
        quote_lines.push(t.slice(0,i))
        t = t.slice(i)
    }
    quote_lines.push(t)
    console.log(quote_lines)

    return (
        <div className="postContainer">
            <svg className="post" fill="none" width={w+"px"} height={h+"px"} xmlns="http://www.w3.org/2000/svg">
                <linearGradient id={"gradient"} x1="0%" x2="100%" y1="0%" y2="100%">
                    <stop id="gradient-left" offset="0%" stopColor={props.colors[0]} stopOpacity="1"/>
                    <stop id="gradient-right" offset="100%" stopColor={props.colors[1]} stopOpacity="1"/>
                </linearGradient>

                <rect id="background" x="0" y="0" width={w+"px"} height={h+"px"} rx="10" ry="10"
                      style={{fill:"url(#gradient)"}}
                />
                <text x={q_w+"px"} y={q_h+"px"} fill="black" fontSize="20px" textAnchor="middle">
                    {quote_lines.map(qt => {
                        return <tspan dy={"1.1em"} x={q_w+"px"} textAnchor="middle">{qt}</tspan>
                    })}
                </text>
                <text x={a_w+"px"} y={a_h+"px"} fill="black" fontSize="18px" textAnchor="end">{props.quote.author}</text>;

            </svg>
        </div>
    );
}

export {PostContainer}