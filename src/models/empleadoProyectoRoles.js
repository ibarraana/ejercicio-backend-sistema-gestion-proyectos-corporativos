// Empleado Proyecto Roles (idEmpleado, idProyecto, idRol, cantidadHorasSemanales)

import { DataTypes } from 'sequelize'
import { sequelize } from '../config/database.js'

const EmpleadoProyectoRoles = sequelize.define('EmpleadoProyectoRoles', {
    idEmpleado: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    idProyecto: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    idRol: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    cantidadHorasSemanales: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

export default EmpleadoProyectoRoles