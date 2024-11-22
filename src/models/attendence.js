'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Attendence extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Attendence.belongsTo(models.Event, { foreignKey: "event_id"});
    }
  }
  Attendence.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    event_id: DataTypes.INTEGER
  }, {
    sequelize,
    tableName:'attendence',
    modelName: 'Attendence',
  });
  return Attendence;
};