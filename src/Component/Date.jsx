import React, { Component } from "react";
import Radio from "./Radio";
import { InputComp, LabelInput } from "../Style/StyledComponent";

export default class Date extends Component {
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
            <LabelInput htmlFor="hey">inner component</LabelInput>
            <InputComp id="hey" type="date" placeholder="Hey!" />
            
            </>            
          }/>
       
      </div>
    );
  }
}
