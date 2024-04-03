import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";
import ManualDrawer from "./ManualDrawer";
import DataGridColumns from "./DataGridColumns";

const App = () => {
  const initialRows = [
    { id: 1, name: "Joseph", address: "1234 St Tulsa Ok" },
    { id: 2, name: "Peter", address: "435 St Dumas TX" },
    { id: 3, name: "John", address: "356 St Dallas CI" },
  ];
  const [rows, setRows] = useState(initialRows);
  const [openModal, setOpenModal] = useState(false);
  const [editableRow, setEditableRow] = useState({});
  const [modalMode, setModalMode] = useState("");

  const handleCopy = (row) => {
    setEditableRow({ ...row });
    setOpenModal(true);
    setModalMode("copy");
  };

  const handleEdit = (row) => {
    setEditableRow({ ...row });
    setOpenModal(true);
    setModalMode("edit");
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

  const handleSave = () => {
    const updateRow = rows.map((row) =>
      row.id === editableRow.id ? editableRow : row
    );
    setRows(updateRow);
    setOpenModal(false);
  };

  const columns = DataGridColumns({ handleCopy, handleEdit });

  return (
    <div>
      <DataGrid rows={rows} columns={columns} page={5}></DataGrid>
      <ManualDrawer
        openModal={openModal}
        handleClose={handleClose}
        handleChange={handleChange}
        editableRow={editableRow}
        handleSubmit={handleSubmit}
        modalMode={modalMode}
        handleSave={handleSave}
      />
    </div>
  );
};

export default App;
