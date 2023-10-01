import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript Aidan Bell
            </header>
            HEAD
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World
            </p>
            <h1>The all new 2023 992 911 GT3RS</h1>
            <img
                src="https://files.porsche.com/filestore/image/multimedia/none/992-gt3-rs-modelimage-sideshot/model/cfbb8ed3-1a15-11ed-80f5-005056bbdc38/porsche-model.png"
                height="540px"
                width="960px"
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
            <Container>
                <Row>
                    <Col>
                        Here is the first column!
                        <div
                            style={{
                                width: "300px",
                                height: "150px",
                                backgroundColor: "Red"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        Here is the second column!
                        <div
                            style={{
                                width: "300px",
                                height: "150px",
                                backgroundColor: "Red"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
            =====
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
            upstream/task-state
        </div>
    );
}

export default App;
