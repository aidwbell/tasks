import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    // Initialize the state for two dice values
    const [leftDieValue, setLeftDieValue] = useState(4);
    const [rightDieValue, setRightDieValue] = useState(5);

    // Function to roll the left die and update its value
    const rollLeftDie = () => {
        setLeftDieValue(d6());
    };

    // Function to roll the right die and update its value
    const rollRightDie = () => {
        setRightDieValue(d6());
    };

    // Check if the game is won or lost
    const gameOutcome = leftDieValue === rightDieValue;
    const gameMessage = gameOutcome
        ? leftDieValue === 1
            ? "Lose"
            : "Win"
        : "";

    return (
        <div>
            <span data-testid="left-die">{leftDieValue}</span>
            <span data-testid="right-die">{rightDieValue}</span>
            <Button onClick={rollLeftDie}>Roll Left</Button>
            <Button onClick={rollRightDie}>Roll Right</Button>
            {gameMessage && <div>{gameMessage}</div>}
        </div>
    );
}
