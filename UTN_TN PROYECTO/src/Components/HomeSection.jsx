import React from 'react'

const HomeSection = () => {
    return (
    <div className="welcome-section">
        <div className="welcome-section-box">
            <div className='welcome-box'>
                <div className='welcome-box-img'>
                    <img src="https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg" alt="" />
                </div>
                <div>
                    <span className="text">¡Bienvenido!</span>
                </div>
                <div>
                    <span className="text">MI NOMBRE</span>
                </div>
                <div>
                    <button>
                        <span className="text">Compartir perfil</span>
                    </button>
                </div>
            </div>
            <div className='welcome-box'>
                <div>
                    <p className="text">Estas son algunas de las acciones rápidas para comenzar a trabajar</p>
                </div>
            </div>
        </div>
    <div>
        <div className="welcome-card">
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <h3 className="text">Reuniones sencillas con cualquier persona</h3>
            </div>
            <div>
                <p className="text">Comparte la invitación con cualquier persona, incluso si no están en Skype. No se requiere ninguna descarga ni registrarse.</p>
            </div>
            <div>
                <button>
                    <i></i>
                    <span className="text">Reunirte ahora</span>
                    <i></i>
                </button>
            </div>
        </div>
    </div>
</div>
    )
}

export default HomeSection