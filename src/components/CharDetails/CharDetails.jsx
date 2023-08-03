import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api, { getSingleCharacter } from "../../http";
import { Button, Spinner } from "react-bootstrap";

export const CharDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getCharacter = async () => {
      try {
        const data = await getSingleCharacter(id);
        setCharacter(data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getCharacter();
  }, [id]);

  return (
    <>
      <div className="container my-5">
        {loading ? (
          <Button variant="dark" disabled className="m-auto d-block my-5">
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Loading...
          </Button>
        ) : (
          <div className="detailsContainer d-flex w-100 mt-5 ">
            <div className="left">
              <img src={character?.image} />
            </div>
            <div className="right">
              <h1 className="charTitle">{character?.name}</h1>
              <table className="details-table table table-striped">
                <tr>
                  <td>id: </td>
                  <td>{character?.id}</td>
                </tr>
                <tr>
                  <td>name: </td>
                  <td>{character?.name}</td>
                </tr>
                <tr>
                  <td>status: </td>
                  <td>{character?.status}</td>
                </tr>
                <tr>
                  <td>species: </td>
                  <td>{character?.species}</td>
                </tr>
                <tr>
                  <td>type: </td>
                  <td>{character?.type}</td>
                </tr>
                <tr>
                  <td>gender: </td>
                  <td>{character?.gender}</td>
                </tr>
                <tr>
                  <td>origin: </td>
                  <td>{character?.origin?.name}</td>
                </tr>
                <tr>
                  <td>location: </td>
                  <td>{character?.location?.name}</td>
                </tr>
              </table>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
