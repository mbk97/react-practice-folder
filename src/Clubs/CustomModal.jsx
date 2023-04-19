import { Dialog } from "@material-ui/core";
import React from "react";

const CustomModal = ({ children, open, handleClose }) => {
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        {children}
      </Dialog>
    </div>
  );
};

export default CustomModal;
