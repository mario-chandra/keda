import React from "react";
import { InputComp, LabelInput } from "../Style/StyledComponent";

const Date = () => {
  return (
    <>
      <LabelInput  htmlFor="test">
        inner component
      </LabelInput>
      <InputComp
        style={{ height: "35px" }}
        id="test"
        type="date"
        placeholder="Hey!"
      />
    </>
  );
};

export default Date;
