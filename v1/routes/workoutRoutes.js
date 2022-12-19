const { Router } = require("express");
const {
  createNewWorkout,
  deleteOneWorkout,
  getAllWorkouts,
  getOneWorkout,
  updateOneWorkout,
} = require("../../controller/workoutController");
const validate = require("../../validations/validate");

const router = Router();

router
  .get("/", getAllWorkouts)
  .get("/:workoutId", getOneWorkout)
  .post("/", validate, createNewWorkout)
  .put("/:workoutId", updateOneWorkout)
  .delete("/:workoutId", deleteOneWorkout);

module.exports = router;
