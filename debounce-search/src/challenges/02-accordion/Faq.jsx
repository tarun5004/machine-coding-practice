import Accordition from "./Accordition";
import data from "./data.json"

export default function Faq() {
    return (
        <div>
            <h1>FAQ's</h1>
            {data.faqs.map((obj) => {
                return <Accordition key={obj.id} qna={obj}/>
            })}
        </div>
    )
}