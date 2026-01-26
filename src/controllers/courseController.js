const Course = require('../models/courseModel');
const StudentCourse = require('../models/studentCourseModel');

// View all available courses
const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find().sort({ code: 1 });
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      error: error.message,
    });
  }
};

// View registered courses
const getRegisteredCourses = async (req, res) => {
  try {
    // Get all course registrations for the logged-in student
    const registrations = await StudentCourse.find({
      studentId: req.student,
    }).populate('courseId');

    // Create an empty array to store only courses
    const courses = [];

    // Loop through each registration
    for (let i = 0; i < registrations.length; i++) {
      const registration = registrations[i];

      // Extract the course from the registration
      const course = registration.courseId;

      // Add the course to the courses array
      courses.push(course);
    }

    // Send the courses back to the client
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      error: error.message,
    });
  }
};

// Register course
const registerCourse = async (req, res) => {
  const { courseId } = req.body;

  // check if course id is provided
  if (!courseId) {
    return res.status(400).json({ message: 'Course ID is required' });
  }

  try {
    // Check if course exists
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    // Check if already registered
    const alreadyRegistered = await StudentCourse.findOne({
      studentId: req.student,
      courseId,
    });

    if (alreadyRegistered) {
      return res.status(400).json({ message: 'Course already registered' });
    }

    // Create registration
    const registration = await StudentCourse.create({
      studentId: req.student,
      courseId,
    });

    // Return course info
    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      error: error.message,
    });
  }
};

// Drop course
const dropCourse = async (req, res) => {
  const { courseId } = req.params;

  // Validate input
  if (!courseId) {
    return res.status(400).json({ message: 'Course ID is required' });
  }

  try {
    // Find and delete registration
    const removed = await StudentCourse.findOneAndDelete({
      studentId: req.student,
      courseId,
    });

    // If not found, student wasn't registered
    if (!removed) {
      return res.status(404).json({ message: 'Course not registered' });
    }

    // Success response
    res.status(200).json({
      message: 'Course dropped successfully',
      courseId: removed.courseId,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      error: error.message,
    });
  }
};

module.exports = {
  getAllCourses,
  getRegisteredCourses,
  registerCourse,
  dropCourse,
};
