import Proyecto from './proyectos.js'
import Departamento from './departamentos.js'
import Empleado from './empleados.js'
import Tarea from './tareas.js'
import Habilidades from './habilidades.js'
import NivelDominio from './nivelDominio.js'
import Roles from './roles.js'
import EmpleadoProyectoRoles from './empleadoProyectoRoles.js'
import EmpleadoHabilidadesNivelDominio from './empleadoHabilidadesNivelDominio.js'

// Aqui hago las relaciones, me costo mucho saber esto no me salia profe, y ahora si

Roles.hasMany(EmpleadoProyectoRoles, { foreignKey: 'idRol' })
EmpleadoProyectoRoles.belongsTo(Roles, { foreignKey: 'idRol' })

Proyecto.hasMany(EmpleadoProyectoRoles, { foreignKey: 'idProyecto' })
EmpleadoProyectoRoles.belongsTo(Proyecto, { foreignKey: 'idProyecto' })

Empleado.hasMany(EmpleadoProyectoRoles, { foreignKey: 'idEmpleado' })
EmpleadoProyectoRoles.belongsTo(Empleado, { foreignKey: 'idEmpleado' })

Empleado.hasMany(EmpleadoHabilidadesNivelDominio, { foreignKey: 'idEmpleado' })
EmpleadoHabilidadesNivelDominio.belongsTo(Empleado, { foreignKey: 'idEmpleado' })

Habilidades.hasMany(EmpleadoHabilidadesNivelDominio, { foreignKey: 'idHabilidad' })
EmpleadoHabilidadesNivelDominio.belongsTo(Habilidades, { foreignKey: 'idHabilidad' })

NivelDominio.hasMany(EmpleadoHabilidadesNivelDominio, { foreignKey: 'idNivelDominio' })
EmpleadoHabilidadesNivelDominio.belongsTo(NivelDominio, { foreignKey: 'idNivelDominio' })

// Tareas tiene relacion mediante FK con Proyecto que tiene su PK
// Tareas tiene un solo proyecto y los proyectos estan en varias tareas (1 a N)
Tarea.belongsTo(Proyecto, { foreignKey: 'idProyecto' })
Proyecto.hasMany(Tarea, { foreignKey: 'idProyecto' })

Empleado.belongsTo(Departamento, { foreignKey: 'idDepartamento' })
Departamento.hasMany(Empleado, { foreignKey: 'idDepartamento' })



export {
    Proyecto,
    Departamento,
    Empleado,
    Tarea,
    Habilidades,
    NivelDominio,
    Roles,
    EmpleadoProyectoRoles,
    EmpleadoHabilidadesNivelDominio
}