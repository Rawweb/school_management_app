require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Student = require('../models/studentModel')
const studentsData = require('../config/studentsData');

const seedStudents = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    await Student.deleteMany();

    const hashedStudents = await Promise.all(
      studentsData.map(async student => ({
        ...student,
        password: await bcrypt.hash(student.password, 10),
      }))
    );

    await Student.insertMany(hashedStudents);
    console.log('✅ Students seeded successfully');
    process.exit();
  } catch (err) {
    console.error('❌ Seeding failed:', err.message);
    process.exit(1);
  }
};

seedStudents();
