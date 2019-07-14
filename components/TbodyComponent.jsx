import React from "react";
import { Table } from "semantic-ui-react";
import TcellComponent from "./TcellComponent";

function TbodyComponent({ selected, wells }) {
  return (
    <Table.Body>
      {selected &&
        wells &&
        wells.map((well, i) => (
          <Table.Row key={i}>
            <TcellComponent colsWells={selected} wellRow={well} />
          </Table.Row>
        ))}
    </Table.Body>
  );
}

export default TbodyComponent;
