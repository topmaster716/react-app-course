import React from "react";

import "./Person.css";

const person = props => {
  return (
    <div className="Person" onClick={props.click}>
      <p>
        person {props.name} component number is {props.age}
      </p>
      <p>{props.children}</p>
      <input onChange={props.changed} value={props.name}></input>
    </div>
  );
};

export default person;
