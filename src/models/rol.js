// Rol: (id, descripcion)

import { DataTypes } from 'sequelize'
import { sequelize } from '../config/database.js'

const Rol = sequelize.define('Rol', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default Rol