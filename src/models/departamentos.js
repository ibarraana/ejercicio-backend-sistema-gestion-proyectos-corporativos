// Departamento (id, nombre, presupuestoAnual)

import { DataTypes } from 'sequelize'
import { sequelize } from '../config/database.js'

const Departamento = sequelize.define('Departamento', {
    idDepartamento: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    presupuestoAnual: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
})

export default Departamento