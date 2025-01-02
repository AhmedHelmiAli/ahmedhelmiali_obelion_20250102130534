const Task = require('../models/TaskModel');

// Update the completion status of a task
exports.updateTaskCompletion = async (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;

  try {
    const task = await Task.findByPk(id);
    
    if (!task) {
      return res.status(404).json({ success: false, message: 'Task not found' });
    }

    task.completed = completed;
    await task.save();

    res.json({ success: true, task });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error updating task status', error: error.message });
  }
};

// Get all tasks
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json({ success: true, tasks });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching tasks', error: error.message });
  }
};

// Get a single task by ID
exports.getTaskById = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findByPk(id);

    if (!task) {
      return res.status(404).json({ success: false, message: 'Task not found' });
    }

    res.json({ success: true, task });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching task', error: error.message });
  }
};

// Create a new task
exports.createTask = async (req, res) => {
  const { title, description } = req.body;

  try {
    const task = await Task.create({ title, description, completed: false });
    res.status(201).json({ success: true, task });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error creating task', error: error.message });
  }
};

// Delete a task by ID
exports.deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findByPk(id);

    if (!task) {
      return res.status(404).json({ success: false, message: 'Task not found' });
    }

    await task.destroy();
    res.json({ success: true, message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error deleting task', error: error.message });
  }
};
