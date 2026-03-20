require('dotenv').config();
const mongoose = require('mongoose');
const Course = require('../models/courseModel');
const coursesData = require('../config/coursesData')

const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);

const seedCourses = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    await Course.deleteMany();
    await Course.insertMany(coursesData);

    console.log('✅ Courses seeded successfully');
    process.exit();
  } catch (error) {
    console.error('❌ Seeding failed:', error.message);
    process.exit(1);
  }
};

seedCourses();
