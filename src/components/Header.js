// Header.js
import React from 'react';

const Header = ({ onMostrarVentana }) => {
    const abrirWhatsApp = () => {
        window.open('https://wa.me/<tu-número-de-WhatsApp>', '_blank');
    };

    return (
        <header>
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
