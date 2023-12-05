const express = require("express");

const router = express.Router();

//GET all workouts
router.get("/", (req, res) => {
  req.json({ mssg: "GET all workouts" });
});

//GET a single workout
router.get("/:id", (req, res) => {
  req.json({ mssg: "GET a single workouts" });
});

//POST a new workout
router.post("/", (req, res) => {
  req.json({ mssg: "POST a new workouts" });
});

//DELETE a workout
router.delete("/:id", (req, res) => {
  req.json({ mssg: "DELETE a workout" });
});

//UPDATE a workout
router.patch("/:id", (req, res) => {
  req.json({ mssg: "UPDATE a workout" });
});

module.exports = router;
