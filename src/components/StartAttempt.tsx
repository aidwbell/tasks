import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    // Define state variables for the number of attempts and quiz progress
    const [attempts, setAttempts] = useState<number>(4);
    const [quizInProgress, setQuizInProgress] = useState<boolean>(false);

    // Function to start the quiz and decrease the number of attempts
    const startQuiz = () => {
        if (attempts > 0) {
            setQuizInProgress(true);
            setAttempts(attempts - 1);
        }
    };

    // Function to stop the quiz
    const stopQuiz = () => {
        setQuizInProgress(false);
    };

    // Function to give a mulligan and increase the number of attempts
    const giveMulligan = () => {
        setAttempts(attempts + 1);
    };

    return (
        <div>
            <Button
                onClick={startQuiz}
                disabled={quizInProgress || attempts === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!quizInProgress}>
                Stop Quiz
            </Button>
            <Button onClick={giveMulligan} disabled={quizInProgress}>
                Mulligan
            </Button>
            <p>Attempts left: {attempts}</p>
        </div>
    );
}
