import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [isAnswerVisible, setIsAnswerVisible] = useState(false);

    // Function to toggle the visibility of the text
    const toggleAnswerVisibility = () => {
        setIsAnswerVisible(!isAnswerVisible);
    };

    return (
        <div>
            <Button onClick={toggleAnswerVisibility}>Reveal Answer</Button>
            {/* Render the answer (42) only if isAnswerVisible is true */}
            {isAnswerVisible && <div>42</div>}
        </div>
    );
}
