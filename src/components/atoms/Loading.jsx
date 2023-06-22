import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

export default function Loading() {
  return (
    <div className="center">
      <CircularProgress color="inherit" size={96} />{" "}
    </div>
  );
}
