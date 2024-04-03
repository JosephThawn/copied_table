import React from "react";
import { Button } from "@mui/base";

const DataGridColumns = ({ handleCopy, handleEdit }) => {
  return [
    { field: "id", headerName: "ID", width: 200 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "address", headerName: "Address", width: 200 },
    {
      field: "actions",
      headerName: "Copy",
      width: 150,
      renderCell: (params) => {
        console.log("params", params);
        const onCopyHandler = handleCopy(params.row);
        return <Button onClick={onCopyHandler}>copy row</Button>;
      },
    },
    {
      field: "edit",
      headerName: "Edit",
      width: 150,
      renderCell: (params) => {
        const onEditHandler = handleEdit(params.row);
        return <Button onClick={onEditHandler}>Edit row</Button>;
      },
    },
  ];
};

export default DataGridColumns;
