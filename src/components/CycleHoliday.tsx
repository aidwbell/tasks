import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const holidays = [
        { name: "Dragon Boat Festival", emoji: "🎏" },
        { name: "Diwali", emoji: "🪔" },
        { name: "Halloween", emoji: "🎃" },
        { name: "Christmas", emoji: "🎄" },
        { name: "New Year's Day", emoji: "🎉" }
    ];

    // Define a state variable to track the current holiday's index
    const [currentHolidayIndex, setCurrentHolidayIndex] = useState<number>(0);

    // Function to calculate the next holiday alphabetically
    const getNextHolidayAlphabetically = () => {
        const newIndex = (currentHolidayIndex + 1) % holidays.length;
        setCurrentHolidayIndex(newIndex);
    };

    // Function to calculate the next holiday by year
    const getNextHolidayByYear = () => {
        const newIndex = (currentHolidayIndex + 1) % holidays.length;
        setCurrentHolidayIndex(newIndex);
    };

    // Get the current holiday based on the index
    const currentHoliday = holidays[currentHolidayIndex];

    return (
        <div>
            <p>Holiday: {currentHoliday.emoji}</p>
            <Button onClick={getNextHolidayAlphabetically}>
                Advance by Alphabet
            </Button>
            <Button onClick={getNextHolidayByYear}>Advance by Year</Button>
        </div>
    );
}
