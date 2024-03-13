import * as React from "react";
import { DataGridPremium, GridColDef } from "@mui/x-data-grid-premium";
import { useDemoData } from "@mui/x-data-grid-generator";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

export default function ClipboardCopy() {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 10,
    maxColumns: 20,
  });

  const [copiedData, setCopiedData] = React.useState(() => {
    // Retrieve persisted data from localStorage when the component mounts
    const persistedData = localStorage.getItem("copiedData");
    return persistedData ? persistedData : "";
  });

  React.useEffect(() => {
    // Persist copiedData to localStorage whenever it changes
    localStorage.setItem("copiedData", copiedData);
  }, [copiedData]);

  const initialState = {
    ...data.initialState,
    columns: {
      columnVisibilityModel: {
        id: false,
        desk: false,
      },
    },
  };

  // Function to parse the copied string into rows and columns for DataGridPremium
  const { rows, columns } = React.useMemo(() => {
    const rowsArray = parseCopiedData(copiedData);
    if (rowsArray.length === 0) return { rows: [], columns: [] };

    const columns = rowsArray[0].map((cell, index) => ({
      field: `col${index}`,
      headerName: cell,
      width: 150,
    }));

    const rows = rowsArray.slice(1).map((row, rowIndex) => {
      return row.reduce(
        (acc, cell, cellIndex) => {
          acc[`col${cellIndex}`] = cell;
          return acc;
        },
        { id: rowIndex }
      );
    });

    return { rows, columns };
  }, [copiedData]);

  return (
    <div style={{ width: "100%", marginTop: 20 }}>
      <div style={{ height: 400, width: "100%" }}>
        <DataGridPremium
          {...data}
          initialState={initialState}
          checkboxSelection
          disableRowSelectionOnClick
          // unstable_cellSelection
          onClipboardCopy={(copiedString) => setCopiedData(copiedString)}
          unstable_ignoreValueFormatterDuringExport
        />
      </div>
      {copiedData && (
        <Alert severity="info" sx={{ width: "100%", mt: 2 }}>
          <AlertTitle>Copied data:</AlertTitle>
          <div style={{ height: 400, width: "100%" }}>
            <DataGridPremium
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
              disableSelectionOnClick
            />
          </div>
        </Alert>
      )}
    </div>
  );
}

// Function to parse the copied string into a 2D array
const parseCopiedData = (dataString) => {
  return dataString
    .split("\n")
    .filter((row) => row)
    .map((row) => row.split("\t"));
};
