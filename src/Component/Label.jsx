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
    const letter = ["a", "b", "c"];

    return (
      <FlexContainer>
        {letter.map((e) => {
            return (
              <div>
                <Radio id="name" name="name" label={`radio ${e}`} />
              </div>
            );
          })}
      </FlexContainer>
    );
  }
}
