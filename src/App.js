import { useContext } from "react";
import AppContext from "./context/AppContext";
import AllRooms from "./AllRooms";
import Nav from "./Nav";
import SearchBox from "./SearchBox";
import Footer from "./Footer";
function App() {
  const { items, searchActive } = useContext(AppContext);
  return (
    <>
      {searchActive && <SearchBox />}

      <Nav />
      <AllRooms rooms={items} />
      <Footer />
    </>
  );
}

export default App;
