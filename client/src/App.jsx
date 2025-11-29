import { useState, useEffect } from 'react';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import './App.css';

const API_URL = 'http://localhost:3001/employees';

function App() {
  const [employees, setEmployees] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [loading, setLoading] = useState(false);

  // Cargar empleados al iniciar
  useEffect(() => {
    fetchEmployees();
  }, []);

  // Obtener todos los empleados
  const fetchEmployees = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setEmployees(data);
    } catch (error) {
      console.error('Error al cargar empleados:', error);
      alert('Error al cargar los empleados');
    } finally {
      setLoading(false);
    }
  };

  // Crear o actualizar empleado
  const handleSubmit = async (employeeData) => {
    try {
      if (editingEmployee) {
        // Actualizar empleado existente
        const response = await fetch(`${API_URL}/${editingEmployee.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(employeeData),
        });

        if (response.ok) {
          alert('Empleado actualizado exitosamente');
          setEditingEmployee(null);
        }
      } else {
        // Crear nuevo empleado
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(employeeData),
        });

        if (response.ok) {
          alert('Empleado creado exitosamente');
        }
      }
      fetchEmployees();
    } catch (error) {
      console.error('Error al guardar empleado:', error);
      alert('Error al guardar el empleado');
    }
  };

  // Eliminar empleado
  const handleDelete = async (id) => {
    if (!confirm('¿Estás seguro de eliminar este empleado?')) return;

    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert('Empleado eliminado exitosamente');
        fetchEmployees();
      }
    } catch (error) {
      console.error('Error al eliminar empleado:', error);
      alert('Error al eliminar el empleado');
    }
  };

  // Editar empleado
  const handleEdit = (employee) => {
    setEditingEmployee(employee);
  };

  // Cancelar edición
  const handleCancelEdit = () => {
    setEditingEmployee(null);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Sistema de Gestión de Empleados</h1>
        <p>Corporación Universitaria Iberoamericana</p>
      </header>

      <main className="app-main">
        <div className="form-section">
          <h2>{editingEmployee ? 'Editar Empleado' : 'Agregar Nuevo Empleado'}</h2>
          <EmployeeForm
            employee={editingEmployee}
            onSubmit={handleSubmit}
            onCancel={handleCancelEdit}
          />
        </div>

        <div className="list-section">
          <h2>Lista de Empleados</h2>
          {loading ? (
            <p>Cargando...</p>
          ) : (
            <EmployeeList
              employees={employees}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          )}
        </div>
      </main>

      <footer className="app-footer">
        <p>Desarrollado por Luis Miguel Triana Rueda</p>
        <p>Métodos de Construcción de Software - 2025</p>
      </footer>
    </div>
  );
}

export default App;
