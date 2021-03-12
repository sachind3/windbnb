import AppContext from "./AppContext";
import items from "./../data";
import { useState } from "react";
const AppState = (props) => {
  const [searchActive, setSearchActive] = useState(false);
  const [selectSearch, setSelectSearch] = useState("location");
  const [currentLocation, setCurrentLocation] = useState("Select location");
  const [location, setLocation] = useState("Select location");
  const [guest, setGuest] = useState("Add guests");
  const [currentGuests, setCurrentGuests] = useState("Add guests");
  const [adults, setAdults] = useState(0);
  const [childs, setChilds] = useState(0);
  let filterData = items.filter((item) => {
    if (currentLocation === "Select location") {
      return items;
    }
    return item.location === currentLocation && item.maxGuests >= currentGuests;
  });
  return (
    <AppContext.Provider
      value={{
        items,
        filterData,
        currentLocation,
        setCurrentLocation,
        currentGuests,
        setCurrentGuests,
        searchActive,
        setSearchActive,
        selectSearch,
        setSelectSearch,
        adults,
        setAdults,
        childs,
        setChilds,
        location,
        setLocation,
        guest,
        setGuest,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
