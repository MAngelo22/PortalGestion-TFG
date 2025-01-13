DELETE FROM usuario_actividades;
TRUNCATE TABLE usuario_actividades;

DELETE FROM solicitudes;
TRUNCATE TABLE solicitudes;

DELETE FROM asignaciones;
TRUNCATE TABLE asignaciones;

DELETE FROM usuarios;
SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE TABLE usuarios;
SET FOREIGN_KEY_CHECKS = 1;

DELETE FROM empleados;
SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE TABLE empleados;
SET FOREIGN_KEY_CHECKS = 1;

DELETE FROM proyectos;
SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE TABLE proyectos;
SET FOREIGN_KEY_CHECKS = 1;

DELETE FROM cursos;
SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE TABLE cursos;
SET FOREIGN_KEY_CHECKS = 1;

DELETE FROM roles;
SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE TABLE roles;
SET FOREIGN_KEY_CHECKS = 1;
-- Alternativamente, puedes usar TRUNCATE para resetear los contadores de auto-incremento







