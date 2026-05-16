// Empleado: (id, legajo, nombre, apellido, email, fechaIngreso)

import { DataTypes } from 'sequelize'
import { sequelize } from '../config/database.js'

import Departamento from './departamentos.js'
import Tareas from './tareas.js'

const Empleado = sequelize.define('Empleado', {
    idEmpleado: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    legajo: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fechaIngreso: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    idDepartamento: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Departamento,
            key: 'idDepartamento'
        }
    },
    idTarea: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Tareas,
            key: 'idTarea'
        }
    }
})

export default Empleado