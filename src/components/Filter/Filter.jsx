import React from "react";
import { useState } from "react";
import { getCharacters, getSearchedCharacter } from "../../http";
import { useEffect } from "react";
import { useDebounce } from "../../hooks/useDebounce";

export const Filter = ({ setCharacters, setLoading }) => {
  const [filterData, setFilterData] = useState({
    searchString: "",
    status: "",
    gender: "",
  });
  const [searchValue, setSearchValue] = useState("");
  const debouncedValue = useDebounce(searchValue);

  useEffect(() => {
    const filterCharacter = async () => {
      try {
        // console.log(filterData.gender);
        if (filterData.searchString || filterData.status || filterData.gender) {
          try {
            const data = await getSearchedCharacter(
              filterData.searchString,
              filterData.status,
              filterData.gender
            );
            setCharacters(data?.data?.results);
            
          } catch (error) {
            console.log(error.response.data);
            setCharacters([]);

          }finally{
            setLoading(false);
          }
        } else {
          setLoading(true);
          const data = await getCharacters();
          setCharacters(data?.data?.results);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    filterCharacter();
  }, [filterData]);

  useEffect(() => {
    setFilterData((data) => ({ ...data, ["searchString"]: debouncedValue }));
  }, [debouncedValue]);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (e.target.name === "search") {
      // setFilterData((data) => ({ ...data, ["searchString"]: e.target.value }));
      setSearchValue(e.target.value);
    }

    if (e.target.name === "status") {
      setFilterData((data) => ({ ...data, ["status"]: e.target.value }));
    }
    if (e.target.name === "gender") {
      setFilterData((data) => ({ ...data, ["gender"]: e.target.value }));
    }
  };
  return (
    <div className="filterContainer rounded">
      <div className="filterBox bg-dark ">
        <div className="filterTitle">
          <h2 className="text-white text-center">Filter Characters</h2>
        </div>
        <form>
          <div className="filterSearch ">
            <input
              type="text"
              className="form-control"
              placeholder="Search Character"
              name="search"
              value={searchValue}
              onChange={handleSearch}
            />
          </div>
          <div className="filterStatus my-2">
            <select
              name="status"
              className="p-2 rounded w-100"
              onChange={handleSearch}
            >
              <option value="" selected>
                Select Status
              </option>
              <option value="alive">Alive</option>
              <option value="dead">Dead</option>
              <option value="unknown">Unknown</option>
            </select>
          </div>
          <div className="filterGender my-2">
            <select
              name="gender"
              className="p-2 rounded w-100"
              onChange={handleSearch}
            >
              <option
                value=""
                defaultChecked={filterData.gender === "" ? true : false}
              >
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="unknown">Unknown</option>
            </select>
          </div>
          <div className="filterBtn mt-2 ">
            <input
              type="reset"
              className="btn btn-success w-100"
              onClick={() =>
                {setSearchValue("")
                setFilterData({ searchString: "", status: "", gender: "" })}
              }
            />
          </div>
        </form>
      </div>
    </div>
  );
};
