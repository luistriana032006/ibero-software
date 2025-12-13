function EmployeeList({ employees, onEdit, onDelete }) {
  if (employees.length === 0) {
    return <p className="empty-message">No hay empleados registrados</p>;
  }

  return (
    <div className="employee-list">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Edad</th>
            <th>País</th>
            <th>Cargo</th>
            <th>Años</th>
            <th>Sueldo</th>
            <th>Correo</th>
            <th>Teléfono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.nombre}</td>
              <td>{employee.edad}</td>
              <td>{employee.pais || '-'}</td>
              <td>{employee.cargo || '-'}</td>
              <td>{employee.anios}</td>
              <td>{employee.sueldo ? `$${parseFloat(employee.sueldo).toFixed(2)}` : '-'}</td>
              <td>{employee.correo || '-'}</td>
              <td>{employee.telefono || '-'}</td>
              <td>
                <button
                  className="btn btn-edit"
                  onClick={() => onEdit(employee)}
                >
                  Editar
                </button>
                <button
                  className="btn btn-delete"
                  onClick={() => onDelete(employee.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
