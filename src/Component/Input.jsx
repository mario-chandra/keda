import React from "react";

const Input = () => {
  return (
    <>
      <input
        style={{ height: "35px" }}
        id="hey"
        type="text"
        placeholder="Hey!"
      />
      <label style={{ display: "block", fontSize: "0.7em" }} htmlFor="hey">
        inner component
      </label>
    </>
  );
};

export default Input;
