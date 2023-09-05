// import { NewWorkoutInputs } from "./../NewWorkoutInputs";
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../AppContext';
import { Routine, Workout } from '../createRoutine';

const AddRoutine = () => {
  const navigate = useNavigate();
  const { list, setList } = useGlobalContext();
  const [workoutId, setWorkoutId] = useState();
  const [workoutList, setWorkoutList] = useState();
  const [isCreating, setIsCreating] = useState(true);

  // const LOCAL_STORAGE_KEY = 'appData.journal';

  // useEffect(() => {
  //   const storedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   console.log(storedData);
  //   if (storedData) setList(storedData);
  // }, []);

  // useEffect(() => {
  //   console.log(list);
  //   if (list.length > 0) {
  //     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list));
  //     console.log(localStorage);
  //   }
  // }, [list]);

  const addRoutine = () => {
    const dayName = dayNameRef.current.value;
    if (dayName === '') return;
    const routine = new Routine(dayName);
    setWorkoutId(routine.id);

    setList((previousDays) => {
      return [...previousDays, routine];
    });
    dayNameRef.current.value = null;
    setIsCreating(false);
  };

  const addWorkout = () => {
    const sets = Number(setsRef.current.value);

    const workoutName = workoutNameRef.current.value;
    if (workoutName === '') return;
    const routine = list.find((day) => day.id === workoutId);
    const workout = new Workout(workoutName);

    workout.addSets(sets);
    setWorkoutList(workout);
    routine.newWorkout(workout);
    // list.splice(
    //   list.findIndex((item) => (item.id = workoutId)),
    //   1,
    //   routine
    // );
    // console.log(list);
    setList((previousDays) => {
      return [...previousDays];
    });
    workoutNameRef.current.value = null;
    setsRef.current.value = null;
  };

  const dayNameRef = useRef();
  const workoutNameRef = useRef();
  const setsRef = useRef();

  const save = () => {
    navigate('/');
  };

  // const handleOnSubmit = (e) => {
  //   e.preventDefault();
  //   const sets = parseInt(setsRef.current.value);
  //   const workout = workoutNameRef.current.value;
  //   const name = dayNameRef.current.value;
  //   if (name === '') return;
  //   setList((previousDays) => {
  //     return [
  //       ...previousDays,
  //       {
  //         id: name,
  //         day: name,
  //         workouts: [
  //           { exerName: workout, sets: sets, reps: 12, weight: 180 },
  //           { exerName: 'Dead-Lift', sets: 3, reps: 12, weight: 180 },
  //           { exerName: 'Dead-Lift', sets: 6, reps: 12, weight: 180 },
  //           { exerName: 'Dead-Lift', sets: 5, reps: 12, weight: 180 },
  //         ],
  //       },
  //     ];
  //   });
  //   dayNameRef.current.value = null;
  //   navigate('/');
  // };
  if (isCreating) {
    return (
      <div className="d-grid my-4 col-6 mx-auto">
        <h1 className="text-center">Create New Routine</h1>
        <input
          type="text"
          className="form-control m-3"
          placeholder="Routine"
          ref={dayNameRef}
        />
        <button
          className="btn btn-primary w-25 mx-auto "
          type="button"
          onClick={addRoutine}
        >
          Add Day
        </button>
      </div>
    );
  }
  const routine = list.find((day) => day.id === workoutId);
  const { workouts } = routine;
  if (!isCreating) {
    return (
      <div className="d-grid my-4 p-4 col-6 mx-auto">
        {/* {workouts.length > 0 ? (
          <> */}
        <h3>{routine.day}</h3>
        {workouts.map((workout) => (
          <p>{workout.exerName}</p>
        ))}
        {/* </>
        ) : (
          <h1 className="text-center">{routine.day}</h1>
        )} */}

        <input
          type="text"
          className="form-control"
          placeholder="Workout "
          ref={workoutNameRef}
        />
        <div className="row g-2">
          <div className="col p-2 ">
            <input
              type="number"
              className="form-control"
              placeholder="weight"
            />
          </div>
          <div className="col p-2">
            <input
              type="number"
              className="form-control"
              placeholder="sets"
              ref={setsRef}
            />
          </div>
        </div>
        <div className="p-3 d-flex justify-content-center ">
          <button
            className="btn btn-primary w-25 m-1"
            type="button"
            onClick={addWorkout}
          >
            Add Workout
          </button>
          <button
            className="btn btn-primary w-25 m-1"
            type="button"
            onClick={save}
          >
            Save
          </button>
        </div>
      </div>
    );
  }
  // return (
  //   <form className="w-75 mx-auto" onSubmit={handleOnSubmit}>
  //     <div className="my-3">
  //       <label className="form-label">Day Name</label>
  //       <input type="text" className="form-control" ref={dayNameRef} />
  //       {/* <NewWorkoutInputs /> */}
  //       <div className="row g-2 my-2">
  //         <div className="col">
  //           <label className="form-label">Workout</label>
  //           <input
  //             type="text"
  //             className="form-control"
  //             placeholder="name"
  //             ref={workoutNameRef}
  //           />
  //         </div>
  //         <div className="col">
  //           <label className="form-label">Sets</label>
  //           <input
  //             type="number"
  //             className="form-control"
  //             placeholder="sets"
  //             ref={setsRef}
  //           />
  //         </div>
  //       </div>
  //     </div>
  //     <div className="d-grid my-4 col-6 mx-auto">
  //       <button className="btn btn-primary" type="submit">
  //         Save
  //       </button>
  //     </div>
  //   </form>
  // );
};

export default AddRoutine;
