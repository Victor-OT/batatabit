import './Table.css'

function Table () {
    return (
      <div className='table-container'>
        <h2>Corredoras</h2>
          <div className="table">
            <div className="cell-col-1">Bitrade</div>
            <div className="cell-col-2">$12.96</div>
            <div className="cell-col-1">Bitpreco</div>
            <div className="cell-col-2">$13.07</div>
            <div className="cell-col-1">Novadax</div>
            <div className="cell-col-2">$13.15</div>
            <div className="cell-col-1">Coinext</div>
            <div className="cell-col-2">$14.96</div>
        </div>
      </div>
    )
}

export {Table}