module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('tasks', [
    {
      title: 'Task 1',
      description: 'Description for Task 1',
      dueDate: '2023-12-01'
    },
    {
      title: 'Task 2',
      description: 'Description for Task 2',
      dueDate: '2023-12-02'
    }
  ]),
  
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('tasks', null, {})
};
