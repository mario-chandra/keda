import React, { useRef } from "react";

const Radio = (props) => {
  const input = useRef(null);

  const onClick = () => {
    input.current.focus();
  };
  return (
    <div>
      <input type="radio" id={props.id} name={props.name} onClick={onClick} />

      <div style={{ display: "inline" }}>
        <label
          style={{ display: "inline-table", margin: "0px 10px 10px 10px" }}
          ref={input}
          htmlFor={props.id}
        >
          {props.label}
        </label>
      </div>
    </div>
  );
};

export default Radio;
