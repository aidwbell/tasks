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
    // Define two state variables for the values of the two dice
    const [leftDie, setLeftDie] = useState<number>(d6());
    const [rightDie, setRightDie] = useState<number>(d6());

    // Function to handle rolling the left die
    const rollLeftDie = () => {
        // Generate a new random value for the left die
        setLeftDie(d6());
    };

    // Function to handle rolling the right die
    const rollRightDie = () => {
        // Generate a new random value for the right die
        setRightDie(d6());
    };

    // Determine if the player has won or lost
    const isWin = leftDie === rightDie && leftDie !== 1;
    const isLose =
        (leftDie === 1 && rightDie === 1) || (leftDie !== 1 && rightDie === 1);

    return (
        <div>
            <span data-testid="left-die">{leftDie}</span>
            <span data-testid="right-die">{rightDie}</span>
            <button onClick={rollLeftDie}>Roll Left</button>
            <button onClick={rollRightDie}>Roll Right</button>
            {isWin && <p>You Win</p>}
            {isLose && <p>You Lose</p>}
        </div>
    );
}
