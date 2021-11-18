import React from "react";

const Date = () => {
  return (
    <div>
      <label style={{ display: "block", fontSize: "0.7em" }} htmlFor="test">
        inner component
      </label>
      <input
        style={{ height: "35px" }}
        id="test"
        type="date"
        placeholder="Hey!"
      />
    </div>
  );
};

export default Date;
