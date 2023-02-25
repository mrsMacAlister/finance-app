import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { auth } from "../../firebase";

import "./transactionsGrid.scss";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

const TransactionsGrid = () => {
  console.log(auth.currentUser);
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
          pageSize={pageSize}
          //rowsPerPageOptions={[10, 25, 50]}
          onPageSizeChange={(newPage) => setPageSize(newPage)}
          //pagination
          //checkboxSelection
          //disableSelectionOnClick
          //experimentalFeatures={{ newEditingApi: true }}
        />{" "}
        <EditOutlinedIcon /> <DeleteForeverOutlinedIcon />
      </Box>
    </div>
  );
};

/*<div style={{ height: 400, width: "100%" }}>
        <DataGrid
          pageSize={pageSize}
          onPageSizeChange={(newPage) => setPageSize(newPage)}
          pagination
          {...data}
        />
      </div> */
export default TransactionsGrid;
