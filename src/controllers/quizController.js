const Quiz = require('../models/quizModel');
const Question = require('../models/questionModel');
const QuizResult = require('../models/quizResultModel');
const QuizAttempt = require('../models/QuizAttemptModel');

// get all quizzes
const getQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find().sort({ levelOrder: 1 });
    res.json(quizzes);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

/**
 * START QUIZ
 * - Prevent retake
 * - Create attempt
 * - Return questions
 */
const startQuiz = async (req, res) => {
  const { quizId } = req.params;

  try {
    const quiz = await Quiz.findById(quizId);
    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }

    // Check if already taken
    const existingResult = await QuizResult.findOne({
      studentId: req.student,
      quizId,
    });

    if (existingResult) {
      return res
        .status(400)
        .json({ message: 'You have already taken this quiz' });
    }

    // Create attempt (locks quiz)
    await QuizAttempt.create({
      studentId: req.student,
      quizId,
    });

    const questions = await Question.find({ quizId }, { correctAnswer: 0 });

    res.json(questions);
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ message: 'Quiz already started' });
    }

    res.status(500).json({ message: 'Server error' });
  }
};

/**
 * SUBMIT QUIZ
 * - Enforce timer
 * - Auto grade
 * - Prevent second attempt
 */
const submitQuiz = async (req, res) => {
  const { quizId } = req.params;
  const { answers } = req.body;

  try {
    const quiz = await Quiz.findById(quizId);
    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }

    const existingResult = await QuizResult.findOne({
      studentId: req.student,
      quizId,
    });

    if (existingResult) {
      return res.status(400).json({ message: 'Quiz already submitted' });
    }

    const attempt = await QuizAttempt.findOne({
      studentId: req.student,
      quizId,
    });

    if (!attempt) {
      return res
        .status(400)
        .json({ message: 'Quiz not started or time expired' });
    }

    const questions = await Question.find({ quizId });

    const now = Date.now();
    const elapsedMinutes = (now - attempt.startedAt.getTime()) / (1000 * 60);
    const isExpired = elapsedMinutes > quiz.duration;

    let score = 0;

    questions.forEach(q => {
      const userAnswer = answers.find(a => a.questionId === q._id.toString());
      if (userAnswer && userAnswer.selectedOption === q.correctAnswer) {
        score++;
      }
    });

    const status = score >= Math.ceil(questions.length / 2) ? 'Pass' : 'Fail';

    await QuizResult.create({
      studentId: req.student,
      quizId,
      score,
      totalQuestions: questions.length,
      status,
    });

    await QuizAttempt.deleteOne({ studentId: req.student, quizId });

    res.json({
      score,
      totalQuestions: questions.length,
      status,
      expired: isExpired,
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// get quiz results for a student
const getResults = async (req, res) => {
  try {
    const results = await QuizResult.find({
      studentId: req.student,
    }).populate('quizId');

    res.json(results);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getQuizzes,
  startQuiz,
  submitQuiz,
  getResults,
};
