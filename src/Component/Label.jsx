import React, { Component } from "react";
import Radio from "./Radio";

import { FlexContainer } from "../Style/StyledComponent";


export default class Label extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  clickHandler = () => {
    this.inputRef.current.focus();
  };

  
  render() {
    const letter = ["A", "B", "C"];

    return (
      <FlexContainer>
        {letter.map((e) => {
            return (
              <div style={{margin:"0px 10px 5px 0"}}>
                <Radio id="name" name="name" label={`Radio ${e}`} />
              </div>
            );
          })}
      </FlexContainer>
    );
  }
}
