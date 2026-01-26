require('dotenv').config();
const mongoose = require('mongoose');
const Course = require('../models/courseModel');
const courses = require('../config/courses')

const seedCourses = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    await Course.deleteMany();
    await Course.insertMany(courses);

    console.log('✅ Courses seeded successfully');
    process.exit();
  } catch (error) {
    console.error('❌ Seeding failed:', error.message);
    process.exit(1);
  }
};

seedCourses();
