const Task = require('../models/taskModel');

// GET all tasks for logged-in student
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ studentId: req.student }).sort({
      createdAt: -1,
    });

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      error: error.message,
    });
  }
};

// POST - create a new task for logged-in-student
const createTask = async (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: 'Task title is required' });
  }

  try {
    const newTask = await Task.create({
      studentId: req.student,
      title,
    });

    res.status(200).json(newTask);
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      error: error.message,
    });
  }
};

// TOGGLE - update task completion status
const toggleTask = async (req, res) => {
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      studentId: req.student,
    });

    // if task not found
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    task.completed = !task.completed;
    await task.save();

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      error: error.message,
    });
  }
};

// DELETE - delete a task
const deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      studentId: req.student,
    });

    // if task not found
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      error: error.message,
    });
  }
};

module.exports = {
  getTasks,
  createTask,
  toggleTask,
  deleteTask,
};
