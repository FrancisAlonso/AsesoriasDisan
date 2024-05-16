// App.js
import React, { useState } from 'react';
import Header from './components/Header';
import Inicio from './components/Inicio';
import ServiciosCard from './components/ServiciosCard';
import AgendarAsesoria from './components/AgendarAsesoria';
import Contacto from './components/Contacto';
import './App.css';

const App = () => {
    const [ventanaActual, setVentanaActual] = useState('inicio');

    const mostrarVentana = (ventana) => {
        setVentanaActual(ventana);
    }

    return (
        <div>
            <Header onMostrarVentana={mostrarVentana} />
            <main>
                {ventanaActual === 'inicio' && <Inicio />}
                {ventanaActual === 'servicios' && <ServiciosCard />}
                {ventanaActual === 'agendar' && <AgendarAsesoria />}
                {ventanaActual === 'contacto' && <Contacto />}
            </main>
            <footer>
                <p>Derechos reservados © 2024 Asesorías de Contaduría y Auditoría</p>
            </footer>
        </div>
    );
}

export default App;
