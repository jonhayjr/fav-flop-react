import {useState} from 'react';

import flopsData from '../flopsData';

import './Flops.css';

//Import Component
import Flop from '../Flop/Flop';

const Flops = () => {
    const [flops, setFlops] = useState(JSON.parse(localStorage.getItem('flops')) ? JSON.parse(localStorage.getItem('flops')) : flopsData);
    const [selectedID, setSelectedID] = useState(localStorage.getItem('selectedID', '') ? localStorage.getItem('selectedID', '') : '');

    const handleClick = (id) => {
        //Create new array and toggle isSelected flag on selected flop
        const updatedFlops = flops.map(flop => {
           flop.isSelected = id === flop.id ? !flop.isSelected : false;
           return flop;
        })

        //Update state for flops
        setFlops(updatedFlops);

        //Add flops to local storage
        localStorage.setItem('flops', JSON.stringify(updatedFlops));

        //Checks if current id was previously.  If so, selectedID is set to blank.  Then value is added to local storage
        if (selectedID === id) {
            setSelectedID('');
            localStorage.setItem('selectedID', '');
        } else {
            setSelectedID(id);
            localStorage.setItem('selectedID', id);
        }

        
    }

    return (
        <section className="flops-grid">
            {
                flops.map(flop => {
                   return  <Flop key={flop.id} flop={flop} handleClick={handleClick}  selectedID={selectedID}/>
                })
            }
        </section>
    )
}

export default Flops