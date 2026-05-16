// Tarea: (id, descripcion, prioridad, estado)

import { DataTypes } from 'sequelize'
import { sequelize } from '../config/database.js'

import Proyecto from './proyectos.js'

const Tareas = sequelize.define('Tareas', {
    idTarea: {
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
        allowNull: false,
        references: {
            model: Proyecto,
            key: 'idProyecto'
        }
    }
})

export default Tareas