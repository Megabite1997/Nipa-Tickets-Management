import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";

interface EditDialogProps {
  selectedRow: any;
  onClose: () => void;
  onSave: (updatedRow: any) => void;
}

const EditDialog: React.FC<EditDialogProps> = ({
  selectedRow = {},
  onClose,
  onSave,
}) => {
  const [editedRow, setEditedRow] = useState(selectedRow);

  useEffect(() => {
    setEditedRow(selectedRow); // Update dialog state when the selected row changes
  }, [selectedRow]);

  const handleSave = () => {
    onSave(editedRow);
    onClose();
  };

  if (!selectedRow) return null;

  return (
    <Dialog open={Boolean(selectedRow)} onClose={onClose}>
      <DialogTitle>Edit Row</DialogTitle>
      <DialogContent>
        <TextField
          label="Title"
          fullWidth
          margin="dense"
          value={editedRow?.title || ""}
          onChange={(e) =>
            setEditedRow({ ...editedRow, title: e.target.value })
          }
        />
        <TextField
          label="Description"
          fullWidth
          margin="dense"
          value={editedRow?.description || ""}
          onChange={(e) =>
            setEditedRow({ ...editedRow, description: e.target.value })
          }
        />
        <TextField
          label="Contact Information"
          fullWidth
          margin="dense"
          value={editedRow?.contact_information || ""}
          onChange={(e) =>
            setEditedRow({
              ...editedRow,
              contact_information: e.target.value,
            })
          }
        />
        <Select
          fullWidth
          value={editedRow.status || ""}
          onChange={(e) =>
            setEditedRow({ ...editedRow, status: e.target.value })
          }
          style={{ marginTop: 16 }}
        >
          <MenuItem value="active">Active</MenuItem>
          <MenuItem value="inactive">Inactive</MenuItem>
          <MenuItem value="pending">Pending</MenuItem>
        </Select>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditDialog;
