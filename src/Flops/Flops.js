import {useState} from 'react';

import flopsData from '../flopsData';

import './Flops.css';

export const Flops = () => {
    const [flops, setFlops] = useState(flopsData);
    const [selected, setSelected] = useState(1);

    const handleClick = (event) => {
        console.log(event.target.id)
    }

    return (
        <section className="flops-grid">
            {
                flops.map(flop => {
                   return (<div key={flop.id} className="card">
                                <h1>{flop.title}</h1>
                                <p>{flop.year}</p>
                                <img src={flop.imageSrc} alt={flop.title}/>
                                <button className="btn" disabled={flop.id === selected ? false : true} onClick={(e) => {handleClick(e)}}>{flop.id === selected ? 'Unvote' : 'Vote'}</button>
                            </div>)
                })
            }
        </section>
    )
}

export default Flops