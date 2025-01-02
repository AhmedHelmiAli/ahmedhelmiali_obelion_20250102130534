const { Model, DataTypes, Sequelize } = require('sequelize');

const sequelize = new Sequelize('helmi', 'root', 'root', {
  host: 'db',
  port: 3306,
  dialect: 'mysql',
});

class Task extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        title: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: true,
          },
        },
        description: {
          type: DataTypes.TEXT,
          allowNull: false,
          validate: {
            notEmpty: true,
          },
        },
        dueDate: {
          type: DataTypes.DATE,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: 'Task',
        timestamps: false,
        tableName: 'tasks',
      }
    );
  }
}

module.exports = Task;