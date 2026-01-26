const mongoose = require('mongoose');

const studentCourseSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student',
      required: true,
    },

    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
      required: true,
    },
  },
  { timestamps: true }
);

// ensure that a student can enroll in a course only once
studentCourseSchema.index({ studentId: 1, courseId: 1 }, { unique: true });

const StudentCourse = mongoose.model('StudentCourse', studentCourseSchema);

module.exports = StudentCourse;
