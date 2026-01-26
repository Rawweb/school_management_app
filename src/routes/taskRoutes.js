const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const {
  getTasks,
  createTask,
  toggleTask,
  deleteTask,
} = require('../controllers/taskController');
const router = express.Router();

// Protect all task routes
router.use(authMiddleware);

router.get('/', getTasks);
router.post('/', createTask);
router.patch('/:id', toggleTask);
router.delete('/:id', deleteTask);

module.exports = router;
