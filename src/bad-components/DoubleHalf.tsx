import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Doubler({
    dhValue,
    setDhValue
}: {
    dhValue: number;
    setDhValue: (value: number) => void;
}): JSX.Element {
    // Double the current value of dhValue
    const doubleValue = () => setDhValue(2 * dhValue);

    return <Button onClick={doubleValue}>Double</Button>;
}

function Halver({
    dhValue,
    setDhValue
}: {
    dhValue: number;
    setDhValue: (value: number) => void;
}): JSX.Element {
    // Halve the current value of dhValue
    const halveValue = () => setDhValue(0.5 * dhValue);

    return <Button onClick={halveValue}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);

    return (
        <div>
            <p>Double Half</p>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler dhValue={dhValue} setDhValue={setDhValue}></Doubler>
            <Halver dhValue={dhValue} setDhValue={setDhValue}></Halver>
        </div>
    );
}
