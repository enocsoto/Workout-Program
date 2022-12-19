const db = require("./db.json");
const saveToDataBase = require("./utils");
const utils = require("./utils");

const getAllWorkouts = () => {
  return db.workouts;
};

const getOneWorkout = (workoutId) => {
  const workout = db.workouts.find((workout) => workout.id === workoutId);
  console.log(workout);
  if (!workout) {
    return;
  }
  return workout;
};

const createNewWorkouts = (newWorkout) => {
  const isAllReadyAdded =
    db.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
  if (isAllReadyAdded) {
    return;
  }
  db.workouts.push(newWorkout);
  saveToDataBase(db);
  return newWorkout;
};

const updateOneWorkout = (workoutId, changes) => {
  const indexForUpdate = db.workouts.findIndex(
    (workout) => workout.id === workoutId
  );
  if (indexForUpdate === -1) {
    return;
  }
  const updatedWorkout = {
    ...db.workouts[indexForUpdate],
    ...changes,
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  db.workouts[indexForUpdate]= updatedWorkout;
  saveToDataBase(db);
  return updatedWorkout;
};
const deleteOneWorkout = (workoutId) => {
    const indexForDeletion = db.workouts.findIndex(
      (workout) => workout.id === workoutId);
    if (indexForDeletion === -1) {
      return;
    }
    db.workouts.splice(indexForDeletion, 1);
    saveToDataBase(db);
  };

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkouts,
  deleteOneWorkout,
  updateOneWorkout
};
