import React from "react";
import "./style.css";

const FriendCard = props => (
  <div className="card float-right border-0">
    <div className="img-container">
        <img onClick={() => props.selectFriend(props.name)} alt={props.name} src={props.image} />
    </div>
  </div>
);

export default FriendCard;
