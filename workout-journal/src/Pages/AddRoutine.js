// import { NewWorkoutInputs } from "./../NewWorkoutInputs";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../AppContext";

const AddRoutine = () => {
  const navigate = useNavigate();
  const { setList } = useGlobalContext();

  const dayNameRef = useRef();
  const workoutNameRef = useRef();
  const setsRef = useRef();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const sets = parseInt(setsRef.current.value);
    const workout = workoutNameRef.current.value;
    const name = dayNameRef.current.value;
    if (name === "") return;
    setList((previousDays) => {
      return [
        ...previousDays,
        {
          id: name,
          day: name,
          workouts: [
            { exerName: workout, sets: sets, reps: 12, weight: 180 },
            { exerName: "Dead-Lift", sets: 3, reps: 12, weight: 180 },
            { exerName: "Dead-Lift", sets: 6, reps: 12, weight: 180 },
            { exerName: "Dead-Lift", sets: 5, reps: 12, weight: 180 },
          ],
        },
      ];
    });
    dayNameRef.current.value = null;
    navigate("/");
  };

  return (
    <form className="w-75 mx-auto" onSubmit={handleOnSubmit}>
      <div className="my-3">
        <label className="form-label">Day Name</label>
        <input type="text" className="form-control" ref={dayNameRef} />
        {/* <NewWorkoutInputs /> */}
        <div className="row g-2 my-2">
          <div className="col">
            <label className="form-label">Workout</label>
            <input
              type="text"
              className="form-control"
              placeholder="name"
              ref={workoutNameRef}
            />
          </div>
          <div className="col">
            <label className="form-label">Sets</label>
            <input
              type="number"
              className="form-control"
              placeholder="sets"
              ref={setsRef}
            />
          </div>
        </div>
      </div>
      <div className="d-grid my-4 col-6 mx-auto">
        <button className="btn btn-primary" type="submit">
          Save
        </button>
      </div>
    </form>
  );
};

export default AddRoutine;
