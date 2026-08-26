import { useState } from "react"
import "./Star.css"

export default function Star({starCount = 5}) {
    const [starValue, setStarValue] = useState(0);
    const [hover, setHover] = useState();
    console.log(starValue);
    return (
        <div className="container">
            {new Array(starCount).fill(0).map((value, index) => {
                return (
                <span 
                key={index} 
                className={hover === 0 && index < starValue || index < hover ? "gold" : ""}
                onClick={()=>setStarValue(index + 1)}
                onMouseEnter={()=> setHover(index + 1)}
                onMouseLeave={()=> setHover(0)}
                >
                    &#9733;
                </span>
            )})}
        
        </div>
    )
}