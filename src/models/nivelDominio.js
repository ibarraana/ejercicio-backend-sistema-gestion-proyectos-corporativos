// NivelDominio: (idNivelDominio, descripcion)

import { DataTypes } from 'sequelize'
import { sequelize } from '../config/database.js'

const NivelDominio = sequelize.define('NivelDominio', {
    idNivelDominio: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
        descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default NivelDominio