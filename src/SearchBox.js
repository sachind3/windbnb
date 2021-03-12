import { useContext, useEffect } from "react";
import { MdSearch } from "react-icons/md";
import AppContext from "./context/AppContext";
const SearchBox = () => {
  const {
    items,
    selectSearch,
    setSelectSearch,
    adults,
    setAdults,
    location,
    setLocation,
    childs,
    setChilds,
    setCurrentGuests,
    setSearchActive,
    setCurrentLocation,
    guest,
    setGuest,
  } = useContext(AppContext);
  const locationOptions = [...new Set(items.map((item) => item.location))];
  const minAdult = () => {
    if (adults === 0) return;
    setAdults(adults - 1);
  };
  const addAdult = () => {
    setAdults(adults + 1);
  };
  const minChild = () => {
    if (childs === 0) return;
    setChilds(childs - 1);
  };
  const addChild = () => {
    setChilds(childs + 1);
  };
  const handleSearch = () => {
    setCurrentLocation(location);
    setCurrentGuests(adults + childs);
    setSearchActive(false);
  };
  useEffect(() => {
    setGuest(adults + childs);
  }, [adults, childs, setGuest]);
  return (
    <>
      <section className="searchBox">
        <div className="wrapper">
          <div className="searchBar">
            <div className="input-wrapper">
              <div
                className="inputDiv"
                onClick={() => setSelectSearch("location")}
              >
                <span>Location</span>
                <div>{location}</div>
              </div>
              <div
                className="inputDiv"
                onClick={() => setSelectSearch("guests")}
              >
                <span>Guests</span>
                <div>{guest > 0 ? `${guest} guests` : "Add guests"}</div>
              </div>
            </div>
            {selectSearch === "location" && (
              <div className="searchModal locationModal">
                <ul>
                  {locationOptions.map((location, index) => (
                    <li key={index} onClick={() => setLocation(location)}>
                      {location}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {selectSearch === "guests" && (
              <div className="searchModal peopleModal">
                <div className="peopleCouter">
                  <h4>Adults</h4>
                  <p>Age 13 or above</p>
                  <div className="counter">
                    <button onClick={minAdult}>-</button>
                    <div className="peopleCount">{adults}</div>
                    <button onClick={addAdult}>+</button>
                  </div>
                </div>
                <div className="peopleCouter">
                  <h4>Children</h4>
                  <p>Age 2 - 12</p>
                  <div className="counter">
                    <button onClick={minChild}>-</button>
                    <div className="peopleCount">{childs}</div>
                    <button onClick={addChild}>+</button>
                  </div>
                </div>
              </div>
            )}
            <button type="button" className="searchBtn" onClick={handleSearch}>
              <MdSearch /> Search
            </button>
          </div>
        </div>
      </section>
      <div className="backdrop" onClick={() => setSearchActive(false)}></div>
    </>
  );
};

export default SearchBox;
