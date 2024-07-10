import { useRef } from 'react'
import { Table } from '../Table'
import { BenefitsCard } from '../BenefitsCard'
import { PlanCard } from '../PlanCard'
import './MainPage.css'

function MainPage () {

    const sectionRef = useRef(null)
    const handleScroll = () => {
        sectionRef.current.scrollIntoView({behavior: 'smooth'})
    }

    const benefitsCardInfo = [
        {
            icon: '/icons/clock.svg',
            h2: 'Tiempo real',
            p: 'Nuestra API toma información minuto a minuto sobre las tasas que más determinan el comportamiento.'
        },
        {
            icon: '/icons/eye.svg',
            h2: 'No hay tasas escondidas',
            p: 'Ni en la compra o al momento de exit, Batabit siempre te muestra el costo real de lo que estás adquiriendo.'
        },
        {
            icon: '/icons/dollar-sign.svg',
            h2: 'Compara monedas',
            p: 'Ni en la compra o al momento de exit, Batabit siempre te muestra el costo real de lo que estás adquiriendo.'
        },
        {
            icon: '/icons/check-circle.svg',
            h2: 'Información confiable',
            p: 'Nuestras fuentes están 100% verificadas y continuamos auditando su contenido mientras se actualizan.'
        }
    ]

    const plansInfo = [
        {
            title: 'Pago Mensual',
            price: 109,
            description: '*Ahorras $129 comparado al pago semanal.',
            recomended: false
        },
        {
            title: 'Pago Anual',
            price: 99,
            description: '*Ahorras $129 comparado al plan mensual.',
            recomended: true
        },
        {
            title: 'semanal',
            price: 30,
            description: '*Precio más elevado de todos.',
            recomended: false
        }
    ]

    return (
        <div>
            <header>
                <img src='/img/logo.svg' alt='logo' />
                <div className='header-text-container'>
                    <h1>La próxima revolución en el intercambio de criptomonedas.</h1>         
                    <p>Batatabit te ayuda a navegar entre los diferentes precios y tendencias.</p> 
                </div>  
                <button
                onClick={() => handleScroll()}>Conoce Nuestros Planes <span><img src="../../assets/icons/down-arrow.svg" alt="" /></span></button>      
            </header>
            <section className='features-container'>
                <img src="/img/Bitcoin.svg" alt="bitcoin" />
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
            <section className='plan-info' ref={sectionRef}>
                <div className='plan-info-container'>
                    <div className='text-plan-info-container'>
                        <h2>Escoge el plan que mejor se ajuste a ti.</h2>
                        <p>Cualquier plan te da acceso completo a nuestra plataforma.</p>
                    </div>
                    <div className='outer-card-container'>
                        <div className='plan-card-container'>
                            {
                                plansInfo.map(card => (
                                    <PlanCard 
                                    key={plansInfo.indexOf(card)}
                                    title={card.title}
                                    price={card.price}
                                    description={card.description}
                                    recomended={card.recomended}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <section className='social-media'>
                    <ul>
                        <li>Linkedin</li>
                        <li>Crunchbase</li>
                        <li>Hackernews</li>
                    </ul>
                </section>
                <section className='logo-footer'>
                    <img src="/img/logo-footer.svg" alt="logo-footer" />
                </section>
            </footer>
        </div>
    )

}

export {MainPage}