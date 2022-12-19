const workoutService = require("../services/workoutService");
const { response } = require("express");

const getAllWorkouts = (req, res = response) => {
  const allWorkouts = workoutService.getAllWorkouts();
  res.send({ msg: "ok", data: allWorkouts });
};

const getOneWorkout = (req, res) => {
  const {params: {workoutId}} = req;
  if (!workoutId) return;
  const workout = workoutService.getOneWorkout(workoutId);
  res.send({
    msg: "Get by ID",
    data: workout,
  });
};

const createNewWorkout = (req, res) => {
  const { name, mode, equipment, exercises, trainerTips } = req.body;
  const newWorkout = {
    name,
    mode,
    equipment,
    exercises,
    trainerTips,
  };
  console.log('new workout', newWorkout);
  const createdWorkout = workoutService.createNewWorkout(newWorkout);
  res.status(201).json({
    msg: "Create new Workout",
    data: createdWorkout,
  });
};

const updateOneWorkout = (req, res) => {
  const {body, params: {workoutId},} = req;
  if(!workoutId)return; 

  const updatedWorkout = workoutService.updateOneWorkout(workoutId, body);
  res.json({
    msg: "Update WorkOut",
    data: updatedWorkout,
  });
};

const deleteOneWorkout = (req, res) => {
  const {
    params:{workoutId},

  }= req;
  if(!workoutId) return;

  workoutService.deleteOneWorkout(workoutId);
  
  res.status(204).json({
    msg: "Delete WorkOut",
  });
};
module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
