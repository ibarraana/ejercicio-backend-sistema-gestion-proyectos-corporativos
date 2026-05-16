import app from './src/app.js'
import { sequelize, testConnection } from './src/config/database.js'

import Proyecto from './src/models/proyectos.js'
import Departamento from './src/models/departamentos.js'
import Empleado from './src/models/empleados.js'
import Tarea from './src/models/tareas.js'
import Habilidades from './src/models/habilidades.js'
import NivelDominio from './src/models/nivelDominio.js'
import Roles from './src/models/roles.js'
import EmpleadoProyectoRoles from './src/models/empleadoProyectoRoles.js'
import EmpleadoHabilidadesNivelDominio from './src/models/empleadoHabilidadesNivelDominio.js'

const startServer = async () => {
  try {
    // Paso A: Verificar la conexión
    await testConnection()

    // Paso B: Crear tablas (si no existen)
    await sequelize.sync({ force: false })
    console.log('✅ Tablas sincronizadas')

    // Paso C: Abrir el puerto
    const PORT = process.env.PORT || 3000
    app.listen(PORT, () => {
      console.log(`🚀 App corriendo en http://localhost:${PORT}`)
    });
  } catch (error) {
    console.error('💥 Error fatal:', error)
  }
};

startServer()