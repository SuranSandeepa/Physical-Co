// import necessary modules
require("dotenv").config();

const express = require("express");
const workoutRoutes = require("./routes/workouts");

// initialize express app
const app = express();

// apply middleware
app.use(express.json);

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// define routes
app.use("/api/workouts", workoutRoutes);

// listen for incoming requests
app.listen(process.env.PORT, () => {
  console.log("listening on port", process.env.PORT);
});
