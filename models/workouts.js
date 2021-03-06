const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workouts = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "MUST:Select existing exercise"
        },
        name: {
            type: String,
            trim: true,
            required: "MUST: Input exercise name"
        },
        duration: {
            type: Number,
            required: "MUST: Input exercise time"
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        }
    }]
});


const Workouts = mongoose.model("Workout",workouts);

module.exports = Workouts;