const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/authMiddleware');
const {
  getAllCourses,
  getRegisteredCourses,
  registerCourse,
  dropCourse,
} = require('../controllers/courseController');

router.use(authMiddleware);

router.get('/', getAllCourses);
router.get('/registered', getRegisteredCourses);
router.post('/register', registerCourse);
router.delete('/drop/:courseId', dropCourse);

module.exports = router;
