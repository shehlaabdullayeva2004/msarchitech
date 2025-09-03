import React from "react";
import { DotLoader } from "react-spinners";

export default function Loader() {
  return (
    <div
      className="loader d-flex justify-content-center align-items-center vh-100 "
      style={{ background: "#422C1A" }}
    >
      <DotLoader size={100} />
    </div>
  );
}
