import React from "react";
import "./style.css";
const friendCard = (props) => {
    return (
      <div className="card">
        <div className={`img-container text-center ${props.name.replace(/ +/g, "")}`}>
          <img className={props.isGameLost ? "img-shake m-2 img-fluid" : "none m-3 img-fluid"}
            alt={props.name}  
            src={props.image} 
            onClick = {() => 
              { 
                props.handleClicked(props.id, props.name.replace(/ +/g, ""));
              }
            }
            onMouseEnter ={ () =>
              {
                props.handleMouseEnter(props.name.replace(/ +/g, ""));
              }
            }
            onMouseLeave ={ () =>
              {
                props.handleMouseLeave(props.name.replace(/ +/g, ""));
              } 
            }
          />
        </div>
        {/*<div className="content">
          <ul>
          <li>
              <strong>ID:</strong> {props.id}
            </li>
            <li>
              <strong>Name:</strong> {props.name}
            </li>
            <li>
              <strong>Occupation:</strong> {props.occupation}
            </li>
            <li>
              <strong>Location:</strong> {props.location}
            </li>
            <li>
              <strong>Clicked: {value}</strong>
            </li>
            <li>
              <strong>isGameLost: {isGameLost}</strong>
            </li>
          </ul>
          </div>*/}
      </div>
    );//return
};//function

export default friendCard;
