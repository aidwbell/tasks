import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
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
            <h2>The all new 2023 992 911 GT3RS</h2>
            <img
                src="https://files.porsche.com/filestore/image/multimedia/none/992-gt3-rs-modelimage-sideshot/model/cfbb8ed3-1a15-11ed-80f5-005056bbdc38/porsche-model.png"
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
        </div>
    );
}

export default App;
