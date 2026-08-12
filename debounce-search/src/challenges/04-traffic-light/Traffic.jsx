import { useEffect, useState } from "react";
import Signals from "./Signals";

export default function Traffic() { 
    const lights = ["green", "yellow", "red"]
    const [active, setActive] = useState(0)

    useEffect(()=> {
        const intervalId = setInterval(()=> {
            setActive(prev => (prev + 1) % lights.length);
        },5000)
        return()=> {
            clearInterval(intervalId);
        }
    },[])



    // const intervalId = setInterval(()=> {
    //     setActive(prev => (prev + 1) % lights.length)
    // }, 1000)
    return (
        <>
        {lights.map((color, index)=> {
            return <Signals 
            key={color} 
            isActive={active === index} 
            color={color} />
        } )}
        </>
    )
}