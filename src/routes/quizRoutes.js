const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/authMiddleware");
const {
  getQuizzes,
  getQuizQuestions,
  submitQuiz,
  getResults
} = require("../controllers/quizController");

router.use(authMiddleware);

router.get("/", getQuizzes);
router.get("/:quizId/questions", getQuizQuestions);
router.post("/:quizId/submit", submitQuiz);
router.get("/results/me", getResults);

module.exports = router;