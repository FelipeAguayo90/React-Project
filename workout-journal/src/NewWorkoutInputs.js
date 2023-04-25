import React from "react";
export function NewWorkoutInputs({}) {
  return (
    <div className="row g-2 my-2">
      <div className="col">
        <label className="form-label">Workout</label>
        <input type="text" className="form-control" placeholder="name" />
      </div>
      <div className="col">
        <label className="form-label">Sets</label>
        <input type="number" className="form-control" placeholder="sets" />
      </div>
    </div>
  );
}
