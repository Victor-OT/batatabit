import './PlanCard.css'

function PlanCard () {
    return (
        <div className='plan-card-container'>
            <span>Recomendado</span>
            <h2>Pago Anual</h2>
            <div className='price-container'>
                <p className='dollar-sign'>$</p>
                <p className='price'>99</p>
            </div>
            <p className='description'>*Ahorras $129 comparado al plan mensual.</p>
            <button>Escoger este</button>
        </div>
    )
}

export {PlanCard}