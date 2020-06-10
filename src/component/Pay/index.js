import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import image from "./plus.jpg";
import image2 from "./pay.png";

function Pay() {
  return (
    <div className="pay-page">
      <Container>
        <h2 className="text-center pay-head">Where can you pay with ich</h2>
        <div
          style={{
            background: "#f4ea0b",
            height: "4px",
            width: "200px",
            margin: "auto",
            marginBottom: "50px",
          }}
        ></div>
        <Row>
          <div className="col-md-4 offset-md-2">
            <Card className="card-pay" style={{ width: "19rem" }}>
              <Card.Img variant="top" src={image} height="250" />
              <hr />
              <Card.Body>
                <Card.Text>
                  To add your store as a store that accepts payment using ich
                </Card.Text>
                <Link to="/contact">Click here</Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4 offese-md-2">
            <Card className="card-pay" style={{ width: "19rem" }}>
              <Card.Img variant="top" src={image2} height="250" />
              <hr />
              <Card.Body>
                <Card.Text>
                  To view the full list of stores accepting ich as payment
                  method
                </Card.Text>
                <a
                  href="http://ideachaincoin.com/where-can-you-pay-with-ich.html"
                  target="_blank"
                >
                  Click here
                </a>
              </Card.Body>
            </Card>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Pay;
