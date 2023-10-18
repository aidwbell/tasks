import React, { useState } from "react";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState(3);
    const [requestedAttempts, setRequestedAttempts] = useState(0);

    const handleUseAttempt = () => {
        if (attemptsLeft > 0) {
            setAttemptsLeft(attemptsLeft - 1);
        }
    };

    const handleGainAttempts = () => {
        if (requestedAttempts > 0) {
            setAttemptsLeft(attemptsLeft + requestedAttempts);
            setRequestedAttempts(0);
        }
    };

    const handleRequestAttemptsChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const parsedValue = parseInt(e.target.value);
        if (!isNaN(parsedValue)) {
            setRequestedAttempts(parsedValue);
        }
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts Left: {attemptsLeft}</p>
            <button onClick={handleUseAttempt} disabled={attemptsLeft === 0}>
                Use
            </button>
            <input
                type="number"
                placeholder="Requested Attempts"
                value={requestedAttempts}
                onChange={handleRequestAttemptsChange}
            />
            <button onClick={handleGainAttempts}>Gain</button>
        </div>
    );
}
