// Empleado_Proyecto_Rol (idEmpleado, idProyecto, idRol)

import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Empleado_Proyecto_Rol = sequelize.define('Empleado_Proyecto_Rol', {
    idEmpleado: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    idProyecto: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    idRol: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    }})

export default Empleado_Proyecto_Rol