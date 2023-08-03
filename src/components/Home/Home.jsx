import React, { useContext, useEffect, useState } from "react";
import { Filter } from "../Filter/Filter";
import "../styles.css";
import { Data } from "../../context/Context";
import api, { fetchNextCharacters, getCharacters } from "../../http";
import { CharacterCard } from "../CharacterCard/CharacterCard";
import { Button, Spinner } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { Pagination } from "../Pagination/Pagination";
import { useRef } from "react";
import { useParams } from "react-router-dom";

export const Home = () => {
  const { state, dispatch } = useContext(Data);
  const [characters, setCharacters] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const containerRef = useRef();

  // get initial data
  useEffect(() => {
    const fetchChar = async () => {
      try {
        const data = await getCharacters();

        await dispatch({ type: "SET_CHAR", payload: data?.data });
        setCharacters(data?.data?.results);
        setPageCount(data?.data?.info?.pages);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchChar();
  }, []);

  // pagination function
  const handlePageClick = async (data) => {
    console.log(data.selected);
    try {
      const characterData = await fetchNextCharacters(data.selected + 1);
      setCharacters(characterData.data.results);
      containerRef.current.scrollIntoView({ behavior: "smooth" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isLoading ? (
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
        ""
      )}

      <div
        ref={containerRef}
        className="homeContainer"
        style={{ background: "#f1fbfe" }}
      >
        <Filter setCharacters={setCharacters} />
        <div style={{ width: "78%" }}>
          <div className="productContainer">
            {characters?.map((item) => (
              <CharacterCard key={item.id} character={item} />
            ))}
          </div>
          <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
        </div>
      </div>
    </>
  );
};

// export function PaginatedItems({ itemsPerPage }) {

//   const [itemOffset, setItemOffset] = useState(0);
//   const endOffset = itemOffset + itemsPerPage;
//   console.log(`Loading items from ${itemOffset} to ${endOffset}`);
//   const currentItems = items.slice(itemOffset, endOffset);
//   const pageCount = Math.ceil(items.length / itemsPerPage);
//   const itemsPerPage = 20

//   // Invoke when user click to request another page.
//   const handlePageClick = (event) => {
//     const newOffset = (event.selected * itemsPerPage) % items.length;
//     console.log(
//       `User requested page number ${event.selected}, which is offset ${newOffset}`
//     );
//     setItemOffset(newOffset);
//   };

//   return (
//     <>
//       <Items currentItems={currentItems} />
//       <ReactPaginate
//         breakLabel="..."
//         nextLabel="next >"
//         onPageChange={handlePageClick}
//         pageRangeDisplayed={5}
//         pageCount={pageCount}
//         previousLabel="< previous"
//         renderOnZeroPageCount={null}
//       />
//     </>
//   );
// }
