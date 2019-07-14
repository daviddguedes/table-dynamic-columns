import React from "react";
import { Table } from "semantic-ui-react";

function TheadComponent({ selected }) {
  return (
    <Table.Header>
      <Table.Row>
        {selected.map((col, index) => (
          <Table.HeaderCell key={index}>{col.label}</Table.HeaderCell>
        ))}
      </Table.Row>
    </Table.Header>
  );
}

export default TheadComponent;
