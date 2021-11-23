import { render, fireEvent } from "@testing-library/react";
import Radio from "./Component/Radio";
import React, { useState } from "react";
import { getAllByRole } from "@testing-library/dom";


const RadioButtonGroup = () => {
  const [selectedId, setSelectedId] = useState("select_1");
  const handleChange = (ev) => {
    setSelectedId(ev.target.id);
  };
  return (
    <React.Fragment>
      <Radio
        role="radio"
        id="select_1"
        onClick={handleChange}
        isChecked={selectedId === "select_1"}
        name="1"
        label="Dummy Radio1"
      />
      <Radio
        role="radio"
        id="select_2"
        onClick={handleChange}
        isChecked={selectedId === "select_2"}
        name="1"
        label="Dummy Radio2"
      />
      <Radio
        role="radio"
        id="select_3"
        onClick={handleChange}
        isChecked={false}
        label="Dummy Radio3"
        name="1"
        isChecked={selectedId === "select_2"}
      />
    </React.Fragment>
  );
};

it("should only one radio button is checked", () => {
  const handleChange = jest.fn();
  const { container } = render(<RadioButtonGroup onClick={handleChange} />);
  const dialogContainer = getAllByRole(container, "radio");
  const checkedItemsBeforeClick = dialogContainer.filter((el) => el.checked);
  expect(checkedItemsBeforeClick.length).toEqual(0);
  fireEvent.click(dialogContainer[0]);

  const checkedItemsAfterClick = dialogContainer.filter((el) => el.checked);
  expect(checkedItemsAfterClick.length).toEqual(1);
});


