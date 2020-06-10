import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./style.css";
import bg from "./bg.png";
import firebase from "../../../src/config/fbConfig";

export default function Contest() {
  const [contest, setContest] = useState([]);
  const [images, setImage] = useState([]);
  const [more, setMore] = useState([]);
  useEffect(() => {
    const fetchDataContest = async () => {
      await firebase
        .database()
        .ref("contest/")
        .on("value", function (snapshot) {
          setContest(snapshot.val());
        });
    };
    const fetchDataImage = async () => {
      await firebase
        .database()
        .ref("contest/image/")
        .on("value", function (snapshot1) {
          setImage(snapshot1.val());
        });
    };

    const fetchDataMore = async () => {
      await firebase
        .database()
        .ref("contest/more/")
        .on("value", function (snapshot2) {
          setMore(snapshot2.val());
        });
    };
    fetchDataContest();
    fetchDataImage();
    fetchDataMore();
  }, []);

  return (
    <div className="contest-lead">
      <Container>
        <div className="contest-heading text-center">
          <h2 className="text-uppercase">{contest.title && contest.title}</h2>
          <div className="bg"></div>
          <p>{contest.desc && contest.desc}</p>
        </div>
        <div className="contest-content">
          <Row>
            <Col md={6} xs={12}>
              <div className="contest-image">
                <Image src={images.image} fluid height="400" />
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div className="contest-info">
                <h4>{contest.contestTitle && contest.contestTitle}</h4>
                <p>{contest.contestText && contest.contestText}</p>
                <a
                  href={more.knowMore && more.knowMore}
                  target="_blank"
                  className="btn btn-more btn-info"
                >
                  Know More
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
