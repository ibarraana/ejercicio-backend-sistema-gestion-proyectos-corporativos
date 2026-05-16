// empleadoHabilidadesNivelDominio (idEmpleado, idHabilidad, idNivelDominio)

import { DataTypes } from 'sequelize'
import { sequelize } from '../config/database.js'

import Empleado from './empleados.js'
import idHabilidad from './habilidades.js'
import NivelDominio from './nivelDominio.js'

const EmpleadoHabilidadesNivelDominio = sequelize.define('EmpleadoHabilidadesNivelDominio', {
    idEmpleado: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: Empleado,
            key: 'idEmpleado'
        }
    },
    idHabilidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: idHabilidad,
            key: 'idHabilidad'
        }
    },
    idNivelDominio: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: NivelDominio,
            key: 'idNivelDominio'
        }
    }
})

export default EmpleadoHabilidadesNivelDominio