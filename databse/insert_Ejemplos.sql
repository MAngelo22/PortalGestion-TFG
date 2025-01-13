-- Población inicial de Roles
INSERT INTO roles (id, nombre) VALUES (1, 'visualizacion');
INSERT INTO roles (id, nombre) VALUES (2, 'creacion');
INSERT INTO roles (id, nombre) VALUES (3, 'edicion');
INSERT INTO roles (id, nombre) VALUES (4, 'eliminacion');
INSERT INTO roles (id, nombre) VALUES (5, 'asignacion');
INSERT INTO roles (id, nombre) VALUES (6, 'administracion');

-- Población inicial de Empleados
INSERT INTO empleados (nombre, apellidos, email, telefono, pais, ciudad, departamento, fecha_incorporacion, foto) 
VALUES ('Juan', 'Perez', 'juan.perez@example.com', '123456789', 'España', 'Madrid', 'IT', '2023-01-15', NULL);

INSERT INTO empleados (nombre, apellidos, email, telefono, pais, ciudad, departamento, fecha_incorporacion, foto) 
VALUES ('Ana', 'Gomez', 'ana.gomez@example.com', '987654321', 'España', 'Barcelona', 'Marketing', '2022-03-10', NULL);

INSERT INTO empleados (nombre, apellidos, email, telefono, pais, ciudad, departamento, fecha_incorporacion, foto) 
VALUES ('Luis', 'Martinez', 'luis.martinez@example.com', '456123789', 'España', 'Valencia', 'Ventas', '2021-07-22', NULL);

INSERT INTO empleados (nombre, apellidos, email, telefono, pais, ciudad, departamento, fecha_incorporacion, foto) 
VALUES ('Carlos', 'Sanchez', 'carlos.sanchez@example.com', '321654987', 'España', 'Sevilla', 'Finanzas', '2020-11-05', NULL);

INSERT INTO empleados (nombre, apellidos, email, telefono, pais, ciudad, departamento, fecha_incorporacion, foto) 
VALUES ('Maria', 'Rodriguez', 'maria.rodriguez@example.com', '789456123', 'España', 'Bilbao', 'Recursos Humanos', '2019-09-30', NULL);

INSERT INTO empleados (nombre, apellidos, email, telefono, pais, ciudad, departamento, fecha_incorporacion, foto) 
VALUES ('Pedro', 'Lopez', 'pedro.lopez@example.com', '654789321', 'España', 'Zaragoza', 'Logística', '2018-05-18', NULL);

-- Población inicial de Usuarios
INSERT INTO usuarios (empleado_id, username, contrasena, rol_id) VALUES
(1, 'juanp', 'password123', 1),
(2, 'anag', 'securepassword', 2),
(3, 'luism', 'mypassword', 3),
(4, 'carloss', 'safepass', 4),
(5, 'mariar', 'strongpassword', 5),
(6, 'pedrol', 'password456', 6);

-- Población inicial de Cursos
INSERT INTO cursos (nombre, foto, descripcion, nivel_experiencia, temario, profesor, metodologia, dificultad, ultima_actualizacion, destacado) VALUES
('Curso de SQL', null, 'Aprende SQL desde cero', 'Principiante', 'SELECT, INSERT, UPDATE, DELETE', 'Carlos Rodríguez', 'Teórico-práctico', 'Fácil', '2023-12-01 10:00:00', TRUE),
('Curso de Python', null, 'Curso avanzado de Python', 'Avanzado', 'Funciones, Clases, Librerías', 'María López', 'Práctico', 'Media', '2023-11-15 15:00:00', FALSE),
('Curso de Java', null, 'Fundamentos de Java', 'Intermedio', 'OOP, Colecciones, Streams', 'Juan Pérez', 'Teórico', 'Media', '2023-10-10 12:00:00', TRUE),
('Curso de HTML', null, 'Desarrollo web con HTML', 'Principiante', 'Etiquetas, Formularios, Multimedia', 'Ana García', 'Práctico', 'Fácil', '2023-09-05 14:00:00', FALSE),
('Curso de CSS', null, 'Estilos con CSS', 'Intermedio', 'Selectores, Flexbox, Grid', 'Luis Martinez', 'Práctico', 'Media', '2023-08-20 11:00:00', TRUE),
('Curso de JavaScript', null, 'JavaScript Básico', 'Principiante', 'Variables, Funciones, DOM', 'Pedro Lopez', 'Teórico-práctico', 'Fácil', '2023-07-15 13:00:00', FALSE);

-- Población inicial de Proyectos
INSERT INTO proyectos (nombre, foto, descripcion, nivel_experiencia, requisitos_tecnicos, dificultad, ultima_actualizacion, destacado) VALUES
('Proyecto Web', null, 'Desarrollo de una aplicación web', 'Intermedio', 'HTML, CSS, JavaScript', 'Media', '2023-10-20 12:00:00', TRUE),
('Proyecto Data Science', null, 'Análisis de datos con Python', 'Avanzado', 'Python, Pandas, Numpy', 'Alta', '2023-09-05 09:00:00', FALSE),
('Proyecto Mobile', null, 'Desarrollo de una app móvil', 'Intermedio', 'Kotlin, Swift', 'Media', '2023-11-11 16:00:00', TRUE),
('Proyecto DevOps', null, 'Implementación de CI/CD', 'Avanzado', 'Docker, Jenkins, Kubernetes', 'Alta', '2023-12-05 18:00:00', FALSE),
('Proyecto AI', null, 'Desarrollo de modelos de IA', 'Avanzado', 'Python, TensorFlow, Keras', 'Alta', '2023-08-01 14:00:00', TRUE),
('Proyecto Blockchain', null, 'Desarrollo con Blockchain', 'Intermedio', 'Solidity, Ethereum', 'Media', '2023-07-20 10:00:00', FALSE);

-- Población inicial de Asignaciones
INSERT INTO asignaciones (empleado_id, proyecto_id) VALUES
(1, 1),
(2, 2),
(3, 1),
(4, 3),
(5, 4),
(6, 5);

-- Población inicial de Solicitudes
INSERT INTO solicitudes (usuario_id, proyecto_id, fecha_solicitud) VALUES
(1, 1, '2023-12-10 08:00:00'),
(2, 2, '2023-11-25 14:00:00'),
(3, 1, '2023-10-15 10:00:00'),
(4, 3, '2023-09-12 11:00:00'),
(5, 4, '2023-08-08 09:00:00'),
(6, 5, '2023-07-20 15:00:00');

-- Población inicial de Usuario Actividades
INSERT INTO usuario_actividades (usuario_id, actividad_id, tipo_actividad, estado) VALUES
(1, 1, 'curso', 'finalizado'),
(2, 2, 'curso', 'en_progreso'),
(3, 1, 'proyecto', 'finalizado'),
(4, 3, 'curso', 'finalizado'),
(5, 4, 'proyecto', 'en_progreso'),
(6, 5, 'proyecto', 'en_progreso');


-- Inserta relaciones entre usuarios y roles
INSERT INTO usuarios_roles (usuario_id, rol_id) VALUES (1, 1);
INSERT INTO usuarios_roles (usuario_id, rol_id) VALUES (2, 2);
INSERT INTO usuarios_roles (usuario_id, rol_id) VALUES (3, 3);
INSERT INTO usuarios_roles (usuario_id, rol_id) VALUES (4, 4);
INSERT INTO usuarios_roles (usuario_id, rol_id) VALUES (5, 5);
INSERT INTO usuarios_roles (usuario_id, rol_id) VALUES (6, 6);