import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";
import logo from "./Logo.png";
import coin from "./coin.png";
import etherem from "./etherem.png";
import market from "./market.png";

export default function Footer() {
  return (
    <div className="footer-lead">
      <Container>
        <Row>
          <div className="col-md-3">
            <div className="footer-left mr-auto">
              <Image src={logo} fluid />
              <p>Copyright © ICH Wireframe Kit All rights reserved</p>
            </div>
          </div>
          <div className="footer-right ml-auto">
            <ul className="list">
              <li>
                <a
                  href="https://www.facebook.com/IDEA-CHAIN-COIN-111693077152574/"
                  target="_blank"
                >
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/ideachain/" target="_blank">
                  <i className="fa fa-instagram" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/ideachaincoin1" target="_blank">
                  <i className="fa fa-twitter" />
                </a>
              </li>

              <li>
                <a href="http://T.me/ideachaincoin" target="_blank">
                  <i className="fa fa-telegram" />
                </a>
              </li>

              <li>
                <a href="http://T.me/ideachaincoinchat" target="_blank">
                  <i className="fa fa-telegram" />
                </a>
              </li>

              <li>
                <a
                  href=" https://bitcointalk.org/index.php?topic=5239179.new#new"
                  target="_blank"
                >
                  <i className="fa fa-bitcoin" />
                </a>
              </li>

              <li>
                <a
                  href=" https://www.coingecko.com/en/coins/ideachain/usd#panel"
                  target="_blank"
                >
                  <img src={coin} height="30px" />
                </a>
              </li>

              <li>
                <a
                  href=" https://etherscan.io/token/0xf8483E2d6560585C02D46bF7B3186Bf154a96166"
                  target="_blank"
                >
                  <img src={etherem} height="30px" />
                </a>
              </li>

              <li>
                <a
                  href="https://coinmarketcap.com/currencies/idea-chain-coin/"
                  target="_blank"
                >
                  <img src={market} height="30px" />
                </a>
              </li>
            </ul>
            <Link className="active" to="/">
              HOME
            </Link>
            <Link to="/about">About</Link>
            <Link to="/team">Team</Link>
            <Link to="/news">News</Link>
            <Link to="/contest">Contests</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/roadmap">Road map</Link>
            <Link to="/contact">ContactUs</Link>
          </div>
        </Row>
      </Container>
    </div>
  );
}
