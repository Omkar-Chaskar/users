import React from "react";

function Card(props) {
  return (
    <div className="col">
      <div className="user">
        <div className="picture">
          <img className="img-fluid" src={props.user.avatar} alt="" />
        </div>
        <div className="team-content">
          <h3 className="name">
            {props.user.first_name} {props.user.last_name}
          </h3>
          <h4 className="title">{props.user.email}</h4>
        </div>
      </div>
    </div>
  );
}

export default Card;
