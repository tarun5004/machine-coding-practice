import { useState } from "react";
import "./Faqq.css";
import Qna from "./Qna";

export default function Faq({ data }) {

    // Stores the index of the currently opened FAQ.
    // -1 means no FAQ is open.
    const [showIndex, setShowIndex] = useState(-1);

    // Opens the clicked FAQ.
    // If the same FAQ is clicked again, it closes.
    const handleQna = (index) => {
        setShowIndex((prevIndex) => {
            if (prevIndex === index) {
                return -1;
            }
            return index;
        });
    };

    return (
        <div className="faq-container">
            {data.faqs.map((qna, index) => (
                <Qna
                    key={index}
                    qna={qna}
                    showAns={index === showIndex}
                    handleQna={() => handleQna(index)}
                />
            ))}
        </div>
    );
}