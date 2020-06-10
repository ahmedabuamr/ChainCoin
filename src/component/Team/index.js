import React, { useState, useEffect } from "react";
import { Carousel, Row, Container, Image } from "react-bootstrap";
import "./style.css";
import header from "./images/header.png";
import person from "./images/person.png";
import firebase from "../../../src/config/fbConfig";

export default function Team() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const fetchDataTeam = async () => {
      await firebase
        .database()
        .ref("team/")
        .on("value", function (snapshot) {
          setTeam(snapshot.val());
        });
    };

    fetchDataTeam();
  }, []);

  return (
    <div className="team-lead">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            height="600"
            src={header}
            alt="First slide"
          />
          <Carousel.Caption className="caption text-center">
            <h3 className="text-center  text-uppercase">meet the team</h3>
            <div className="bg"></div>
            <p className="text-center">{team.desc && team.desc}</p>
          </Carousel.Caption>

          <Carousel.Caption>
            <Container>
              <div className="team-info">
                <Row>
                  <div className="col-md-4 offset-md-2">
                    <Image src={team.image1 && team.image1} fluid />
                  </div>
                  <div className="col-md-4 offset-md-1">
                    <div className="person-info">
                      <h4>{team.name1 && team.name1}</h4>
                      <span>{team.text1 && team.text1}</span>
                      <p>{team.info1 && team.info1}</p>
                      <ul className="list2">
                        <li>
                          <a href={team.link1 && team.link1} target="_blank">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Row>
              </div>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            height="600"
            src={header}
            alt="Third slide"
          />
          <Carousel.Caption className="caption">
            <h3 className="text-center text-uppercase">meet the team</h3>
            <div className="bg"></div>
            <p className="text-center">{team.desc && team.desc}</p>
          </Carousel.Caption>
          <Carousel.Caption>
            <Container>
              <div className="team-info">
                <Row>
                  <div className="col-md-4 offset-md-2">
                    <Image src={team.image2 && team.image2} fluid />
                  </div>
                  <div className="col-md-4 offset-md-1">
                    <div className="person-info">
                      <h4>{team.name2 && team.name2}</h4>
                      <span>{team.text2 && team.text2}</span>
                      <p>{team.info2 && team.info2}</p>
                      <ul className="list2">
                        <li>
                          <a href={team.link2 && team.link2} target="_blank">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Row>
              </div>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            height="600"
            src={header}
            alt="Third slide"
          />

          <Carousel.Caption className="caption">
            <h3 className="text-center text-uppercase ">meet the team</h3>
            <div className="bg"></div>
            <p className="text-center">{team.desc && team.desc}</p>
          </Carousel.Caption>

          <Carousel.Caption>
            <Container>
              <div className="team-info">
                <Row>
                  <div className="col-md-4 offset-md-2">
                    <Image src={team.image3 && team.image3} fluid />
                  </div>
                  <div className="col-md-4 offset-md-1">
                    <div className="person-info">
                      <h4>{team.name3 && team.name3}</h4>
                      <span>{team.text3 && team.text3}</span>
                      <p>{team.info3 && team.info3}</p>
                      <ul className="list2">
                        <li>
                          <a href={team.link3 && team.link3} target="_blank">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Row>
              </div>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            height="600"
            src={header}
            alt="Third slide"
          />

          <Carousel.Caption className="caption">
            <h3 className="text-center text-uppercase">meet the team</h3>
            <div className="bg"></div>
            <p className="text-center">{team.desc && team.desc}</p>
          </Carousel.Caption>

          <Carousel.Caption>
            <Container>
              <div className="team-info">
                <Row>
                  <div className="col-md-4 offset-md-2">
                    <Image src={team.image4 && team.image4} fluid />
                  </div>
                  <div className="col-md-4 offset-md-1">
                    <div className="person-info">
                      <h4>{team.name4 && team.name4}</h4>
                      <span>{team.text4 && team.text4}</span>
                      <p>{team.info4 && team.info4}</p>
                      <ul className="list2">
                        <li>
                          <a href={team.link4 && team.link4} target="_blank">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Row>
              </div>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            height="600"
            src={header}
            alt="Third slide"
          />

          <Carousel.Caption className="caption">
            <h3 className="text-center text-uppercase">meet the team</h3>
            <div className="bg"></div>
            <p className="text-center">{team.desc && team.desc}</p>
          </Carousel.Caption>

          <Carousel.Caption>
            <Container>
              <div className="team-info">
                <Row>
                  <div className="col-md-4 offset-md-2">
                    <Image src={team.image5 && team.image5} fluid />
                  </div>
                  <div className="col-md-4 offset-md-1">
                    <div className="person-info">
                      <h4>{team.name5 && team.name5}</h4>
                      <span>{team.text5 && team.text5}</span>
                      <p>{team.info5 && team.info5}</p>
                      <ul className="list2">
                        <li>
                          <a href={team.link5 && team.link5} target="_blank">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Row>
              </div>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
