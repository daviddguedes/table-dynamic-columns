import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import { Table } from "semantic-ui-react";

import TbodyComponent from "./../components/TbodyComponent";

describe("<TbodyComponent />", () => {
  it("renders <TbodyComponent />", () => {
    const wrapper = shallow(<TbodyComponent />);
    expect(wrapper.find(Table.Body)).to.have.lengthOf(1);
  });

  it("Rows not renders if data.rows props does not exists", () => {
    const wrapper = shallow(<TbodyComponent />);
    expect(wrapper.find(Table.Row)).to.have.lengthOf(0);
  });

  it("Rows renders if data.rows props exists", () => {
    const wrapper = shallow(
      <TbodyComponent selected={["col0"]} wells={[{ col0: "COL0" }]} />
    );
    expect(wrapper.find(Table.Row)).to.have.lengthOf(1);
  });
});
