import React from "react";

const Radio = React.forwardRef(({ id, name, label, onclick }, ref) => {
  // const onClick = () => {
  //   input.current.focus();
  // };

  return (
    <div style={{display:"flex" ,marginBottom:"20px"}}>
      <input type="radio" id={id} name={name} onClick={onclick} />
      {/* <input ref={ref} type="text" /> */}
      <div>
        <label style={{ display: "inline-table",marginLeft:"5px" }} ref={ref}>
          {label}
        </label>
      </div>
    </div>
  );
});

export default Radio;
