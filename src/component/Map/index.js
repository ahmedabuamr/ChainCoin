import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import map from "./map.jpg";
import "./style.css";

export default function RoadMap() {
  return (
    <div className="map">
      <h2 className="text-center">RoadMap</h2>
      <div className="bg5"></div>
      <Image src={map} fluid />
    </div>
  );
}
