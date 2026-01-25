const express = require('express');
const auth = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/dashboard', auth, (req, res) => {
  res.json({
    message: `Welcome to your dashboard ${req.user}`,
    studentId: req.student,
  });
});

module.exports = router;
