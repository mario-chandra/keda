import react from "react";
import { render,fireEvent } from "@testing-library/react";
import Radio from "./Component/Radio";
import React from "react";

it("should only one radio button is checked",()=>{
    const handleChange = jest.fn();
    const {container} = render(
        <React.Fragment>
            <Radio  />

        </React.Fragment>
    )
    const 

})