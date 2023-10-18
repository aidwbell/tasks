import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserAnswer(e.target.value);
    };

    return (
        <div>
            <h3>Check Answer</h3>
            <input
                type="text"
                placeholder="Enter your answer"
                value={userAnswer}
                onChange={handleInputChange}
            />
            {userAnswer === expectedAnswer ? <span>✔️</span> : <span>❌</span>}
        </div>
    );
}
