CREATE TABLE tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  dueDate DATE NOT NULL
);

-- Insert dummy data for testing
INSERT INTO tasks (title, description, dueDate) VALUES 
('Task 1', 'Description for Task 1', '2023-10-01'),
('Task 2', 'Description for Task 2', '2023-11-01');

-- Retrieve all tasks
SELECT * FROM tasks;

-- Retrieve a single task by ID
SELECT * FROM tasks WHERE id = 1;

-- Update an existing task
UPDATE tasks SET title = 'Updated Task 1', description = 'Updated Description for Task 1', dueDate = '2023-12-01' WHERE id = 1;

-- Delete a task
DELETE FROM tasks WHERE id = 2;

-- Seeder file
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('tasks', [
    { title: 'Seed Task 1', description: 'Seed Description 1', dueDate: '2023-10-01' },
    { title: 'Seed Task 2', description: 'Seed Description 2', dueDate: '2023-11-01' }
  ]),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('tasks', null, {})
};
