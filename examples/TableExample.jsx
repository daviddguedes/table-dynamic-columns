import React, { useState, Fragment } from "react";
import { Button } from "semantic-ui-react";
import TableScreen from "../TableScreen";
import { MockService1 } from "../TableService";

function TableExample() {
  const data = MockService1();

  const [ toggleModal, setToggleModal ] = useState(false);

  const handleChangeTable = (data) => {
    setToggleModal(false);
  }

  return (
    <Fragment>
      <Button primary onClick={() => setToggleModal(true)}>
        Select
      </Button>

      <TableScreen
        data={data}
        toggleModal={toggleModal}
        handleChangeTable={handleChangeTable}
      />
    </Fragment>
  )
}

export default TableExample;
