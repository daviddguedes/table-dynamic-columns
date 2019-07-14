import React, { Component, Fragment } from "react";
import TableComponent from "./components/TableComponent";
import ModalComponent from "./components/ModalComponent";

class TableScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: { columns: [], rows: [] },
      originalData: { columns: [], rows: [] },
      selectedColumns: [],
      modalOpen: false
    };

    this.selectedColumnsToString = this.selectedColumnsToString.bind(this);
    this.handleAddRemoveColumn = this.handleAddRemoveColumn.bind(this);
  }

  componentDidMount() {
    const { data } = this.props;
    this.setState({
      data: { columns: data.columns || [], rows: data.rows || [] },
      originalData: { columns: data.columns || [], rows: data.rows || [] }
    });
  }

  componentWillReceiveProps(props) {
    this.setState({modalOpen: props.toggleModal});
  }

  handleAddRemoveColumn(values) {
    let initialState = this.state.originalData;

    let cols = [];
    let rows = [];

    values.forEach(val => {
      initialState.columns.forEach(el => {
        if (el.label === val) {
          cols.push(el);
        }
      });
    });

    if (cols.length > 0) {
      initialState.rows.forEach(well => {
        let obj = {};
        cols.forEach(column => {
          obj[column.key] = well[column.key];
        });
        rows.push(obj);
      });
    }

    if (cols.length > 0 && rows.length > 0) {
      this.setState(
        prevState => ({
          data: { ...prevState.data, rows: rows },
          selectedColumns: cols
        }),
        () => this.props.handleChangeTable(cols)
      );
    }
  }

  selectedColumnsToString() {
    const { data, selectedColumns } = this.state;
    if (selectedColumns.length > 0) {
      return selectedColumns;
    }
    return data.columns.map(i => i.label);
  }

  selectedColumnsToModel() {
    const { selectedColumns, data } = this.state;
    let cols = [];
    if (selectedColumns.length > 0) {
      selectedColumns.forEach(val => {
        data.columns.forEach(el => {
          if (el.label === val.label) {
            cols.push(val);
          }
        });
      });
      return cols;
    } else {
      return data.columns;
    }
  }

  render() {
    const { data, modalOpen } = this.state;

    if (data.columns.length > 0 && data.rows.length > 0) {
      return (
        <Fragment>
          <ModalComponent
            columns={data.columns}
            selected={this.selectedColumnsToString}
            handleAddRemoveColumn={this.handleAddRemoveColumn}
            modalOpen={modalOpen}
          />
          <TableComponent
            selected={this.selectedColumnsToModel()}
            data={data.rows}
          />
        </Fragment>
      );
    }

    return <h1>Loading...</h1>;
  }
}

export default TableScreen;
