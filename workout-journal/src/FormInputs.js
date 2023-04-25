import React from "react";
export function FormInputs({}) {
  return (
    <div className="row g-2">
      <div className="col">
        <input type="number" className="form-control" placeholder="weight" />
      </div>
      <div className="col">
        <input type="number" className="form-control" placeholder="reps" />
      </div>
    </div>
  );
}
