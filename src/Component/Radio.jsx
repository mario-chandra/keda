import React, { useRef } from "react";

const Radio = ({id,name,label}) => {
  const input = useRef(null);

  const onClick = () => {
    input.current.focus();
  };

  return (
    <div style={{ display: "flex",marginBottom:"20px" }}>
      <input type="radio" id={id} name={name}  onClick={onClick} />

        <label
          style={{ display: "inline", margin: "0px 10px 0px 10px" }}
          ref={input}
          htmlFor={id}
        >
          {label}
        </label>
      
    </div>
  );
};

export default Radio;
