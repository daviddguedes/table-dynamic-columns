import React, { useState, useEffect } from "react";
import { Button, Modal, Dropdown, Divider } from "semantic-ui-react";

const ModalComponent = ({ columns, selected, handleAddRemoveColumn, modalOpen }) => {
  const [colOptions, setColOptions] = useState([]);
  const [values, setValues] = useState(selected);
  const tmpColumns = [];
  const tmpValues = [];

  const init = () => {
    columns.forEach((col, i) => {
      const item = {
        key: col.key,
        value: col.label,
        text: col.label
      };
      tmpColumns.push(item);
      tmpValues.push(item.value);
    });

    setColOptions(tmpColumns);
    if (values.length < 2) {
      setValues([tmpValues[0], tmpValues[1]]);
    }
  };

  useEffect(() => {
    init();
  });

  const handleChange = (_e, { value }) => {
    const res1 = value.includes(values[0]);
    const res2 = value.includes(values[1]);
    if (res1 && res2) {
      setValues(value);
    }
  };

  const selectAll = () => setValues(tmpValues);

  const handleReset = () => {
    setValues([]);
    setValues([tmpValues[0], tmpValues[1]]);
  };

  return (
    <Modal open={modalOpen} centered={false}>
      <Modal.Header>Select columns</Modal.Header>
      <Button.Group>
        <Button onClick={selectAll} primary>
          Select All
        </Button>
        <Button onClick={handleReset} primary>
          Reset
        </Button>
        <Button onClick={() => handleAddRemoveColumn(values)} color="red">
          Confirm Selection
        </Button>
      </Button.Group>
      <Divider />
      <Dropdown
        placeholder="Select columns"
        fluid
        multiple
        search
        selection
        onChange={handleChange}
        options={colOptions}
        value={values}
      />
      <Modal.Content />
    </Modal>
  );
};

export default ModalComponent;
