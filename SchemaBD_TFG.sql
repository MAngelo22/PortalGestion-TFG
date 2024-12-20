-- Script SQL para crear la base de datos:

CREATE DATABASE portal_gestion CHARACTER SET utf8 COLLATE utf8_general_ci;
USE portal_gestion;

-- Tabla de Roles
CREATE TABLE roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);

-- Tabla de Usuarios
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellidos VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    contrasena VARCHAR(255) NOT NULL,
    telefono VARCHAR(20),
    pais VARCHAR(50),
    ciudad VARCHAR(50),
    departamento VARCHAR(100),
    fecha_incorporacion DATE,
    foto VARCHAR(255),
    rol_id INT NOT NULL,
    FOREIGN KEY (rol_id) REFERENCES roles(id)
);

-- Tabla de Empleados
CREATE TABLE empleados (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    foto VARCHAR(255),
    descripcion VARCHAR(255),
    nivel_experiencia VARCHAR(50),
    estado ENUM('disponible', 'ocupado', 'baja') NOT NULL,
    destacado BOOLEAN DEFAULT FALSE
);

-- Tabla de Cursos
CREATE TABLE cursos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    foto VARCHAR(255),
    descripcion VARCHAR(255),
    nivel_experiencia VARCHAR(50),
    temario TEXT,
    profesor VARCHAR(100),
    metodologia TEXT,
    dificultad VARCHAR(50),
    ultima_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    destacado BOOLEAN DEFAULT FALSE
);

-- Tabla de Proyectos
CREATE TABLE proyectos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    foto VARCHAR(255),
    descripcion VARCHAR(255),
    nivel_experiencia VARCHAR(50),
    requisitos_tecnicos TEXT,
    dificultad VARCHAR(50),
    ultima_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    destacado BOOLEAN DEFAULT FALSE
);

-- Tabla de Asignaciones (Relación entre Empleados y Proyectos)
CREATE TABLE asignaciones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    empleado_id INT NOT NULL,
    proyecto_id INT NOT NULL,
    FOREIGN KEY (empleado_id) REFERENCES empleados(id),
    FOREIGN KEY (proyecto_id) REFERENCES proyectos(id)
);

-- Tabla de Solicitudes (Relación entre Usuarios y Proyectos)
CREATE TABLE solicitudes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    proyecto_id INT NOT NULL,
    fecha_solicitud TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    FOREIGN KEY (proyecto_id) REFERENCES proyectos(id)
);

-- Tabla para relacionar Usuarios con Cursos y Proyectos realizados
CREATE TABLE usuario_actividades (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    actividad_id INT NOT NULL,
    tipo_actividad ENUM('curso', 'proyecto') NOT NULL,
    estado ENUM('en_progreso', 'finalizado') NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- Población inicial de Roles
INSERT INTO roles (nombre) VALUES ('visualizacion'), ('creacion'), ('edicion'), ('eliminacion'), ('asignacion');
