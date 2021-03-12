import { useContext } from "react";
import { MdSearch } from "react-icons/md";
import AppContext from "./context/AppContext";
const Nav = () => {
  const {
    currentGuests,
    setSearchActive,
    currentLocation,
    setSelectSearch,
  } = useContext(AppContext);
  return (
    <nav>
      <div className="wrapper">
        <div className="logo">
          <span className="mascot"></span>windbnb
        </div>
        <div className="navSearch">
          <div
            className="inputDiv"
            onClick={() => {
              setSelectSearch("location");
              setSearchActive(true);
            }}
          >
            {currentLocation}
          </div>
          <div
            className="inputDiv"
            onClick={() => {
              setSelectSearch("guests");
              setSearchActive(true);
            }}
          >
            {currentGuests > 0 ? `${currentGuests} guests` : currentGuests}
          </div>
          <div className="inputBtn">
            <MdSearch />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
