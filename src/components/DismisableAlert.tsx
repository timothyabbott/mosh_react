import { useState } from "react";

interface Props {
  alertText: String;
  onClose: () => void;
}

const DismisableAlert = ({ alertText, onClose }: Props) => {
  return (
    <div
      className={"alert alert-warning alert-dismissible fade " + "show"}
      role="alert"
    >
      <strong>{alertText}</strong>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default DismisableAlert;
