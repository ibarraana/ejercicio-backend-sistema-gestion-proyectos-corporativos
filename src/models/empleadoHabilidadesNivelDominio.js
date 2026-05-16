// empleadoHabilidadesNivelDominio (idEmpleado, idHabilidad, idNivelDominio)

import { DataTypes } from 'sequelize'
import { sequelize } from '../config/database.js'

const EmpleadoHabilidadesNivelDominio = sequelize.define('EmpleadoHabilidadesNivelDominio', {
    idEmpleado: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    idHabilidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    idNivelDominio: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    }
})

export default EmpleadoHabilidadesNivelDominio