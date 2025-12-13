import { useState, useEffect } from 'react';

function EmployeeForm({ employee, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    nombre: '',
    edad: '',
    pais: '',
    cargo: '',
    anios: '',
    sueldo: '',
    correo: '',
    telefono: '',
  });

  // Cargar datos del empleado si estamos editando
  useEffect(() => {
    if (employee) {
      setFormData({
        nombre: employee.nombre,
        edad: employee.edad,
        pais: employee.pais || '',
        cargo: employee.cargo || '',
        anios: employee.anios,
        sueldo: employee.sueldo || '',
        correo: employee.correo || '',
        telefono: employee.telefono || '',
      });
    } else {
      resetForm();
    }
  }, [employee]);

  const resetForm = () => {
    setFormData({
      nombre: '',
      edad: '',
      pais: '',
      cargo: '',
      anios: '',
      sueldo: '',
      correo: '',
      telefono: '',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación básica
    if (!formData.nombre || !formData.edad || !formData.anios) {
      alert('Por favor completa los campos obligatorios: Nombre, Edad y Años');
      return;
    }

    // Convertir edad y años a números, y sueldo a float
    const employeeData = {
      ...formData,
      edad: parseInt(formData.edad),
      anios: parseInt(formData.anios),
      sueldo: formData.sueldo ? parseFloat(formData.sueldo) : null,
    };

    onSubmit(employeeData);
    resetForm();
  };

  const handleCancelClick = () => {
    resetForm();
    if (onCancel) onCancel();
  };

  return (
    <form className="employee-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="nombre">
          Nombre <span className="required">*</span>
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Ingresa el nombre"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="edad">
          Edad <span className="required">*</span>
        </label>
        <input
          type="number"
          id="edad"
          name="edad"
          value={formData.edad}
          onChange={handleChange}
          placeholder="Ingresa la edad"
          min="18"
          max="100"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="pais">País</label>
        <input
          type="text"
          id="pais"
          name="pais"
          value={formData.pais}
          onChange={handleChange}
          placeholder="Ingresa el país"
        />
      </div>

      <div className="form-group">
        <label htmlFor="cargo">Cargo</label>
        <input
          type="text"
          id="cargo"
          name="cargo"
          value={formData.cargo}
          onChange={handleChange}
          placeholder="Ingresa el cargo"
        />
      </div>

      <div className="form-group">
        <label htmlFor="anios">
          Años de experiencia <span className="required">*</span>
        </label>
        <input
          type="number"
          id="anios"
          name="anios"
          value={formData.anios}
          onChange={handleChange}
          placeholder="Años de experiencia"
          min="0"
          max="50"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="sueldo">Sueldo</label>
        <input
          type="number"
          id="sueldo"
          name="sueldo"
          value={formData.sueldo}
          onChange={handleChange}
          placeholder="Ingresa el sueldo"
          min="0"
          step="0.01"
        />
      </div>

      <div className="form-group">
        <label htmlFor="correo">Correo</label>
        <input
          type="email"
          id="correo"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
          placeholder="Ingresa el correo electrónico"
        />
      </div>

      <div className="form-group">
        <label htmlFor="telefono">Teléfono</label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          placeholder="Ingresa el teléfono"
        />
      </div>

      <div className="form-actions">
        <button type="submit" className="btn btn-primary">
          {employee ? 'Actualizar' : 'Crear'} Empleado
        </button>
        {employee && (
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleCancelClick}
          >
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
}

export default EmployeeForm;
