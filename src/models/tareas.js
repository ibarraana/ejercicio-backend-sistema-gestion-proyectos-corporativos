// Tarea: (id, descripcion, prioridad, estado)

import { DataTypes } from 'sequelize'
import { sequelize } from '../config/database.js'

const Tareas = sequelize.define('Tareas', {
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
    },
    idProyecto: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

export default Tareas