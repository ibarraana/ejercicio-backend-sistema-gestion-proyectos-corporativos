// Habilidad (id, nombreHabilidad)

import { DataTypes } from 'sequelize'
import { sequelize } from '../config/database.js'

const Habilidad = sequelize.define('Habilidad', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombreHabilidad: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default Habilidad
    