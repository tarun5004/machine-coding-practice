import "./Signals.css"

export default function Signals({color, isActive}) {
    return (
        <div 
        className="signals"
        style={{backgroundColor: isActive? `${color}` : "dimgray"}}
        ></div>
    )
}