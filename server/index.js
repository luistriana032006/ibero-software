const express = require('express');
const cors = require('cors');
const db = require('./db');


// app 
const app = express();


//
app.use(cors());
app.use(express.json());

// GET - Obtener todos los empleados
app.get('/employees', (req, res) => {
    const sql = "SELECT * FROM employees";

    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({
                error: 'Error al obtener los datos de los empleados'
            });
        }
        res.json(results);
    });
});

// GET - Obtener un empleado por ID
app.get('/employees/:id', (req, res) => {
    const { id } = req.params;
    const sql = "SELECT * FROM employees WHERE id = ?";

    db.query(sql, [id], (err, results) => {
        if (err) {
            return res.status(500).json({
                error: 'Error al obtener el empleado'
            });
        }
        if (results.length === 0) {
            return res.status(404).json({
                error: 'Empleado no encontrado'
            });
        }
        res.json(results[0]);
    });
});

// POST - Crear un nuevo empleado
app.post('/employees', (req, res) => {
    const { nombre, edad, pais, cargo, anios } = req.body;

    // Validación básica
    if (!nombre || !edad || !anios) {
        return res.status(400).json({
            error: 'Los campos nombre, edad y años son obligatorios'
        });
    }

    const sql = "INSERT INTO employees (nombre, edad, pais, cargo, anios) VALUES (?, ?, ?, ?, ?)";

    db.query(sql, [nombre, edad, pais, cargo, anios], (err, result) => {
        if (err) {
            return res.status(500).json({
                error: 'Error al crear el empleado'
            });
        }
        res.status(201).json({
            message: 'Empleado creado exitosamente',
            id: result.insertId
        });
    });
});

// PUT - Actualizar un empleado existente
app.put('/employees/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, edad, pais, cargo, anios } = req.body;

    // Validación básica
    if (!nombre || !edad || !anios) {
        return res.status(400).json({
            error: 'Los campos nombre, edad y años son obligatorios'
        });
    }

    const sql = "UPDATE employees SET nombre = ?, edad = ?, pais = ?, cargo = ?, anios = ? WHERE id = ?";

    db.query(sql, [nombre, edad, pais, cargo, anios, id], (err, result) => {
        if (err) {
            return res.status(500).json({
                error: 'Error al actualizar el empleado'
            });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({
                error: 'Empleado no encontrado'
            });
        }
        res.json({
            message: 'Empleado actualizado exitosamente'
        });
    });
});

// DELETE - Eliminar un empleado
app.delete('/employees/:id', (req, res) => {
    const { id } = req.params;
    const sql = "DELETE FROM employees WHERE id = ?";

    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).json({
                error: 'Error al eliminar el empleado'
            });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({
                error: 'Empleado no encontrado'
            });
        }
        res.json({
            message: 'Empleado eliminado exitosamente'
        });
    });
});

// Iniciar el servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
