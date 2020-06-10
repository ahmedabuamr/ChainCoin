import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./style.css";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import firebase from "../../../src/config/fbConfig";

function Contact(props) {
  const [contact, setContact] = useState([]);
  const [fullName, setFullName] = useState([]);
  const [email, setEmail] = useState([]);
  const [address, setAdress] = useState([]);
  const [message, setMessage] = useState([]);
  const [Sendmessage, setSendMessage] = useState([]);

  useEffect(() => {
    const fetchDataContact = async () => {
      await firebase
        .database()
        .ref("messages/")
        .on("value", function (snapshot) {
          setContact(snapshot.val());
        });
    };
    fetchDataContact();
  }, []);

  const handleChangeName = (e) => {
    setFullName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangeMessage = (e) => {
    setMessage(e.target.value);
  };
  const handleChangeAddress = (e) => {
    setAdress(e.target.value);
  };

  const handelSubmit = async (e) => {
    e.preventDefault();

    await firebase.database().ref("messages/peopleMessage").push({
      fullName: fullName,
      email: email,
      address: address,
      message: message,
    });
    setFullName("");
    setMessage("");
    setEmail("");
    setAdress("");
    setSendMessage("Sent Succesfully");

    setTimeout(() => {
      setSendMessage("");
    }, 2000);
  };

  const mapStyles = {
    width: "100%",
    height: "100%",
  };
  return (
    <div className="contact-lead">
      <Container>
        <div className="contact-heading text-center">
          <h2 className="text-uppercase">{contact.title && contact.title}</h2>
          <div className="bg"></div>
          <p>{contact.desc && contact.desc}</p>
        </div>

        <Row>
          <Col md={10} xs={12} className="mx-auto">
            <div className="contact-info">
              <Row>
                <Col md={6}>
                  <p
                    className="text-center"
                    style={{
                      fontSize: "16px",
                      color: "#080",
                      fontWeight: "bold",
                      marginBottom: "15px",
                    }}
                  >
                    {Sendmessage && Sendmessage}
                  </p>
                  <Form onSubmit={handelSubmit}>
                    <Form.Group controlId="fullName">
                      <Form.Label>Full name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Full name"
                        onChange={handleChangeName}
                        value={fullName}
                      />
                    </Form.Group>

                    <Form.Group controlId="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your Email"
                        onChange={handleChangeEmail}
                        value={email}
                      />
                    </Form.Group>

                    <Form.Group controlId="address">
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter the address"
                        onChange={handleChangeAddress}
                        value={address}
                      />
                    </Form.Group>

                    <Form.Group controlId="message">
                      <Form.Label>Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        placeholder="Enter Massage"
                        rows="3"
                        onChange={handleChangeMessage}
                        value={message}
                      />
                    </Form.Group>
                    <Button type="sumbit" className="btn btn-contact btn-info">
                      Send
                    </Button>
                  </Form>
                </Col>

                <Col md={6}>
                  <a
                    href="https://www.google.com/maps/place/41%C2%B002'01.7%22N+28%C2%B038'54.0%22E/@41.033803,28.6505222,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d41.033803!4d28.6483335?hl=ar"
                    target="_blank"
                  >
                    <Map
                      google={props.google}
                      zoom={8}
                      style={mapStyles}
                      initialCenter={{ lat: 47.444, lng: -122.176 }}
                    >
                      <Marker position={{ lat: 48.0, lng: -122.0 }} />
                    </Map>
                  </a>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyD3fY2gYbWKFE00YEAb4reqAHTPcC9EU30",
})(Contact);
