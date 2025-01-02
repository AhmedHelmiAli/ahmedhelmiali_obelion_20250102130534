import React, { useState } from 'react';
import './AddTask.css';

function AddTask() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to add task
    // Reset form fields
    setTitle('');
    setDescription('');
    setDueDate('');
  };

  return (
    <div className="add-task-container">
      <header className="header">
        <img src="company-logo-url" alt="Company Logo" className="logo" />
        <nav className="nav-tabs">
          <a href="#add-task" className="nav-tab">Add Task</a>
          {/* Other tabs */}
        </nav>
      </header>
      <main className="main-content">
        <form className="task-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="taskTitle">Task Title</label>
            <input
              type="text"
              id="taskTitle"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="taskDescription">Description</label>
            <textarea
              id="taskDescription"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="dueDate">Due Date</label>
            <input
              type="date"
              id="dueDate"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="add-task-button">Add Task</button>
        </form>
      </main>
      <footer className="footer">
        <a href="#help" className="footer-link">Help</a>
        <a href="#settings" className="footer-link">Settings</a>
        <p className="footer-text">© 2023 Company Name</p>
      </footer>
    </div>
  );
}

export default AddTask;
