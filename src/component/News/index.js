import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./style.css";
import firebase from "../../../src/config/fbConfig";

export default function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchDataNews = async () => {
      await firebase
        .database()
        .ref("news/")
        .on("value", function (snapshot) {
          setNews(snapshot.val());
        });
    };

    fetchDataNews();
  }, []);

  return (
    <div className="news-lead">
      <Container>
        <div className="news-heading text-center">
          <h2 className="text-uppercase">ich news</h2>
          <div className="bg"></div>
          <p>{news.desc && news.desc}</p>
        </div>

        <div className="card-news">
          <Row>
            <Col md={4} xs={12}>
              <Card>
                <Card.Img
                  variant="top"
                  src={news.image1 && news.image1}
                  style={{ height: "300px" }}
                />
                <Card.Body>
                  <h5 className="head-card">
                    {news.newsTitle1 && news.newsTitle1}
                  </h5>
                  <Card.Text>{news.newsText1 && news.newsText1}</Card.Text>
                  <a
                    href={news.link1 && news.link1}
                    className="btn-card"
                    variant="primary"
                    target="_blank"
                  >
                    Read More
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} xs={12}>
              <Card>
                <Card.Img
                  variant="top"
                  src={news.image2 && news.image2}
                  style={{ height: "300px" }}
                />
                <Card.Body>
                  <h5 className="head-card">
                    {news.newsTitle2 && news.newsTitle2}
                  </h5>
                  <Card.Text>{news.newsText2 && news.newsText2}</Card.Text>
                  <a
                    href={news.link2 && news.link2}
                    className="btn-card"
                    variant="primary"
                    target="_blank"
                  >
                    Read More
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} xs={12}>
              <Card>
                <Card.Img
                  variant="top"
                  src={news.image3 && news.image3}
                  style={{ height: "300px" }}
                />
                <Card.Body>
                  <h5 className="head-card">
                    {news.newsTitle3 && news.newsTitle3}
                  </h5>
                  <Card.Text>{news.newsText3 && news.newsText3}</Card.Text>
                  <a
                    href={news.link3 && news.link3}
                    className="btn-card"
                    variant="primary"
                    target="_blank"
                  >
                    Read More
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
