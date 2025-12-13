# Entregable 6 - Nuevos Campos al Sistema de Empleados

## Fecha
12 de diciembre de 2025

## Descripcion
En este entregable se agregaron **3 nuevos campos** al sistema de gestion de empleados para ampliar la informacion almacenada de cada empleado.

## Campos Agregados

### 1. Sueldo
- **Tipo**: Numero decimal (DECIMAL(10,2))
- **Descripcion**: Sueldo del empleado
- **Formato**: Se muestra con simbolo de dolar ($) y 2 decimales
- **Campo opcional**: Puede quedar vacio
- **Validacion**: Valores numericos positivos con decimales

### 2. Correo
- **Tipo**: Texto (VARCHAR(100))
- **Descripcion**: Correo electronico del empleado
- **Formato**: email
- **Campo opcional**: Puede quedar vacio
- **Validacion**: Formato de correo electronico valido

### 3. Telefono
- **Tipo**: Texto (VARCHAR(20))
- **Descripcion**: Numero de telefono del empleado
- **Formato**: texto libre
- **Campo opcional**: Puede quedar vacio
- **Validacion**: Ninguna especifica, acepta cualquier formato de telefono

## Cambios Realizados

### Base de Datos (SQL)
**Archivo modificado**: `sql/create table.sql`

Se actualizo la estructura de la tabla `employees` agregando las siguientes columnas:
```sql
sueldo decimal(10,2),
correo varchar(100),
telefono varchar(20)
```

### Backend (Node.js/Express)
**Archivo modificado**: `server/index.js`

Se modificaron los siguientes endpoints para manejar los nuevos campos:

#### POST /employees (Crear empleado)
- Agregado soporte para recibir `sueldo`, `correo` y `telefono` en el body de la peticion
- Actualizada la consulta SQL INSERT para incluir los nuevos campos

#### PUT /employees/:id (Actualizar empleado)
- Agregado soporte para actualizar `sueldo`, `correo` y `telefono`
- Actualizada la consulta SQL UPDATE para incluir los nuevos campos

### Frontend (React)

#### Componente EmployeeForm.jsx
**Archivo modificado**: `client/src/components/EmployeeForm.jsx`

Cambios realizados:
- Agregados los nuevos campos al estado del formulario (`formData`)
- Agregados inputs HTML5 para cada campo:
  - **Sueldo**: `<input type="number">` con step="0.01" para permitir decimales
  - **Correo**: `<input type="email">` con validacion de formato email
  - **Telefono**: `<input type="tel">` para telefonos
- Actualizada la logica de conversion de datos para manejar el sueldo como `parseFloat`
- Los 3 campos son opcionales y no afectan la validacion del formulario

#### Componente EmployeeList.jsx
**Archivo modificado**: `client/src/components/EmployeeList.jsx`

Cambios realizados:
- Agregadas 3 nuevas columnas a la tabla:
  - **Sueldo**: Muestra el valor formateado como moneda (`$XXX.XX`)
  - **Correo**: Muestra el correo o un guion si esta vacio
  - **Telefono**: Muestra el telefono o un guion si esta vacio
- Manejo de valores nulos/vacios mostrando "-" cuando no hay datos

## Migracion de Base de Datos

Para aplicar estos cambios en una base de datos existente con datos, ejecutar:

```sql
ALTER TABLE employees
ADD COLUMN sueldo DECIMAL(10,2),
ADD COLUMN correo VARCHAR(100),
ADD COLUMN telefono VARCHAR(20);
```

## Caracteristicas Tecnicas

### Validaciones Frontend
- **Sueldo**: Solo acepta numeros positivos con maximo 2 decimales
- **Correo**: Validacion HTML5 de formato email
- **Telefono**: Acepta cualquier formato de texto

### Formato de Datos
- **Sueldo**: Se envia como `float` o `null` si esta vacio
- **Correo**: Se envia como string o undefined
- **Telefono**: Se envia como string o undefined

### Compatibilidad
- Los cambios son **retrocompatibles**
- No afectan los registros existentes
- No rompen la funcionalidad anterior
- Los campos antiguos siguen funcionando igual

## Funcionalidad Completa

El sistema ahora permite:
- Crear empleados con los 3 nuevos campos
- Editar empleados y actualizar los nuevos campos
- Visualizar los nuevos campos en la tabla de empleados
- Dejar los campos opcionales vacios
- Formatear el sueldo con simbolo de moneda

## Tecnologias Utilizadas
- **Base de datos**: MySQL
- **Backend**: Node.js, Express.js
- **Frontend**: React 18, Vite
- **Estilos**: CSS moderno

---

**Autor**: Luis Miguel Triana Rueda
**Corporacion Universitaria Iberoamericana**
**Materia**: Metodos de Construccion de Software
