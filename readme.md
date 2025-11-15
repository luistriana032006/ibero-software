# Sistema de Gestión de Empleados

![Employees](img/employees.png)

## Descripción

Sistema web para la gestión de empleados desarrollado con Node.js, Express y MySQL. Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre una base de datos de empleados, incluyendo información como nombre, edad, país, cargo y años de experiencia.

## Características

- **GET** `/employees` - Obtener todos los empleados
- **GET** `/employees/:id` - Obtener un empleado específico
- **POST** `/employees` - Crear un nuevo empleado
- **PUT** `/employees/:id` - Actualizar un empleado existente
- **DELETE** `/employees/:id` - Eliminar un empleado

## Tecnologías utilizadas

- Node.js
- Express.js
- MySQL
- CORS
- dotenv

## Instalación

```bash
# Instalar dependencias
npm install

# Configurar variables de entorno en .env
DB_HOST=localhost
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=iberosoftware

# Iniciar el servidor
node server/index.js
```

El servidor estará disponible en `http://localhost:3001`

## Autor

**Luis Miguel Triana Rueda**

**Corporación Universitaria Iberoamericana**

**Materia:** Métodos de Construcción de Software

---

© 2025 - Todos los derechos reservados
