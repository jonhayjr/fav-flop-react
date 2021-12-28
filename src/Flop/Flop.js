import './Flop.css'

const Flop = ({flop, handleClick, selectedID}) => {
    return (
        <div className="card">
            <h1>{flop.title}</h1>
            <p>{flop.year}</p>
            <img src={flop.imageSrc} alt={flop.title} data-id={flop.id}/>
            <p className="chosen" hidden={!flop.isSelected}>Chosen!</p>
            <button className="btn" disabled={parseInt(flop.id) !== selectedID && selectedID !== ''} onClick={() => {handleClick(parseInt(flop.id))}}>{flop.isSelected ? 'Unvote' : 'Vote'}</button>
      </div>
    )
}

export default Flop