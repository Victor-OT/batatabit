import './BenefitsCard.css'

function BenefitsCard (props) {
    return (
        <div className='card-container'>
            <div className='element-card-container'>
                <img src={props.icon} alt="clock" />
                <h2>{props.h2}</h2>
                <p>{props.p}</p>
            </div>
        </div>
    )
}

export {BenefitsCard}