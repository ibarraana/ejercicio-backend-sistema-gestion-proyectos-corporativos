// *Habilidad* (id, nombreHabilidad)

import { DataTypes } from 'sequelize'
import { sequelize } from '../config/database.js'

const Habilidad = sequelize.define('Habilidad', {
  idHabilidad: {
    type: DataTypes.INTEGER,    
    primaryKey: true,
    autoIncrement: true
  },
    nombreHabilidad: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

export default Habilidad