import React from "react";
import { Button } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript Aidan Bell
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World
            </p>
            <div>
                <header>The all new 2023 992 911 GT3RS</header>
                <img
                    src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.motortrend.com%2Freviews%2F2023-porsche-911-gt3-rs-first-drive-review%2F&psig=AOvVaw3U94yzeOVa2ubL13wCHcr_&ust=1694296536488000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCIDgqM-AnIEDFQAAAAAdAAAAABAD"
                    alt="A picture of a 992 GT3RS driving on a track"
                />
                <ol>
                    <li>Top speed is 190 MPH</li>
                    <li>Base price: $225,250</li>
                    <li>Horsepower: 518 @ 8,500 rpm.</li>
                </ol>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>
        </div>
    );
}

export default App;
