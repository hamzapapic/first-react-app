import React from "react";
import "./HotelCard.css";

export default function HotelCard(props) {
  var star = 0;
  if (parseInt(props.stars) % 1 !== 0) {
    star = parseInt(props.stars) + 1;
  }
  return (
    <div className="hotelgrid">
      <div className="Hotelcard">
        <img src={props.imageURL} alt={"profile_img"} className="hotelimg" />
        <div>
          <p className="hotelname">{props.name}</p>
          <h3>{}</h3>
          <p className="hoteldesc">{props.description}</p>
          <p>
            <span className="hotelrat"> {props.rating} </span>{" "}
            <span style={{ color: "gray" }}>({props.reviews} </span>)
          </p>
        </div>
      </div>
    </div>
  );
}
