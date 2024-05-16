import React, { useState, useEffect } from 'react';
import foto from './img/card3.jpg'; // Ajusta la ruta de la imagen según la estructura de tu proyecto
import imagenTarjeta1 from './img/card4.jpg'; // Ruta de la imagen para la tarjeta 1
import './Inicio.css';

const Inicio = () => {
    const [activeCard, setActiveCard] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const handleMouseEnter = (index) => {
        setActiveCard(index);
    };

    const handleMouseLeave = () => {
        setActiveCard(null);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const cards = [
        {
            title: "Empresa de Contabilidad",
            description: "Descripción de la empresa y sus servicios."
        },
        {
            title: "Bienvenido a nuestra página de inicio",
            description: "Aquí puedes agregar un texto descriptivo sobre tu empresa o servicios."
        },
        {
            title: "Misión",
            description: "Misión de la empresa."
        }
    ];

    const backgroundImageStyle = { 
        backgroundImage: `url(${foto})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        transition: 'opacity 0.3s',
    };

    const tarjeta1Style = {
        position: 'relative',
        height: isMobile ? '200px' : '450px',
        minHeight: '200px',
        overflow: 'hidden',
        borderRadius: '10px',
        backgroundImage: `url(${imagenTarjeta1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    const textoSobreImagenStyle = {
        position: 'absolute',
        bottom: '20px',
        left: '20px',
        right: '20px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: '10px',
        borderRadius: '5px',
        color: 'white',
    };

    return (
        <div className="flex flex-col md:flex-row items-center justify-center h-screen overflow-hidden mt-0 mb-0">
            <div className="w-full md:w-1/2 flex flex-col" style={backgroundImageStyle}>
                <div className="bg-white p-4 md:p-40 m-1.5 mt-0 mb-0" style={{ ...tarjeta1Style, opacity: activeCard === null ? 1 : (activeCard === 0 ? 0.7 : 1) }} onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={handleMouseLeave}>
                    <div style={textoSobreImagenStyle}>
                        <h2 className="text-2xl md:text-4xl font-semibold">{cards[0].title}</h2>
                        <p className="mt-4">{cards[0].description}</p>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col">
                {cards.slice(1).map((card, index) => (
                    <div key={index + 1} className="bg-white p-4 md:p-8 m-2" style={{ ...backgroundImageStyle, opacity: activeCard === null ? 1 : (activeCard === index + 1 ? 0.7 : 1) }} onMouseEnter={() => handleMouseEnter(index + 1)} onMouseLeave={handleMouseLeave}>
                        <h2 className="text-2xl md:text-4xl font-semibold">{card.title}</h2>
                        <p className="text-gray-600 mt-4">{card.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Inicio;
