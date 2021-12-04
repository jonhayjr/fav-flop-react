import flopsData from '../flopsData';

export const Flops = () => {
    return (
        <section className="flops-grid">
            {
                flopsData.map(flop => {
                   return (<div key={flop.id}>
                                <h1>{flop.title}</h1>
                                <p>{flop.year}</p>
                                <img src={flop.imageSrc} alt={flop.title}/>
                            </div>)
                })
            }
        </section>
    )
}

export default Flops