import { MdStar } from "react-icons/md";
const SingleRoom = ({
  location,
  superHost,
  title,
  maxGuests,
  rating,
  type,
  beds,
  url,
}) => {
  return (
    <div className="singleRoom">
      <div className="romm-image">
        <img src={url} alt={title} />
      </div>
      <div className="room-body">
        <div className="roomInfo">
          {superHost && <div className="superHost">Super host</div>}
          <div className="hotelTypeBed">
            {type}
            {beds && `. ${beds} beds`}
          </div>
          {rating && (
            <div className="rating">
              <MdStar /> {rating}
            </div>
          )}
        </div>
        <h4>{title}</h4>
      </div>
    </div>
  );
};

export default SingleRoom;
