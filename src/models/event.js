'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Event.hasMany(models.Attendence, { foreignKey: "event_id"});
    }
  }
  Event.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    date: DataTypes.STRING,
    type: DataTypes.STRING
  }, {
    sequelize,
    tableName:'event',
    modelName: 'Event',
  });
  return Event;
};