import React from "react";
import { InputComp, LabelInput } from "../Style/StyledComponent";

const Input = () => {
  return (
    <>
      <InputComp id="hey" type="text" placeholder="Hey!" />
      <LabelInput htmlFor="hey">inner component</LabelInput>
    </>
  );
};

export default Input;
