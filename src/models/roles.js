// Roles: (idRol, descripcion)

import { DataTypes } from 'sequelize'
import { sequelize } from '../config/database.js'

const Roles = sequelize.define('Roles', {
    idRol: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default Roles