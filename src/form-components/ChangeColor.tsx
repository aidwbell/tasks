import React, { useState } from "react";

export function ChangeColor(): JSX.Element {
    const colors = [
        "red",
        "green",
        "blue",
        "orange",
        "purple",
        "pink",
        "yellow",
        "brown"
    ];

    const [selectedColor, setSelectedColor] = useState("red");

    const handleColorChange = (event: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setSelectedColor(event.target.value);
    };

    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {colors.map((color) => (
                    <label key={color}>
                        <input
                            type="radio"
                            name="color"
                            value={color}
                            checked={selectedColor === color}
                            onChange={handleColorChange}
                            style={{ display: "inline" }}
                        />
                        {color.charAt(0).toUpperCase() + color.slice(1)}
                    </label>
                ))}
            </div>
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: selectedColor,
                    width: "100px",
                    height: "100px",
                    marginTop: "10px"
                }}
            >
                This box is {selectedColor}.
            </div>
        </div>
    );
}
