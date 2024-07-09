import './MainPage.css'
function MainPage () {
    return (
        <header>
            <img src='../../assets/img/logo.svg' alt='logo' />
            <div className='header-text-container'>
                <p className='header-title'>La próxima revolución en el intercambio de criptomonedas.</p>         
                <p className='header-text'>Batatabit te ayuda a navegar entre los diferentes precios y tendencias.</p> 
            </div>  
            <button>Conoce Nuestros Planes <span><img src="../../assets/icons/down-arrow.svg" alt="" /></span></button>      
        </header>
    )

}

export {MainPage}