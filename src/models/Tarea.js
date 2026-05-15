// Tarea (id, descripcion, prioridad, estado)

import { DataTypes } from 'sequelize'
import { sequelize } from '../config/database.js'

const Tarea = sequelize.define('Tarea', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    prioridad: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default Tarea
  