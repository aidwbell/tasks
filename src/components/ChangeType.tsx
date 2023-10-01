import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    // Define a state variable to manage the question type
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );

    // Function to toggle the question type between "multiple_choice_question" and "short_answer_question"
    const toggleQuestionType = () => {
        // Toggle the type based on the current value
        if (questionType === "short_answer_question") {
            setQuestionType("multiple_choice_question");
        } else {
            setQuestionType("short_answer_question");
        }
    };

    return (
        <div>
            <Button onClick={toggleQuestionType}>Change Type</Button>
            {/* Render the appropriate text based on the question type */}
            {questionType === "multiple_choice_question" && (
                <div>Multiple Choice</div>
            )}
            {questionType === "short_answer_question" && (
                <div>Short Answer</div>
            )}
        </div>
    );
}
