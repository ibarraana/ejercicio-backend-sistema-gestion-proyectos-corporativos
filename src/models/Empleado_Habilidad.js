// Empleado_Habilidad (idEmpleado, idHabilidad)

import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Empleado_Habilidad = sequelize.define('Empleado_Habilidad', {    
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

export default Empleado_Habilidad


