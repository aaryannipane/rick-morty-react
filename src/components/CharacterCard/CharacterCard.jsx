import React from "react";
import { Badge, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const CharacterCard = ({ character }) => {

    const navigate = useNavigate()

  return (
    <div className="characterCard" onClick={()=>navigate(`/character/${character.id}`)}>
      <Card className="h-100">
        <Card.Img variant="top" src={character?.image} className="rounded-bottom" />
        <Card.Body>
          <Card.Title>
            {character?.name}{" "}
            <br />
            <Badge
            className="d-block my-2 py-2"
              bg="secondary "
            >
              {character?.gender != "" ? character?.gender : "Unknown"}
            </Badge>
            <Badge
            className="d-block my-2 py-2"
              bg={
                character?.status === "Alive"
                  ? "success"
                  : character?.status === "Dead"
                  ? "danger"
                  : "dark"
              }
            >
              {character?.status != "" ? character?.status : "Unknown"}
            </Badge>
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};
