import { v4 as uuidv4 } from 'uuid';
export class Routine {
  constructor(name) {
    this.id = uuidv4();
    this.day = name;
    this.workouts = [];
  }
  newWorkout(obj) {
    this.workouts.push(obj);
  }
}

export class Workout {
  constructor(name, sets = 1, reps = 0, weight = 0) {
    this.exerName = name;
    this.sets = sets;
    this.reps = reps;
    this.weight = weight;
  }
  addSets(num) {
    this.sets = num;
  }
  addReps(num) {
    this.reps = num;
  }
  addWeight(num) {
    this.weight = num;
  }
}

// const newWorkout = new NewRoutine('back');
// console.log(newWorkout);

// const workout = new NewWorkout('biceps', 4);
// const otherWorkout = new NewWorkout('triceps', 3);

// workout.addReps(5);

// newWorkout.newWorkout(workout);

// newWorkout.newWorkout(otherWorkout);

// console.log(newWorkout);
// {
//     id: 1,
//     day: "Back",
//     workouts: [
//       {
//         exerName: "Lat Pulldowns",
//         sets: 3,
//         reps: 12,
//         weight: 150,
//       },
//       {
//         exerName: "Rows",
//         sets: 2,
//         reps: 12,
//         weight: 150,
//       },
//       {
//         exerName: "Dead-Lift",
//         sets: 4,
//         reps: 12,
//         weight: 180,
//       },
//     ],
//   }
