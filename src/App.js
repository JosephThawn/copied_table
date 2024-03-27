import { Button } from "@mui/base";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";

const App = () => {
  const initialRows = [
    { id: 1, name: "Joseph", address: "1234 St Tulsa Ok" },
    { id: 2, name: "Peter", address: "435 St Dumas TX" },
    { id: 3, name: "John", address: "356 St Dallas CI" },
  ];
  const [rows, setRows] = useState(initialRows);
  const [openModal, setOpenModal] = useState(false);
  const [editableRow, setEditableRow] = useState({});

  const handleCopy = (row) => {
    setEditableRow({ ...row });
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleChange = (e) => {
    setEditableRow({ ...editableRow, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => [
    setRows([...rows, { ...editableRow, id: rows.length + 1 }]),
    setOpenModal(false),
  ];

  const columns = [
    { field: "id", headerName: "ID", width: 200 },
    { field: "name", headerName: "Nmae", width: 200 },
    { field: "address", headerName: "Address", width: 200 },
    {
      field: "actions",
      headerName: "Copy",
      renderCell: (params) => {
        console.log("params", params);
        return <Button onClick={() => handleCopy(params.row)}>copy row</Button>;
      },
    },
  ];

  return (
    <div>
      <DataGrid rows={rows} columns={columns} page={5}></DataGrid>
      <Dialog open={openModal} onClose={handleClose}>
        <DialogTitle>A copy row</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            type="text"
            variant="standard"
            fullWidth
            value={editableRow.name || ""}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="address"
            type="text"
            variant="standard"
            fullWidth
            value={editableRow.address || ""}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>cancle</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default App;
