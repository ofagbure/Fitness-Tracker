const router = require("express").Router();
const path = require("path");
const db = require("../models");

router.get("/index", function(req, res) {
  console.log("dir = "+path.join(__dirname, "../public/index.html"))
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/stats", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

router.get("/exercise", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});


router.get("/api/workouts/range", (req, res) => {
  db.Workouts.find({}).then((data) => {
          res.json(data)
      }).catch(err => {
          res.json(err)
      });
});

router.get("/api/workouts", (req, res) => {
  db.Workouts.find().then(data => {
          res.json(data)
      }).catch(err => {
          res.json(err)
      })
});

router.post("/api/workouts", (req, res) => {
  db.Workouts.create({}).then(data => {
          res.json(data)
      }).catch(err => {
          console.log("err", err)
          res.json(err)
      })
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  db.Workouts.findByIdAndUpdate(
      params.id, { $push: { exercises: body } }).then(data => {
          res.json(data)
      }).catch(err => {
          console.log("err", err)
          res.json(err)
      })
});

module.exports = router;

