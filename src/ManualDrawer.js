import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from "@mui/material";
import { Button } from "@mui/base";

const ManualDrawer = ({
  openModal,
  handleClose,
  handleChange,
  editableRow,
  handleSubmit,
  modalMode,
  handleSave,
}) => {
  return (
    <Dialog open={openModal} onClose={handleClose}>
      <DialogTitle>
        {modalMode === "copy" ? "A new copy row" : "A new edit row"}
      </DialogTitle>
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
        {modalMode === "edit" ? (
          <Button onClick={handleSave}>Save</Button>
        ) : (
          <Button onClick={handleSubmit}>Submit</Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default ManualDrawer;
