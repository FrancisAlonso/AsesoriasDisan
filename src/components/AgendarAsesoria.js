import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './AgendarAsesoria.css'; // Archivo CSS para estilos personalizados

function AgendarAsesoria() {
  const [fecha, setFecha] = useState(new Date());
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del formulario a tu backend
    console.log('Fecha:', fecha);
    console.log('Nombre:', nombre);
    console.log('Email:', email);
    console.log('Teléfono:', telefono);
  };

  return (
    <div className="agendar-asesoria-container">
      <h1>Agendar Asesoría</h1>
      <form className="agendar-asesoria-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Fecha y hora:</label>
          <br />
          <DatePicker selected={fecha} onChange={(date) => setFecha(date)} showTimeSelect dateFormat="Pp" />
        </div>
        <div className="form-group">
          <label>Nombre:</label>
          <br />
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <br />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Teléfono:</label>
          <br />
          <input type="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
        </div>
        <button type="submit">Agendar</button>
      </form>
    </div>
  );
}

export default AgendarAsesoria;
