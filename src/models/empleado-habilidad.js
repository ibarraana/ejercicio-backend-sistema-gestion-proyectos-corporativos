// Empleado_Habilidad (idEmpleado, idHabilidad)

import { DataTypes } from 'sequelize'
import { sequelize } from '../config/database.js'

const EmpleadoHabilidad  = sequelize.define('EmpleadoHabilidad', {    
    idEmpleado: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    idHabilidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    }
})

export default EmpleadoHabilidad


