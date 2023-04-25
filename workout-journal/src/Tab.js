import React from "react";
export function Tab({ day, index, setValue }) {
  return (
    <p className="ms-3 btn btn-lg" onClick={() => setValue(index)}>
      {day}
    </p>
  );
}
