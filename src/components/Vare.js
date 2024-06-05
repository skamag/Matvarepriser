import './vare.css'

export default function Vare({ data, valgtVare }) {
    const filteredItems = data && valgtVare !== '' ? 
        data.data.filter(item => item.name.toLowerCase().includes(valgtVare.toLowerCase())) : [];

    const sortedItems = filteredItems.sort((a, b) => a.current_price - b.current_price);
    const lowestPrice = sortedItems.length > 0 ? sortedItems[0].current_price : null;

    return (
        <article className='valgtVareContainer'>
            <div className='valgtVareHeader'>
                {valgtVare && data.data.filter(item => item.name.toLowerCase().includes(valgtVare.toLowerCase())
                    ).filter((value, index, self) =>
                        index === self.findIndex((t) => (
                            t.place === value.place && t.name === value.name
                        ))
                    ).map(filteredItem => (
                        <img key={filteredItem.id} className='vareImage' src={filteredItem.image} alt={filteredItem.name}></img>
                    ))
                }
                <p>{valgtVare}</p>
            </div>
            <div className={'priserContainer'}>
                {data && valgtVare !== '' ? (
                    sortedItems.map(filteredItem => (
                        <div key={filteredItem.id} className={'storeContainer'}>
                            {console.log(filteredItem.current_price)}
                            {/* {setPriser(...priser, filteredItem.current_price)} */}
                            {/* <h1 key={filteredItem.id}>{filteredItem.name}</h1> */}
                            <span className={filteredItem.current_price === lowestPrice ? 'bold' : ''}>
                                {filteredItem.current_price} kr
                            </span>
                            <div className='storeLogoContainer'>
                                <img className={'storeLogo'} src={filteredItem.store.logo} alt={filteredItem.store.name} />
                            </div>
                        </div>
                    ))
                ) : (
                    valgtVare === '' ? 'Ingen vare valgt...' : 'Loading...'
                )}
            </div>
        </article>
    )
}
