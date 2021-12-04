import {useState, useEffect} from 'react';

import flopsData from '../flopsData';

import './Flops.css';

export const Flops = () => {
    const [flops, setFlops] = useState(flopsData);
    const [selectedID, setSelectedID] = useState('');

    useEffect(() => {}, [flops]);

    const handleClick = (id) => {
        const flopID = parseInt(id);
        const updatedFlops = flops.map(flop => {
           flop.isSelected = flopID === flop.id ? !flop.isSelected : false;
           return flop;
        })

        setFlops(updatedFlops)
        if (selectedID === id) {
            setSelectedID('')
        } else {
            setSelectedID(id)
        }
    }

    return (
        <section className="flops-grid">
            {
                flops.map(flop => {
                   return (<div key={flop.id} className="card">
                                <h1>{flop.title}</h1>
                                <p>{flop.year}</p>
                                <img src={flop.imageSrc} alt={flop.title} data-id={flop.id}/>
                                <button className="btn" disabled={flop.id !== selectedID && selectedID !== ''} onClick={() => {handleClick(flop.id)}}>{flop.isSelected ? 'Unvote' : 'Vote'}</button>
                            </div>)
                })
            }
        </section>
    )
}

export default Flops