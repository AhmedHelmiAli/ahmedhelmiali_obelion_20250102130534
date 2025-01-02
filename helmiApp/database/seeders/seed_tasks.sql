module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('tasks', [
    {
      title: 'Sample Task 1',
      description: 'This is a sample task description 1.',
      dueDate: '2023-11-01'
    },
    {
      title: 'Sample Task 2',
      description: 'This is a sample task description 2.',
      dueDate: '2023-12-01'
    }
  ]),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('tasks', null, {})
};
