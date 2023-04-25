import React from "react";
import "./HotelCard.css";

export default function HotelCard(props) {
  var onestar = "⭐";
  var halfstar = "☆";
  var stars = onestar.repeat(props.stars);
  if (props.stars % 1 !== 0) stars += halfstar;
  const slashIndex = props.rating.indexOf("/");
  const rating = +props.rating.slice(0, slashIndex);
  let reaction;
  if (rating >= 5 && rating < 6) reaction = "Decent!";
  else if (rating >= 6 && rating < 7) reaction = "";
  else if (rating >= 7 && rating < 8) reaction = "Good!";
  else if (rating >= 8 && rating < 9) reaction = "Very Good!";
  else if (rating >= 9 && rating < 10) reaction = "Wonderful!";
  return (
    <div className="hotelgrid">
      <div className="Hotelcard">
        <img src={props.imageURL} alt={"profile_img"} className="hotelimg" />
        <div>
          <p className="hotelname">{props.name}</p>
          <h3>{stars}</h3>
          <p className="hoteldesc">{props.description}</p>
          <p>
            <span className="hotelrat"> {props.rating} </span>{" "}
            <span style={{ color: "gray" }}>
              {reaction}({props.reviews}
            </span>
            )
          </p>
        </div>
      </div>
    </div>
  );
}
