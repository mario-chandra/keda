import React from "react";

const SubCom1 = () => {
  return (
    <div>
      <div>
        <input
          style={{ height: "35px" }}
          id="test"
          type="text"
          placeholder="Hey!"
        />
        <label style={{ display: "block", fontSize: "0.7em" }} htmlFor="test">
          inner component
        </label>
      </div>
      <div>
        <input
          style={{ height: "35px" }}
          id="test"
          type="text"
          placeholder="Hey!"
        />
        <label style={{ display: "block", fontSize: "0.7em" }} htmlFor="test">
          inner component
        </label>
      </div>
    </div>
  );
};

export default SubCom1;
