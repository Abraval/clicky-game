import React from "react";
import "./style.css";

const FriendCard = (props) => (
    <div className="card float-right border-0">
      <div className="img-container img-top img img-fluid">
        <img alt={props.name} src={props.image} onClick={() => props.handleclick(props.id)} />
      </div>
    </div>
)

export default FriendCard;
