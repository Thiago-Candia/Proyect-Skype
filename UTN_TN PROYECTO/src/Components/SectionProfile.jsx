import React from 'react'
import '../Styles/styles.css'

const SectionProfile = () => {
return (
    <div className='myProfile-section'>
        <div className='myProfile-image'>
            <button className='btn-config'>
                <img src="https://i1.sndcdn.com/artworks-000042815326-h1yfa1-t500x500.jpg" alt="" /> {/* MI IMAGEN */}
            </button>
        </div>
        <div className='myProfile-box'>
            <div className='nombre-y-saldo'>
                <div className='myProfile-nombre'>
                    <button className='btn-config'>
                        <span className='text'>Thiago Candia</span> {/* MI NOMBRE */}
                    </button>
                </div>
                <div className='myProfile-saldo'>
                    <button className='btn-config'>
                        <span className='text'>$0.00</span> {/* MI SALDO */}
                    </button>
                </div>
            </div>
            <div className='myProfile-status'>
                <button className='btn-config'>
                    <span className='text'>Establecer un estado</span> {/* MI ESTADO */}
                </button>
            </div>
        </div>  
        <div className='myProfile-options'>
            <button className='text btn-config'>
                <i class="bi bi-three-dots"></i>
            </button>
        </div>
    </div>
)}

export default SectionProfile