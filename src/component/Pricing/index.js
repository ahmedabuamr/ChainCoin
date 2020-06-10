import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import logo from "./Logo.png";
import "./style.css";

export default function Pricing() {
  return (
    <Container>
      <div className="pricing">
        <h2 className="text-center">Price And Chart</h2>
        <div className="bg4"></div>

        <div className="widegt" style={{ marginTop: "40px" }}>
          <coingecko-coin-compare-chart-widget
            coin-ids="ideachain"
            currency="usd"
            locale="en"
          ></coingecko-coin-compare-chart-widget>
        </div>
        <div
          style={{ marginTop: "60px" }}
          class="coinmarketcap-currency-widget"
          data-currencyid="5560"
          data-base="USD"
          data-secondary=""
          data-ticker="true"
          data-rank="true"
          data-marketcap="true"
          data-volume="true"
          data-statsticker="true"
          data-stats="USD"
        ></div>

        {/* <Row>
          <Col md={6} xs={12} sm={12}>
            <Image src={logo} fluid />
          </Col>

          <div className="col-md-5 offset-md-1">
            <div className="pricNo">
              <h3>0.5$</h3>
            </div>
          </div>
        </Row> */}
      </div>
    </Container>
  );
}
