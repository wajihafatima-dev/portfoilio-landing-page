import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

// Main AlertDialog wrapper
function AlertDialog({ open, onClose, children }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      {children}
    </Dialog>
  );
}

// Header / Title
function AlertDialogTitleComponent({ children }) {
  return <DialogTitle id="alert-dialog-title">{children}</DialogTitle>;
}

// Content / Description
function AlertDialogDescription({ children }) {
  return <DialogContent><DialogContentText>{children}</DialogContentText></DialogContent>;
}

// Footer / Actions
function AlertDialogFooter({ children }) {
  return <DialogActions>{children}</DialogActions>;
}

// Action Button
function AlertDialogAction({ children, onClick }) {
  return <Button onClick={onClick} variant="contained">{children}</Button>;
}

// Cancel Button
function AlertDialogCancel({ children, onClick }) {
  return <Button onClick={onClick} variant="outlined">{children}</Button>;
}

// Example usage
export default function ExampleDialog() {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Button variant="contained" onClick={() => setOpen(true)}>Open Alert</Button>

      <AlertDialog open={open} onClose={() => setOpen(false)}>
        <AlertDialogTitleComponent>Delete Item</AlertDialogTitleComponent>
        <AlertDialogDescription>
          Are you sure you want to delete this item? This action cannot be undone.
        </AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setOpen(false)}>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => { alert("Deleted!"); setOpen(false); }}>
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialog>
    </div>
  );
}

// Export all components
export {
  AlertDialog,
  AlertDialogTitleComponent as AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
};
