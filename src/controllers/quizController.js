const Quiz = require('../models/quizModel');
const Question = require('../models/questionModel');
const QuizResult = require('../models/quizResultModel');

// Get all quizzes
const getQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find().sort({ levelOrder: 1 });
    res.json(quizzes);
  } catch (error) {
   res.status(500).json({
      message: 'Server Error',
      error: error.message,
    });
  }
};

// Get quiz questions (without correct answers)
const getQuizQuestions = async (req, res) => {
  try {
    const questions = await Question.find(
      { quizId: req.params.quizId },
      { correctAnswer: 0 } // hide answer
    );

    res.json(questions);
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      error: error.message,
    });
  }
};

// Submit quiz
const submitQuiz = async (req, res) => {
  const { answers } = req.body;
  // answers = [{ questionId, selectedOption }]

  try {
    const questions = await Question.find({
      quizId: req.params.quizId,
    });

    let score = 0;

    questions.forEach(question => {
      const userAnswer = answers.find(
        answer => answer.questionId === question._id.toString()
      );

      if (userAnswer && userAnswer.selectedOption === question.correctAnswer) {
        score++;
      }
    });

    const status = score >= questions.length / 2 ? 'Pass' : 'Fail';

    const result = await QuizResult.create({
      studentId: req.student,
      quizId: req.params.quizId,
      score,
      totalQuestions: questions.length,
      status,
    });

    res.json({
      score,
      totalQuestions: questions.length,
      status,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      error: error.message,
    });
  }
};

// Get quiz results for student
const getResults = async (req, res) => {
  try {
    const results = await QuizResult.find({
      studentId: req.student,
    }).populate('quizId');

    res.json(results);
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      error: error.message,
    });
  }
};

module.exports = {
  getQuizzes,
  getQuizQuestions,
  submitQuiz,
  getResults,
};
