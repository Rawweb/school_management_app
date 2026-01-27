const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    level: {
      type: String,
      enum: ['Basic', 'Intermediate', 'Advanced'],
      required: true,
    },

    category: {
      type: String,
      default: 'Computer Science',
    },

    levelOrder: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Quiz', quizSchema);
