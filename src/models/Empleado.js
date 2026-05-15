// Empleado: (id, legajo, nombre, apellido, email, fechaIngreso)

import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Empleado = sequelize.define('Empleado', {
    id: {
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
        type: DataTypes.DATE,
        allowNull: false
    },    
    idDepartamento: { // Aqui establezco la FK (Foreign Key) desde Emplaado a Departamento
        type: DataTypes.INTEGER,
        allowNull: false
    },
})

export default Empleado