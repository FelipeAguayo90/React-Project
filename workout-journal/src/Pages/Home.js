import { Tab } from '../Tab';
import { FormInputs } from './../FormInputs';
import { useState } from 'react';

import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useGlobalContext } from '../AppContext';

const Home = () => {
  const [value, setValue] = useState(0);
  const { list, setList } = useGlobalContext();
  const [inputValues, setInputValues] = useState([]);
  console.log(inputValues);
  function deleteDay(id) {
    setValue(0);
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  }

  const submitForm = (weight, rep) => {
    console.log('hi');
  };

  if (list.length > 0) {
    const { workouts, day, id } = list[value];

    return (
      <div className=" home-page">
        <div className="row">
          <div className="col-3 routines d-flex justify-content-between flex-column">
            <div className="d-flex flex-column mt-5">
              {list.map((routine, index) => {
                const { day, id } = routine;
                return (
                  <Tab key={id} day={day} index={index} setValue={setValue} />
                );
              })}
            </div>
            <div className="d-grid gap-2 d-md-block mx-auto mb-5 bottom">
              <Link
                to={{
                  pathname: 'add-routine',
                  state: 'bob',
                }}
                type="button"
                className="btn btn-primary mx-1 btn-sm ms-3"
              >
                Add Day
              </Link>
              <button
                type="button"
                className="btn btn-danger mx-1 btn-sm"
                onClick={() => {
                  deleteDay(id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
          <div className="col border-start">
            <h1 className="text-center m-3 ">Routine</h1>
            <div className="border"></div>
            <div className=" mx-auto p-2 routine-form w-50 content">
              <h3 className="text-center m-3">{day}</h3>
              <form>
                {workouts.map((workout) => {
                  const { exerName, sets } = workout;
                  let count = -1;
                  return (
                    <div key={exerName} className="row g-5">
                      <h5 className=" p-3">{exerName}</h5>
                      {Array(sets)
                        .fill(0)
                        .map((index) => {
                          console.log(index);
                          count++;

                          return (
                            <FormInputs
                              exerName={exerName}
                              count={count}
                              key={uuidv4()}
                              // handleOnChange={handleOnChange}
                              inputValues={inputValues}
                              setInputValues={setInputValues}
                            />
                          );
                        })}
                    </div>
                  );
                })}
                <div className="d-grid my-4 col-6 mx-auto ">
                  <button className="btn btn-primary " type="submit">
                    Save
                  </button>
                </div>
              </form>
            </div>
            <div className="sticky-bottom"></div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className=" home-page">
        <div className="row">
          <div className="col-3 routines d-flex flex-column justify-content-between">
            <h2 className="p-2 text-center mt-5 fw-lighter">Create Routine</h2>
            <div className="d-grid gap-2 d-md-block mx-auto mb-5">
              <Link
                state={setList}
                to="add-routine"
                type="button"
                className="btn btn-primary mx-1 btn-sm"
              >
                Add Day
              </Link>
              <button type="button" className="btn btn-danger mx-1 btn-sm">
                Delete
              </button>
            </div>
          </div>
          <div className="col border-start">
            <h1 className="text-center m-5 fw-lighter">No Routines</h1>
          </div>
        </div>
      </div>
    );
  }
};
export default Home;
