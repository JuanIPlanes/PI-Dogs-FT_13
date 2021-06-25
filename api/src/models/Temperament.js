const DataTypes = require('sequelize').DataTypes;
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
function* IDS() {
    _default = 5
    while (true) {
        yield _default += 1
    }
}
module.exports = (sequelize) => {
    const IDMkr = IDS();
    const { INTEGER, STRING } = DataTypes;
    // defino el modelo
    sequelize.define('temperament', self = {
        id: {
            type: INTEGER,
            defaultValue: () => IDMkr.next().value,
            primaryKey: true
        },
        name: {
            type: STRING(25),
            allowNull: false,
            unique: true,
        }
    })
}