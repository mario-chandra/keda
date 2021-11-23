import React from "react";
import { InputComp, LabelInput } from "../Style/StyledComponent";

const SubCom1 = () => {
  return (
    <>
      <div>
        <InputComp id="test2" type="text" placeholder="Hey!" />
        <LabelInput htmlFor="test">inner component</LabelInput>
      </div>
      <div>
        <LabelInput htmlFor="test">inner component</LabelInput>
        <InputComp id="test2" type="text" placeholder="Hey!" />
      </div>
    </>
  );
};

export default SubCom1;
