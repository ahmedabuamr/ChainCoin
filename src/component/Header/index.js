import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./style.css";
import image from "./image.png";
import { Link } from "react-router-dom";
import firebase from "../../../src/config/fbConfig";

export default function Header() {
  const [header, setHeader] = useState([]);
  const [papers, setPaper] = useState([]);

  useEffect(() => {
    const fetchDataAbout = async () => {
      const snapshot = await firebase
        .database()
        .ref("header/")
        .on("value", function (snapshot) {
          setHeader(snapshot.val());
        });
    };

    const fetchDataPaper = async () => {
      await firebase
        .database()
        .ref("header/papers/")
        .on("value", function (snapshot2) {
          setPaper(snapshot2.val());
        });
    };
    fetchDataAbout();
    fetchDataPaper();
  }, []);

  return (
    <div className="header-lead">
      <Container>
        <Row>
          <Col md={5} xs={12}>
            <div className="title-left">
              <h1>{header.title && header.title}</h1>
              <p>{header.desc && header.desc}</p>
              <div className="big-button">
                <Link
                  to="/contact"
                  style={{ marginRight: "10px" }}
                  className="btn btn1 btn-info"
                >
                  Get started
                </Link>
                <a
                  href={papers.paper && papers.paper}
                  target="_blank"
                  className="btn btn2 btn-info"
                >
                  View White Paper
                </a>
              </div>
            </div>
          </Col>
          <Col md={7} xs={12}>
            <div className="image-right">
              <Image src={image} fluid />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
