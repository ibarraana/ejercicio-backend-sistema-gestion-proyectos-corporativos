## Ejercicio 4: Sistema de Gestión de Proyectos Corporativos

### Entidades:

- *Empleado* (id, legajo, nombre, apellido, email, fechaIngreso)
- *Departamento* (id, nombre, presupuestoAnual)
- *Proyecto* (id, codigoProyecto, nombre, fechaInicio, fechaFinEstimada)
- *Tarea* (id, descripcion, prioridad, estado)
- *Habilidad* (id, nombreHabilidad)

### Relacionamiento:

1.  *Departamento y Empleado:*
    - Un departamento puede tener muchos empleados trabajando en él.
    - Un empleado pertenece a un único departamento.
2.  *Empleado y Proyecto (Relación Intermedia):*
    - Un empleado puede estar asignado a varios proyectos a la vez.
    - Un proyecto requiere de la participación de varios empleados.
    - *Nota:* Es necesario registrar el *rol* que cumple el empleado en ese proyecto específico (ej: Líder, Desarrollador, Tester) y la *cantidad de horas semanales* dedicadas.
3.  *Proyecto y Tarea:*
    - Un proyecto se compone de múltiples tareas.
    - Una tarea pertenece a un único proyecto.
4.  *Empleado y Tarea:*
    - Una tarea es realizada por un único empleado.
    - Un empleado puede tener asignadas muchas tareas dentro de sus proyectos.
5.  *Empleado y Habilidad (Relación Intermedia):*
    - Un empleado puede poseer múltiples habilidades (ej: SQL, Python, Liderazgo).
    - Una habilidad puede ser poseída por muchos empleados.
    - *Nota:* Es necesario registrar el *nivel de dominio* (Principiante, Intermedio, Avanzado).