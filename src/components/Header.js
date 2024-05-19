import React from 'react';
import './Header.css'; // Asegúrate de importar el archivo CSS para estilos

const Header = ({ onMostrarVentana }) => {
    const abrirWhatsApp = () => {
        window.open('https://wa.me/<tu-número-de-WhatsApp>', '_blank');
    };

    return (
        <header className="header">
            <img src="./img/logo.jpg" alt="Logo" className="logo" />
            <h1>Asesorías de Contaduría y Auditoría</h1>
            <nav>
                <button onClick={() => onMostrarVentana('inicio')}>Inicio</button>
                <button onClick={() => onMostrarVentana('servicios')}>Servicios</button>
                <button onClick={() => onMostrarVentana('agendar')}>Agendar Asesoría</button>
                <button onClick={() => onMostrarVentana('contacto')}>Contacto</button>
                <button onClick={abrirWhatsApp} className="btn-contacto">Contacta a un asesor</button>
            </nav>
        </header>
    );
}

export default Header;
