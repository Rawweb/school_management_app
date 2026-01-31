const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/authMiddleware");
const {
  getQuizzes,
  startQuiz,
  submitQuiz,
  getResults
} = require("../controllers/quizController");

router.use(authMiddleware);

router.get("/", getQuizzes);
router.get("/results/me", getResults);
router.post("/:quizId/start", startQuiz);
router.post("/:quizId/submit", submitQuiz);


module.exports = router;
