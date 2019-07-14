import React from "react";
import { expect } from "chai";
import { mount } from "enzyme";
import sinon from "sinon";

import ModalComponent from "./../components/ModalComponent";

describe("<ModalComponent />", () => {
  let props = {
    columns: [
      {
        key: "name",
        value: "name",
        text: "Name"
      },
      {
        key: "status",
        value: "status",
        text: "Status"
      },
      {
        key: "col3",
        value: "col3",
        text: "Col3"
      }
    ],
    selected: ["name", "status", "col3"],
    handleAddRemoveColumn: sinon.spy(),
    modalOpen: false
  };

  it("renders a visible <ModalComponent />", () => {
    let newProps = { ...props, modalOpen: true };
    const wrapper = mount(<ModalComponent {...newProps} />);
    expect(wrapper.find(".content")).to.have.lengthOf(1);
  });
});
