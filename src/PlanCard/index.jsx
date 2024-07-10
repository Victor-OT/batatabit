import './PlanCard.css'

function PlanCard (props) {
    return (
        <div className='plan-card'>
            <span className={props.recomended ? 'recomended' : 'hidden' }>Recomendado</span>
            <h2>{props.title}</h2>
            <div className='price-container'>
                <p className='dollar-sign'>$</p>
                <p className='price'>{props.price}</p>
            </div>
            <p className='description'>{props.description}</p>
            <button>Escoger este</button>
        </div>
    )
}

export {PlanCard}