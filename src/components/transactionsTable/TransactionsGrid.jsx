import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

import "./transactionsGrid.scss";

const TransactionsGrid = () => {
  const { columns, rows } = useContext(AppContext);

  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 500,
    maxColumns: 6,
  });

  const [pageSize, setPageSize] = React.useState(25);

  return (
    <div className="transactionsGrid">
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          //disableSelectionOnClick
          //experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          pageSize={pageSize}
          onPageSizeChange={(newPage) => setPageSize(newPage)}
          pagination
          {...data}
        />
      </div>
    </div>
  );
};

export default TransactionsGrid;
