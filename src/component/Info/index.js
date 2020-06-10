import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./style.css";
import image from "./images/image.png";
import firebase from "../../../src/config/fbConfig";

export default function Info() {
  const [get, setGet] = useState([]);

  useEffect(() => {
    const fetchDataAbout = async () => {
      await firebase
        .database()
        .ref("get/")
        .on("value", function (snapshot) {
          setGet(snapshot.val());
        });
    };
    fetchDataAbout();
  }, []);
  return (
    <div className="info">
      <Container>
        <Row>
          <Col sm={9} className="mx-auto">
            <div className="title-info text-center">
              <h2 className="text-uppercase">{get.title && get.title}</h2>
              <div className="bg"></div>
              <p>{get.desc && get.desc}</p>
            </div>
          </Col>
        </Row>
        <div className="info-box">
          <Row>
            <Col sm={7} xs={12}>
              <div className="info-left">
                <h5 className="mb-3">{get.subtitle1 && get.subtitle1}</h5>
                <p>{get.text1 && get.text1}</p>
              </div>
            </Col>
            <div className="col-md-4 offset-md-1">
              <div className="image-info">
                <Image src={image} fluid />
              </div>
            </div>
          </Row>
        </div>
        <div className="info-box2">
          <Row>
            <div className="col-md-4 ">
              <div className="image-info">
                <Image src={image} fluid style={{ marginLeft: "-70px" }} />
              </div>
            </div>
            <div className="col-md-7 offset-md-1 ">
              <div className="info-rignt">
                <h5 className="mb-3">{get.subtitle2 && get.subtitle2}</h5>
                <p>{get.text2 && get.text2}</p>
              </div>
            </div>
          </Row>
        </div>
      </Container>
    </div>
  );
}
