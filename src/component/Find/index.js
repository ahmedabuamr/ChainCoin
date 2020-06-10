import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

import image1 from "./image1.jpeg";
import image2 from "./image2.jpeg";
import image3 from "./image3.jpeg";
import image4 from "./image4.jpeg";
import image5 from "./image5.jpeg";
import image6 from "./image6.jpg";

function Find() {
  return (
    <div className="find-page" style={{ marginTop: "80px" }}>
      <Container>
        <h2 className="text-center pay-head">Find Ich</h2>
        <div
          style={{
            background: "#f4ea0b",
            height: "4px",
            width: "100px",
            margin: "auto",
            marginBottom: "50px",
          }}
        ></div>
        <Row>
          <div className="col-md-4 ">
            <Card className="card-pay" style={{ width: "19rem" }}>
              <Card.Img variant="top" src={image1} height="250" />
              <hr />
              <Card.Body className="text-center">
                <a
                  href="https://crex24.com/ar/exchange/ich-BTC"
                  target="_blank"
                >
                  Click here
                </a>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className="card-pay" style={{ width: "19rem" }}>
              <Card.Img variant="top" src={image2} height="250" />
              <hr />
              <Card.Body className="text-center">
                <a
                  href="https://www.finexbox.com/market/pair/ICH-BTC.html"
                  target="_blank"
                >
                  Click here
                </a>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-4 ">
            <Card className="card-pay" style={{ width: "19rem" }}>
              <Card.Img variant="top" src={image3} height="250" />
              <hr />
              <Card.Body className="text-center">
                <a
                  href="https://www.catex.io/trading/pro/ICH/BTC"
                  target="_blank"
                >
                  Click here
                </a>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-4 ">
            <Card className="card-pay" style={{ width: "19rem" }}>
              <Card.Img variant="top" src={image4} height="250" />
              <hr />
              <Card.Body className="text-center">
                <a
                  href="https://www.etherflyer.com/trade.html?pairs=ICH-ETH&market=03"
                  target="_blank"
                >
                  Click here
                </a>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className="card-pay" style={{ width: "19rem" }}>
              <Card.Img variant="top" src={image5} height="250" />
              <hr />
              <Card.Body className="text-center">
                <a
                  href="https://forkdelta.app/#!/trade/0xf8483E2d6560585C02D46bF7B3186Bf154a96166-ETH"
                  target="_blank"
                >
                  Click here
                </a>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-4 ">
            <Card className="card-pay" style={{ width: "19rem" }}>
              <Card.Img variant="top" src={image6} height="250" />
              <hr />
              <Card.Body className="text-center">
                <a
                  href="http://ideachaincoin.com/find-ich.html"
                  target="_blank"
                >
                  More
                </a>
              </Card.Body>
            </Card>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Find;
