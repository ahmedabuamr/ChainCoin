import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./style.css";
import logo from "./Logo.png";
import icon from "./images/icon.png";
import scroll from "./images/vision.png";
import vision from "./images/medal.png";
import firebase from "../../../src/config/fbConfig";

function About() {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const fetchDataAbout = async () => {
      const snapshot = await firebase
        .database()
        .ref("about/")
        .on("value", function(snapshot) {
          setAbouts(snapshot.val());
        });
    };
    fetchDataAbout();
  }, []);

  return (
    <div className="about">
      <Container>
        <Row>
          <Col sm={5} xs={12}>
            <div
              className="image"
              style={{ marginTop: "30px", marginLeft: "-80px" }}
            >
              <Image src={logo} fluid />
            </div>
          </Col>
          <Col sm={7} xs={12}>
            <div className="about-me">
              <h2 className="text-uppercase">{abouts.title && abouts.title}</h2>
              <div className="bg1"></div>
              <p>{abouts.desc && abouts.desc}</p>
              <div className="about-title">
                <div className="media">
                  <Image src={icon} />
                  <div className="media-body">
                    <h5 className="media-heading">
                      {abouts.subtitle1 && abouts.subtitle1}
                    </h5>
                    <span>{abouts.text1}</span>
                  </div>
                </div>
                <div className="media">
                  <Image src={vision} />
                  <div className="media-body">
                    <h5 className="media-heading">
                      {" "}
                      {abouts.subtitle2 && abouts.subtitle2}
                    </h5>
                    <span>{abouts.text2}</span>
                  </div>
                </div>
                <div className="media">
                  <Image src={scroll} />
                  <div className="media-body">
                    <h5 className="media-heading">
                      {abouts.subtitle3 && abouts.subtitle3}
                    </h5>
                    <span>{abouts.text3 && abouts.text3}</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
