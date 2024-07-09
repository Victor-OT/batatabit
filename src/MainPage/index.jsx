import { Table } from '../Table'
import { BenefitsCard } from '../BenefitsCard'
import './MainPage.css'

function MainPage () {

    const benefitsCardInfo = [
        {
            icon: '../../assets/icons/clock.svg',
            h2: 'Tiempo real',
            p: 'Nuestra API toma información minuto a minuto sobre las tasas que más determinan el comportamiento.'
        },
        {
            icon: '../../assets/icons/eye.svg',
            h2: 'No hay tasas escondidas',
            p: 'Ni en la compra o al momento de exit, Batabit siempre te muestra el costo real de lo que estás adquiriendo.'
        },
        {
            icon: '../../assets/icons/dollar-sign.svg',
            h2: 'Compara monedas',
            p: 'Ni en la compra o al momento de exit, Batabit siempre te muestra el costo real de lo que estás adquiriendo.'
        },
        {
            icon: '../../assets/icons/check-circle.svg',
            h2: 'Información confiable',
            p: 'Nuestras fuentes están 100% verificadas y continuamos auditando su contenido mientras se actualizan.'
        }
    ]

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
            <section className='benefits'>
                <div className='benefits-text-container'>
                    <h2>Creamos un producto sin comparación.</h2>
                    <p>Confiable y diseñado para su uso diario.</p>
                </div>
                <div  className='benefits-card-container'>
                    {
                        benefitsCardInfo.map(card => (
                            <BenefitsCard 
                            key={benefitsCardInfo.indexOf(card)}
                            icon={card.icon}
                            h2={card.h2}
                            p={card.p}/>
                        ))
                    }
                </div>
            </section>
            <section>
                <div className='plan-info-container'>
                    <div className='text-plan-info-container'>
                        <h2></h2>
                        <p></p>
                    </div>
                    <div className='plan-card-container'>

                    </div>
                </div>
            </section>
        </div>
    )

}

export {MainPage}