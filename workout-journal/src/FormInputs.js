import { useRef } from 'react';
export function FormInputs({ count, inputValues, setInputValues }) {
  const handleOnChange = (count, e) => {
    const weight = weightRef.current.value;
    const newValues = [...inputValues];
    newValues[count] = weight;
    setInputValues(newValues);
  };

  const weightRef = useRef();

  return (
    <div className="row g-2">
      <div className="col">
        <input
          type="number"
          className="form-control"
          placeholder="weight"
          ref={weightRef}
          onChange={(e) => {
            handleOnChange(count, e);
          }}
        />
      </div>
      <div className="col">
        <input type="number" className="form-control" placeholder="reps" />
      </div>
    </div>
  );
}
