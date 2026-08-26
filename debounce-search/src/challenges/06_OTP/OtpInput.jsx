import "./Otpinput.css"

import { useEffect, useRef, useState } from "react"

export default function OtpInput({OtpLength = 4}){
    const [otpField, setOtpField] = useState(new Array(OtpLength).fill("0"));
    const inputRef = useRef([]);  // useref use kia becuse particular feild pe focus chyie the jo usestate se possible nai 

    const handleKeyDown = (e, index) => {
        const key = e.key;
        console.log(key);

        if(key === "ArrowRight"){
            if (index + 1 < otpField.length) inputRef.current[index + 1].focus();
            return;
        }
        if(key === "ArrowLeft") {
            if (index - 1 >=0) inputRef.current[index-1].focus();
            return;
        }
        const copyOtpFields = [...otpField];
        if(key === "Backspace"){
            copyOtpFields[index] = "";
            setOtpField(copyOtpFields);
            if(index - 1 >= 0) inputRef.current[index - 1].focus();
            return;
        }
        if(isNaN(key)){  // only number accepted 
            return;
        }
        // const copyOtpFields = [...otpField];  // first copy all old aarray 
        copyOtpFields[index] = key;
        if (index + 1 < otpField.length) inputRef.current[index + 1].focus();    //next step otp logic like if we dont check otpfeild is small or not then its probaly give a error 
        setOtpField(copyOtpFields);
    }

    // for focus on mounting when user first arive on page use useEffect for this 
    useEffect(()=> {
        inputRef.current["0"].focus();
    }, [])
    return (
        <div className="container">
            {otpField.map((value, index)=> {
                return (
                    <input 
                    key={index}
                    value={value}
                    onKeyDown={(e) => handleKeyDown (e, index)}
                    ref={(currentInput) => (inputRef.current[index]) = currentInput}
                    type="text" 
                    className="OtpInput"
                    />
                )
            })}
        </div>
    )
}