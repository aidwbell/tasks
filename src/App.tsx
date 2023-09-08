import React from "react";
import { Button } from "react-bootstrap";
import img from "./992.jpg";
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
            <header>The all new 2023 992 911 GT3RS</header>
            img src={img}
            <ol>
                <li>Top speed is 190 MPH</li>
                <li>Base price: $225,250</li>
                <li>Horsepower: 518 @ 8,500 rpm.</li>
            </ol>
        </div>
    );
}

export default App;
