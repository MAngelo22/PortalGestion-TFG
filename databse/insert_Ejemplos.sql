-- Población inicial de Roles
INSERT INTO roles (nombre) VALUES 
('visualizacion'), 
('creacion'), 
('edicion'), 
('eliminacion'), 
('asignacion'),
('administracion');

-- Población inicial de Empleados
INSERT INTO empleados (nombre, apellidos, email, telefono, pais, ciudad, departamento, fecha_incorporacion) VALUES
('Juan', 'Perez', 'juan.perez@example.com', '123456789', 'España', 'Madrid', 'IT', '2023-01-15'),
('Ana', 'García', 'ana.garcia@example.com', '987654321', 'México', 'Ciudad de México', 'HR', '2023-06-01'),
('Luis', 'Martinez', 'luis.martinez@example.com', '654321987', 'Argentina', 'Buenos Aires', 'Marketing', '2023-03-25'),
('Carlos', 'Sanchez', 'carlos.sanchez@example.com', '321654987', 'Chile', 'Santiago', 'Finanzas', '2023-08-30'),
('María', 'Rodriguez', 'maria.rodriguez@example.com', '789123456', 'Perú', 'Lima', 'Ventas', '2023-05-20'),
('Pedro', 'Lopez', 'pedro.lopez@example.com', '456789123', 'Colombia', 'Bogotá', 'Legal', '2023-04-10');

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
('Curso de SQL', 'sql.jpg', 'Aprende SQL desde cero', 'Principiante', 'SELECT, INSERT, UPDATE, DELETE', 'Carlos Rodríguez', 'Teórico-práctico', 'Fácil', '2023-12-01 10:00:00', TRUE),
('Curso de Python', 'python.jpg', 'Curso avanzado de Python', 'Avanzado', 'Funciones, Clases, Librerías', 'María López', 'Práctico', 'Media', '2023-11-15 15:00:00', FALSE),
('Curso de Java', 'java.jpg', 'Fundamentos de Java', 'Intermedio', 'OOP, Colecciones, Streams', 'Juan Pérez', 'Teórico', 'Media', '2023-10-10 12:00:00', TRUE),
('Curso de HTML', 'html.jpg', 'Desarrollo web con HTML', 'Principiante', 'Etiquetas, Formularios, Multimedia', 'Ana García', 'Práctico', 'Fácil', '2023-09-05 14:00:00', FALSE),
('Curso de CSS', 'css.jpg', 'Estilos con CSS', 'Intermedio', 'Selectores, Flexbox, Grid', 'Luis Martinez', 'Práctico', 'Media', '2023-08-20 11:00:00', TRUE),
('Curso de JavaScript', 'javascript.jpg', 'JavaScript Básico', 'Principiante', 'Variables, Funciones, DOM', 'Pedro Lopez', 'Teórico-práctico', 'Fácil', '2023-07-15 13:00:00', FALSE);

-- Población inicial de Proyectos
INSERT INTO proyectos (nombre, tipo_foto, foto, descripcion, nivel_experiencia, requisitos_tecnicos, dificultad, ultima_actualizacion, destacado) VALUES
('Proyecto Web', '', '', 'Desarrollo de una aplicación web', 'Intermedio', 'HTML, CSS, JavaScript', 'Media', '2023-10-20 12:00:00', TRUE),
('Proyecto Data Science', '', '', 'Análisis de datos con Python', 'Avanzado', 'Python, Pandas, Numpy', 'Alta', '2023-09-05 09:00:00', FALSE),
('Proyecto Mobile', '', '', 'Desarrollo de una app móvil', 'Intermedio', 'Kotlin, Swift', 'Media', '2023-11-11 16:00:00', TRUE),
('Proyecto DevOps', '', '', 'Implementación de CI/CD', 'Avanzado', 'Docker, Jenkins, Kubernetes', 'Alta', '2023-12-05 18:00:00', FALSE),
('Proyecto AI', '', '', 'Desarrollo de modelos de IA', 'Avanzado', 'Python, TensorFlow, Keras', 'Alta', '2023-08-01 14:00:00', TRUE),
('Proyecto Blockchain', '', '', 'Desarrollo con Blockchain', 'Intermedio', 'Solidity, Ethereum', 'Media', '2023-07-20 10:00:00', FALSE);

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