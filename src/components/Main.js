import { useState, useEffect } from 'react'
import './main.css'

export default function Main() {
    const [data, setData] = useState(null)
    
    const [searchText, setSearchText] = useState('')
    const [matvarekjede, setMatvarekjede] = useState('')

    const KEY = 'LmOFSdN8MdRSiZOVBqFg4uP6uKdvBKpuoHTdnkiW'

    useEffect(() => {
        const headers = { 'Authorization': 'Bearer ' + KEY }

        fetch('https://kassal.app/api/v1/products?size=100', { headers })
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error(error))
    }, [])

    const handleSearch = event => {
        let text = event.target.value
        setSearchText(text)

        console.log(searchText)
        console.log(data)

    }

    const handleSelectMatvarekjede = event => {
        let kjede = event.target.value
        setMatvarekjede(kjede)

        console.log(matvarekjede)
    }

    return(
        <main>
            <div className='searchContainer'>
                <i className='fa fa-search'></i>
                <input className='searchName' type='text' value={searchText} placeholder='Søk...' onChange={handleSearch} />
            </div>
            <select name='matvarekjede' id='matvarekjede' onChange={handleSelectMatvarekjede}>
                <option value={''}>Alle matvarekjeder</option>
                {/* <option value={''} disabled selected>Matvarekjede</option> */}
                <option value={'Meny'}>Meny</option>
                <option value={'SPAR'}>Spar</option>
                <option value={'Joker'}>Joker</option>
            </select>
            <div className='matvareContainer'>
                {/* {matvarekjede === '' ?
                    data.filter(data => data.nam)
                } */}

                {data ?
                    data.data.filter(
                        matvarekjede !== '' ? data => data.name.toLowerCase().includes(searchText.toLowerCase()) && data.store.name === matvarekjede
                        : data => ((data.name.toLowerCase()).includes(searchText.toLowerCase())
                            || (data.store.name.toLowerCase()).includes(searchText.toLowerCase())
                            || (data.store.name.toLowerCase()).includes(searchText.toLowerCase())
                        )
                    ).filter((value, index, self) =>
                        index === self.findIndex((t) => (
                          t.place === value.place && t.name === value.name
                        ))
                    ).map(filteredData => (
                        <article className='card' key={filteredData.id}>
                            <div className='imgContainer'>
                                <img src={filteredData.image} alt={filteredData.name}></img>
                            </div>
                            <div className='descriptionContainer'>
                                <span>{filteredData.name}</span>
                                {/* {data.data.filter(data.name.includes(filteredData.name)).map(newData => (
                                    <span>{newData.store.name} - <b>{newData.current_price} kr</b></span>
                                ))} */}
                                {/* <span>{filteredData.store.name} - <b>{filteredData.current_price} kr</b></span> */}
                            </div>
                        </article>
                    ))
                : 'Loading...'}
            </div>
        </main>
    )
}