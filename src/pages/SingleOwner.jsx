import React from "react";
import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import UpdateOwner from "../components/UpdateOwner";
import ProfileCard from "../components/ProfileCard";
import OwnerLandHoldings from "../components/OwnerLandHoldings";
import NavBar from "../components/NavBar";

const SingleOwner = () => {
  const { ownerId } = useParams();
  const [owner, setOwner] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(` https://obscure-bayou-28121.herokuapp.com/api/owners/${ownerId}`)
      .then((response) => response.json())
      .then((owner) => {
        setOwner(owner);
      })
      .catch((error) => {
        setError(error);
      });
  }, [ownerId]);
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!owner) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <NavBar />
      <div className="m-2">
        <Row>
          <Col lg={4}>
            <ProfileCard />
            <UpdateOwner />
          </Col>
          <Col lg={8}>
            <OwnerLandHoldings />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SingleOwner;
