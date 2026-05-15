import app from './src/app.js';
import { sequelize, testConnection } from './src/config/database.js';
import departamento from './src/models/departamento.js';
import empleado from './src/models/empleado.js';
import habilidad from './src/models/habilidad.js';
import empleado_habilidad from './src/models/empleado-habilidad.js';
import rol from './src/models/rol.js';
import tareas from './src/models/tareas.js';
import proyecto from './src/models/proyecto.js';
import empleado_proyecto from './src/models/empleado-proyecto.js';

const startServer = async () => {
  try {
    // Paso A: Verificar la conexión
    await testConnection();

    // Paso B: Crear tablas (si no existen)
    await sequelize.sync({ force: false });
    console.log('✅ Tablas sincronizadas');

    // Paso C: Abrir el puerto
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`🚀 App corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('💥 Error fatal:', error);
  }
};

startServer();