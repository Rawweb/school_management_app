const mongoose = require("mongoose");

const quizResultSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true
    },
    quizId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Quiz",
      required: true
    },
    score: {
      type: Number,
      required: true
    },
    totalQuestions: {
      type: Number,
      required: true
    },
    status: {
      type: String,
      enum: ["Pass", "Fail"],
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("QuizResult", quizResultSchema);