import React, { useState } from "react";
import "../Styles/styles.css";

const SectionProfile = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    // Función para alternar la visibilidad del menú
    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <div className="myProfile-section">
            <div className="myProfile-image">
                <button className="btn-config" onClick={toggleMenu}>
                    <img
                        src="https://i1.sndcdn.com/artworks-000042815326-h1yfa1-t500x500.jpg"
                        alt="Mi imagen"
                    />
                </button>
            </div>
            <div className="myProfile-box">
                <div className="nombre-y-saldo">
                    <div className="myProfile-nombre">
                        <button className="btn-config" onClick={toggleMenu}>
                            <span className="text">Thiago Candia</span>
                        </button>
                    </div>
                    <div className="myProfile-saldo">
                        <button className="btn-config">
                            <span className="text">$0.00</span>
                        </button>
                    </div>
                </div>
                <div className="myProfile-status">
                    <button className="btn-config">
                        <span className="text">Establecer un estado</span>
                    </button>
                </div>
            </div>
            <div className="myProfile-options">
                <button className="text btn-config">
                    <i className="bi bi-three-dots"></i>
                </button>
            </div>

            {/* Dropdown Menu */}
            {menuVisible && (
                <nav className="profile-dropdown">
                    <ul>
                        <li>
                            <button onClick={() => alert("Cambiar foto")}>Cambiar foto</button>
                        </li>
                        <li>
                            <button onClick={() => alert("Cambiar estado")}>Cambiar estado</button>
                        </li>
                        <li>
                            <button onClick={() => alert("Cerrar sesión")}>Cerrar sesión</button>
                        </li>
                        <li>
                            
                        </li>
                    </ul>
                </nav>
            )}
        </div>
    );
};

export default SectionProfile;
