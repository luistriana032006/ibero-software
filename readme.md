# Sistema de Gestión de Empleados

![Employees](img/employees.png)

## Descripción

Sistema web full-stack para la gestión de empleados desarrollado con **React** en el frontend y **Node.js/Express** en el backend, utilizando **MySQL** como base de datos. Permite realizar operaciones CRUD completas (Crear, Leer, Actualizar, Eliminar) sobre empleados, incluyendo información como nombre, edad, país, cargo y años de experiencia.

## Características

### Backend API REST
- **GET** `/employees` - Obtener todos los empleados
- **GET** `/employees/:id` - Obtener un empleado específico
- **POST** `/employees` - Crear un nuevo empleado
- **PUT** `/employees/:id` - Actualizar un empleado existente
- **DELETE** `/employees/:id` - Eliminar un empleado

### Frontend React
- Interfaz moderna y responsive
- Formulario interactivo para crear y editar empleados
- Tabla dinámica con listado de empleados
- Validaciones de formulario
- Confirmaciones para eliminación
- Diseño con gradientes y efectos visuales

## Tecnologías utilizadas

### Backend
- Node.js
- Express.js
- MySQL (mysql2)
- CORS
- dotenv

### Frontend
- React 18
- Vite
- CSS moderno con diseño responsive

## Estructura del proyecto

```
ibero-software/
├── server/           # Backend API
│   ├── index.js     # Servidor Express y rutas
│   ├── db.js        # Configuración de base de datos
│   └── package.json
├── client/           # Frontend React
│   ├── src/
│   │   ├── components/
│   │   │   ├── EmployeeList.jsx
│   │   │   └── EmployeeForm.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
└── sql/
    └── create table.sql
```

## Instalación y ejecución

### 1. Configurar la base de datos

```bash
# Crear la base de datos usando el archivo SQL
mysql -u root -p < sql/create\ table.sql
```

### 2. Configurar el Backend

```bash
# Navegar a la carpeta server
cd server

# Instalar dependencias
npm install

# Crear archivo .env con las credenciales de la base de datos
DB_HOST=localhost
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=iberosoftware

# Iniciar el servidor backend
node index.js
```

El servidor estará disponible en `http://localhost:3001`

### 3. Configurar el Frontend

```bash
# Navegar a la carpeta client
cd client

# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm run dev
```

El frontend estará disponible en `http://localhost:5173`

## Uso

1. Asegúrate de que el backend esté corriendo en el puerto 3001
2. Asegúrate de que el frontend esté corriendo en el puerto 5173
3. Abre tu navegador en `http://localhost:5173`
4. Usa el formulario para agregar empleados
5. Edita o elimina empleados desde la tabla

## Autor

**Luis Miguel Triana Rueda**

**Corporación Universitaria Iberoamericana**

**Materia:** Métodos de Construcción de Software

---

© 2025 - Todos los derechos reservados
