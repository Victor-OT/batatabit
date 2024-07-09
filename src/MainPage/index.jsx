import { Table } from '../Table'
import './MainPage.css'
function MainPage () {
    return (
        <div>
            <header>
                <img src='../../assets/img/logo.svg' alt='logo' />
                <div className='header-text-container'>
                    <h1>La próxima revolución en el intercambio de criptomonedas.</h1>         
                    <p>Batatabit te ayuda a navegar entre los diferentes precios y tendencias.</p> 
                </div>  
                <button>Conoce Nuestros Planes <span><img src="../../assets/icons/down-arrow.svg" alt="" /></span></button>      
            </header>
            <section className='features-container'>
                <img src="../../assets/img/Bitcoin.svg" alt="bitcoin" />
                <div className='text-features-container'>
                    <h2>
                        Visibilizamos todas las tasas de cambio.
                    </h2>
                    <p>
                        Traemos información en tiempo real de las casas de cambio y las monedas más importantes del mundo.
                    </p>
                </div>
                <section className='table-container'>
                    <Table />
                </section>
            </section>
        </div>
    )

}

export {MainPage}