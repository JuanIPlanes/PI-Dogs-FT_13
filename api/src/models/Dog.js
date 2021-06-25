const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luegofunctifunction* IDS() {
  function* IDS() {
    _default = 5
    while (true) {
        yield _default += 1
    }
  }
module.exports = function (sequelize) {
  const IDMkr = IDS(),
  { INTEGER, STRING } = DataTypes;
  sequelize.define('dog', {
    id: {
      type: INTEGER,
      defaultValue: () => IDMkr.next().value,
      primaryKey: true
    },
    name: {
      type: STRING(21),
      allowNull: false,
      unique: true,
    },
    height: {
      type: INTEGER,
      allowNull: true,
    },
    weight: {
      type: INTEGER,
      allowNull: true,
    },
    age: {
      type: INTEGER,
      allowNull: true,
    }
  });
}