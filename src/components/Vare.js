import { useState } from 'react'
import './vare.css'

export default function Vare({ data, valgtVare }) {
    const [priser, setPriser] = useState([])

    return(
        <article className='valgtVareContainer'>
            <div className='flex-20gap'>
                {valgtVare && data.data.filter(item => item.name.toLowerCase().includes(valgtVare.toLowerCase())
                    ).filter((value, index, self) =>
                        index === self.findIndex((t) => (
                            t.place === value.place && t.name === value.name
                        ))
                    ).map(filteredItem => (
                        <img className='vareImage' src={filteredItem.image} alt={filteredItem.name}></img>
                    ))
                }
                <p>{valgtVare}</p>
            </div>
            <div className={'priserContainer'}>
                {data && valgtVare !== '' ? (
                    data.data
                        .filter(item => item.name.toLowerCase().includes(valgtVare.toLowerCase()))
                        .map(filteredItem => (
                            <>
                                {console.log(priser)}
                                {setPriser(...priser, filteredItem.current_price)}
                                {/* <h1 key={filteredItem.id}>{filteredItem.name}</h1> */}
                                <div className={'storeContainer'}>
                                    <span>{filteredItem.current_price} kr</span>
                                    <div className='storeLogoContainer'>
                                        <img className={'storeLogo'} src={filteredItem.store.logo} alt={filteredItem.store.name} />
                                    </div>
                                </div>
                            </>
                        ))
                ) : (
                    valgtVare === '' ? 'Ingen vare valgt...' : 'Loading...'
                )}
            </div>
        </article>
    )
}