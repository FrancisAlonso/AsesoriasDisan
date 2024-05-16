import React from 'react';
import servicio1 from './img/servicio1.jpg';
import servicio2 from './img/servicio2.jpg';
import servicio3 from './img/servicio3.jpg';
import servicio4 from './img/servicio4.jpg';
import './ServiciosCard.css';

const ServiciosCard = () => {
    return (
        <div className="servicios-container max-w-md mx-auto bg-white shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex md:flex-wrap">
                <div className="p-4 w-full md:w-1/2">
                    <img src={servicio1} alt="Elaboración de Estados Financieros" className="servicio-img w-full h-32 object-cover" />
                    <h2 className="text-lg font-semibold text-gray-800">Elaboración de Estados Financieros</h2>
                    <p className="text-gray-600 mt-2">Proporcionamos servicios de elaboración de estados financieros precisos y detallados para reflejar la situación económica y financiera de su empresa.</p>
                    <div className="flex justify-center mt-4">
                        <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">Ingresar</button>
                    </div>
                </div>
                <div className="p-4 w-full md:w-1/2">
                    <img src={servicio2} alt="Cumplimiento Tributario" className="servicio-img w-full h-32 object-cover" />
                    <h2 className="text-lg font-semibold text-gray-800">Cumplimiento Tributario</h2>
                    <p className="text-gray-600 mt-2">Ofrecemos asesoramiento y servicios para garantizar el cumplimiento de todas las obligaciones tributarias, evitando sanciones y optimizando la carga fiscal.</p>
                    <div className="flex justify-center mt-4">
                        <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">Ingresar</button>
                    </div>
                </div>
                <div className="p-4 w-full md:w-1/2">
                    <img src={servicio3} alt="Contabilidad Financiera" className="servicio-img w-full h-32 object-cover" />
                    <h2 className="text-lg font-semibold text-gray-800">Contabilidad Financiera</h2>
                    <p className="text-gray-600 mt-2">Brindamos servicios de contabilidad financiera para la gestión eficiente y transparente de los recursos económicos de su empresa.</p>
                    <div className="flex justify-center mt-4">
                        <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">Ingresar</button>
                    </div>
                </div>
                <div className="p-4 w-full md:w-1/2">
                    <img src={servicio4} alt="Contabilidad de Gestión" className="servicio-img w-full h-32 object-cover" />
                    <h2 className="text-lg font-semibold text-gray-800">Contabilidad de Gestión</h2>
                    <p className="text-gray-600 mt-2">Ayudamos a las empresas a tomar decisiones estratégicas a través de la contabilidad de gestión, proporcionando información financiera relevante y oportuna.</p>
                    <div className="flex justify-center mt-4">
                        <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">Ingresar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiciosCard;
