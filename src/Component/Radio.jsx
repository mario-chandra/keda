import React from "react";

const Radio = React.forwardRef(({ id, name, label, onclick }, ref) => {
  // const onClick = () => {
  //   input.current.focus();
  // };

  return (
    <>
      <input type="radio" id={id} name={name} onClick={onclick} />
      {/* <input ref={ref} type="text" /> */}
      <div style={{ display: "inline"}}>
        <label style={{ display: "inline-table" ,margin: "0px 10px 10px 10px" }} ref={ref}>
          {label}
        </label>
      </div>
    </>
  );
});

export default Radio;
