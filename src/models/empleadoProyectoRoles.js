// Empleado Proyecto Roles (idEmpleado, idProyecto, idRol, cantidadHorasSemanales)

import { DataTypes } from 'sequelize'
import { sequelize } from '../config/database.js'

import Roles from './roles.js'
import Proyecto from './proyectos.js'
import Empleado from './empleados.js'

const EmpleadoProyectoRoles = sequelize.define('EmpleadoProyectoRoles', {    
    idEmpleado: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: Empleado, // Hace referencia al modelo Empleado
            key: 'idEmpleado'  // Clave primaria de Empleado
        }
    },
    idProyecto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: Proyecto, // Hace referencia al modelo Proyecto
            key: 'idProyecto'  // Clave primaria de Proyecto
        }
    },
    idRol: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        // Esto segun invetigue, lo tengo que agregar tambien
        references: {
            model: Roles, // Hace referencia al modelo Roles
            key: 'idRol'  // Clave primaria de Roles
        }
    },
    cantidadHorasSemanales: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

export default EmpleadoProyectoRoles