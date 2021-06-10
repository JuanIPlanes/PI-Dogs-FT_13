const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id: {
      type: INTEGER,
      defaultValue: () => {
        return IDMkr.next().value
      },
      primaryKey: true
    },
    name: {
      type: STRING,
      allowNull: false,
      unique: true,
      // validate: {
      //   notNull: {
      //     msg: "El campo no puede ser nulo"
      //   },
      //   isAlpha: {
      //     args: true,
      //     msg: "El nombre solo puede contener letras"
      //   },
      //   len: {
      //     args: [2, 25],
      //     msg: "El nombre tiene que ser entre 3 y 25 caracteres"
      //   }
      // },
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
};
