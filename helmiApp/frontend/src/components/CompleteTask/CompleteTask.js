import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CompleteTask.css';

function CompleteTask({ task, onTaskUpdate }) {
  const [isCompleted, setIsCompleted] = useState(task.completed);

  const handleCompleteTask = async () => {
    try {
      const response = await axios.put(`/api/tasks/${task.id}`, { completed: !isCompleted });
      if (response.data.success) {
        setIsCompleted(!isCompleted);
        onTaskUpdate(task.id, !isCompleted);
      }
    } catch (error) {
      console.error('Error updating task status:', error);
    }
  };

  useEffect(() => {
    setIsCompleted(task.completed);
  }, [task]);

  return (
    <div className={`task-item ${isCompleted ? 'completed' : ''}`} onClick={handleCompleteTask}>
      <h3 className="task-title">{task.title}</h3>
      <p className="task-description">{task.description}</p>
      <button className="complete-button">{isCompleted ? 'Undo' : 'Complete'}</button>
    </div>
  );
}

export default CompleteTask;
