import SingleRoom from "./SingleRoom";
import AppContext from "./context/AppContext";
import { useContext } from "react";
const AllRooms = () => {
  const { filterData } = useContext(AppContext);
  return (
    <>
      <div className="wrapper">
        <div className="page-header">
          <h2>Stays in Finland</h2>
          {filterData.length !== 0 && (
            <div className="sub-text">{filterData.length}+ stays</div>
          )}
        </div>
        <div className="rommsgrid">
          {filterData.map((room) => {
            return <SingleRoom key={room.id} {...room} />;
          })}
        </div>
      </div>
    </>
  );
};

export default AllRooms;
