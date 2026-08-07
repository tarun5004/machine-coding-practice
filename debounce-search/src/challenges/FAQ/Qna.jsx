export default function Qna({ qna, showAns, handleQna }) {
    return (
        <div className="qna">

            {/* Question + Toggle Button */}
            <div className="qna-header">
                <h3>{qna.question}</h3>

                <button
                    className="toggle-btn"
                    onClick={handleQna}
                >
                    {showAns ? "-" : "+"}
                </button>
            </div>

            {/* Show answer only if this FAQ is active */}
            {showAns && (
                <p className="answer">
                    {qna.answer}
                </p>
            )}

        </div>
    );
}