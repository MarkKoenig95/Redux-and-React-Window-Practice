import React from "react";
import ReactDOM from "react-dom";
import { FixedSizeGrid } from "react-window";
import { connect } from "react-redux";

import "./grid-styles.css";

const Cell = ({ columnIndex, rowIndex, style }) => (
  <div
    className={
      columnIndex % 2
        ? rowIndex % 2 === 0
          ? "GridItemOdd"
          : "GridItemEven"
        : rowIndex % 2
        ? "GridItemOdd"
        : "GridItemEven"
    }
    style={style}
  >
    r{rowIndex}, c{columnIndex}
  </div>
);

function Grid(props) {
  return (
    <FixedSizeGrid
      className="Grid"
      columnCount={props.columns > 0 ? props.columns : 0}
      columnWidth={100}
      height={150}
      rowCount={props.rows > 0 ? props.rows : 0}
      rowHeight={35}
      width={386}
    >
      {Cell}
    </FixedSizeGrid>
  );
}

function mapStateToProps(state) {
  return {
    rows: state.rows,
    columns: state.columns
  };
}

export default connect(mapStateToProps)(Grid);
