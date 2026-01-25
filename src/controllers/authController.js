const Student = require('../models/studentModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const loginStudent = async (req, res) => {
  const { identifier, password } = req.body;
  try {
    // find student by email or matric number
    const student = await Student.findOne({
      $or: [{ email: identifier }, { matricNumber: identifier }],
    });

    // if student not found
    if (!student) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // compare password
    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // create JWT token
    const token = jwt.sign({ id: student._id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    // send response
    res.json({
      token,
      student: {
        id: student._id,
        name: student.name,
        email: student.email,
        matricNumber: student.matricNumber,
      },
    });
  } catch (error) {
    res.status(500).json({ message: 'server error', error: error.message });
  }
};

module.exports = { loginStudent };