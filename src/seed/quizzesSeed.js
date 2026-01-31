require("dotenv").config();
const mongoose = require("mongoose");
const Quiz = require("../models/quizModel");
const Question = require("../models/questionModel");
const quizData = require("../config/quizData");

const levelOrderMap = {
  Basic: 1,
  Intermediate: 2,
  Advanced: 3,
};

const seedQuizzes = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    await Quiz.deleteMany();
    await Question.deleteMany();

    for (const quizItem of quizData) {
      const quiz = await Quiz.create({
        title: quizItem.title,
        level: quizItem.level,
        category: "Computer Science",
        duration: quizItem.duration,
        levelOrder: levelOrderMap[quizItem.level],
      });

      const questions = quizItem.questions.map(q => ({
        quizId: quiz._id,
        questionText: q.questionText,
        options: q.options,
        correctAnswer: q.correctAnswer,
      }));

      await Question.insertMany(questions);
    }

    console.log("✅ Computer Science quizzes seeded successfully");
    process.exit();
  } catch (error) {
    console.error("❌ Seeding error:", error.message);
    process.exit(1);
  }
};

seedQuizzes();
