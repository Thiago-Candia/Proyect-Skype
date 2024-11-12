import React from 'react'
import '../Styles/styles.css'

const NavbarUser = () => {
return (
    <div className='navbar-user-box'>
        <div className='info-user'>
            <div className='box-img-usuario'>
            <img src="https://i.pinimg.com/564x/fd/91/b1/fd91b1715061efc79dbb6678aea0f9b9.jpg" alt="" />
            </div>
            <div className='infoUser-name'>
                <div className='nameAndIcon'>
                    <button>
                        <span className='name-user'>nombre usuario</span>
                        <i class="bi bi-gear"></i>
                    </button>
                </div>
                    <button>
                        <span className='estado-navbar'>Estado</span>
                    </button>
            </div>
        </div>
        <div className='btn-action'>
            <button>
                <i class="bi bi-search"></i>
            </button>
            <button>
                <i class="bi bi-image"></i>
            </button>
            <button>
                <i class="bi bi-person-add"></i>
            </button>
            <button>
                <i class="bi bi-camera-video"></i>
            </button>
            <button>
                <i class="bi bi-telephone"></i>
            </button>
        </div>
    </div>
)
}

export default NavbarUser