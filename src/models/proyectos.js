// Proyecto: (id, codigoProyecto, nombre, fechaInicio, fechaFinEstimada)

import { DataTypes } from 'sequelize'
import { sequelize } from '../config/database.js'

const Proyecto = sequelize.define('Proyecto', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    codigoProyecto: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fechaInicio: {
        type: DataTypes.DATE,
        allowNull: false
    },
    fechaFinEstimada: {
        type: DataTypes.DATE,
        allowNull: false
    }
})

export default Proyecto