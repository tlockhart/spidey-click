import React from "react";
import "./style.css";
const friendCard = (props) => {
  return (
    <div className="card">
      <div className={`img-container text-center ${props.name.replace(/ +/g, "")}`}>
        <img className={props.isGameLost ? "img-shake m-2 img-fluid" : "none m-3 img-fluid"}
          alt={props.name}
          src={props.image}
          onClick={() => {
            props.handleClicked(props.id, props.name.replace(/ +/g, ""));
          }
          }
          onMouseEnter={() => {
            props.handleMouseEnter(props.name.replace(/ +/g, ""));
          }
          }
          onMouseLeave={() => {
            props.handleMouseLeave(props.name.replace(/ +/g, ""));
          }
          }
        />
      </div>
    </div>
  );//return
};//function

export default friendCard;
