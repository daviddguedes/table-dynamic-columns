import React from "react";
import TheadComponent from "./TheadComponent";
import TbodyComponent from "./TbodyComponent";
import { Table } from "semantic-ui-react";

function TableComponent({ selected, data }) {
  return (
    <Table celled>
      <TheadComponent selected={selected} />
      <TbodyComponent selected={selected} wells={data} />
    </Table>
  );
}

export default TableComponent;
