ALTER TABLE empleados
ADD COLUMN perfil VARCHAR(255),
ADD COLUMN experiencia VARCHAR(255),
ADD COLUMN conocimientos VARCHAR(255),
ADD COLUMN proyectos VARCHAR(500),
ADD COLUMN nivel VARCHAR(50),
ADD COLUMN estrellas INT CHECK (estrellas BETWEEN 1 AND 5);

ALTER TABLE portal_gestion.proyectos
ADD COLUMN estrellas INT CHECK (estrellas BETWEEN 1 AND 5);

UPDATE portal_gestion.proyectos SET estrellas = 5
WHERE id = 1;
UPDATE portal_gestion.proyectos SET estrellas = 4
WHERE id = 2;
UPDATE portal_gestion.proyectos SET estrellas = 5
WHERE id = 3;
UPDATE portal_gestion.proyectos SET estrellas = 4
WHERE id = 4;
UPDATE portal_gestion.proyectos SET estrellas = 5
WHERE id = 5;
UPDATE portal_gestion.proyectos SET estrellas = 5
WHERE id = 6;

ALTER TABLE portal_gestion.cursos
ADD COLUMN estrellas INT CHECK (estrellas BETWEEN 1 AND 5);

UPDATE portal_gestion.cursos SET estrellas = 5
WHERE id = 1;
UPDATE portal_gestion.cursos SET estrellas = 4
WHERE id = 2;
UPDATE portal_gestion.cursos SET estrellas = 5
WHERE id = 3;
UPDATE portal_gestion.cursos SET estrellas = 4
WHERE id = 4;
UPDATE portal_gestion.cursos SET estrellas = 5
WHERE id = 5;
UPDATE portal_gestion.cursos SET estrellas = 5
WHERE id = 6;

update portal_gestion.cursos set destacado = null;
 Alter table portal_gestion.cursos 
 MODIFY COLUMN destacado BOOLEAN DEFAULT FALSE;
update portal_gestion.cursos set destacado = true where id in (1,2,3,6);
update portal_gestion.cursos set destacado = false where id in (4,5);

update portal_gestion.proyectos set destacado = null;
 Alter table portal_gestion.proyectos 
 MODIFY COLUMN destacado BOOLEAN DEFAULT FALSE;
update portal_gestion.proyectos set destacado = true where id in (1,2,3,6);
update portal_gestion.proyectos set destacado = false where id in (4,5);
--- Actualizar datos de los nuevos campos

UPDATE empleados SET
    perfil = 'Desarrollador Full Stack especializado en arquitecturas cloud',
    experiencia = '6 años desarrollando aplicaciones web escalables',
    conocimientos = 'React, Node.js, AWS, MongoDB',
    proyectos = 'Migración exitosa de infraestructura on-premise a cloud para empresa Fortune 500',
    nivel = 'Experto',
    estrellas = 5
WHERE id = 1;

UPDATE empleados SET
    perfil = 'DevOps Engineer con enfoque en automatización',
    experiencia = '5 años en implementación de CI/CD',
    conocimientos = 'Docker, Kubernetes, Jenkins, Terraform',
    proyectos = 'Reducción del tiempo de despliegue en 70% mediante automatización',
    nivel = 'Avanzado',
    estrellas = 4
WHERE id = 2;

UPDATE empleados SET
    perfil = 'Arquitecto de Software especialista en microservicios',
    experiencia = '8 años diseñando sistemas distribuidos',
    conocimientos = 'Java, Spring Boot, Kafka, Redis',
    proyectos = 'Diseño e implementación de arquitectura de microservicios para fintech',
    nivel = 'Experto',
    estrellas = 5
WHERE id = 3;

UPDATE empleados SET
    perfil = 'UX/UI Designer con enfoque en accesibilidad',
    experiencia = '4 años en diseño de interfaces',
    conocimientos = 'Figma, Adobe XD, HTML/CSS, JavaScript',
    proyectos = 'Rediseño de app bancaria aumentando usabilidad en 45%',
    nivel = 'Intermedio',
    estrellas = 4
WHERE id = 4;

UPDATE empleados SET
    perfil = 'Data Scientist especializado en ML',
    experiencia = '5 años en modelos predictivos',
    conocimientos = 'Python, TensorFlow, scikit-learn, R',
    proyectos = 'Implementación de sistema de detección de fraude con 99% precisión',
    nivel = 'Avanzado',
    estrellas = 5
WHERE id = 5;

UPDATE empleados SET
    perfil = 'Security Engineer especialista en pentesting',
    experiencia = '6 años en ciberseguridad',
    conocimientos = 'Kali Linux, Metasploit, Wireshark, Python',
    proyectos = 'Implementación de sistema Zero Trust reduciendo brechas en 90%',
    nivel = 'Experto',
    estrellas = 5
WHERE id = 6;

SELECT * FROM portal_gestion.empleados;