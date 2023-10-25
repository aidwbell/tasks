import React, { ChangeEvent, useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [selectedChoice, setSelectedChoice] = useState(options[0]);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(false); // Initialize as false

    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const userAnswer = e.target.value;
        setSelectedChoice(userAnswer);
        setIsAnswerCorrect(userAnswer === expectedAnswer); // Update the answer correctness
    };

    return (
        <div>
            <p>Multiple Choice Question</p>
            <select onChange={handleSelectChange} value={selectedChoice}>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <div>
                {isAnswerCorrect ? "✔️" : "❌"}{" "}
                {/* Display ✔️ if correct, ❌ if not */}
            </div>
        </div>
    );
}
