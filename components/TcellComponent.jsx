import React from "react";
import { Table } from "semantic-ui-react";

function TcellComponent({ colsWells, wellRow }) {
  return colsWells.map((col, index) => {
    return <Table.Cell key={index}>{wellRow[col.key].value}</Table.Cell>;
  });
}

export default TcellComponent;
