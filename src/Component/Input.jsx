import React, { Component } from "react";
import Radio from "./Radio";
import { InputComp, LabelInput } from "../Style/StyledComponent";

export default class Input extends Component {
  constructor(props){
      super(props)
      this.inputRef = React.createRef()
  } 

  clickHandler=()=>{
      this.inputRef.current.focus()
  }

  render(){
    return (
      <div>
        <Radio 
          ref={this.inputRef}
          id={this.props.id}
          name={this.props.name}
          onclick={this.clickHandler}
          label={
            <>
            <InputComp id="hey" type="text" placeholder="Hey!" />
            <LabelInput htmlFor="hey">inner component</LabelInput>
            </>            
          }/>
       
      </div>
    );
  }
}
