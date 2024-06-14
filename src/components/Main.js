import { useState } from 'react'
import { Link } from 'react-router-dom'
import './main.css'
// import './gptStyling.css'

export default function Main({ data, valgtVare, setValgtVare }) {    
    const [searchText, setSearchText] = useState('')
    const [matvarekjede, setMatvarekjede] = useState('')
    const [sorting, setSorting] = useState('')

    const handleSearch = event => {
        let text = event.target.value
        setSearchText(text)
    }

    const handleSelectMatvarekjede = event => {
        let kjede = event.target.value
        setMatvarekjede(kjede)
    }

    const handleSort = event => {
        let valgtSort = event.target.value

        setSorting(valgtSort)
    }

    const handleClick = (data) => {
        setValgtVare(data.name)
    }

    return(
        <main className='gridContainer'>
            <div className='searchContainer'>
                <div className='searchBarContainer'>
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
                <select name='sortering' id='sortering' onChange={handleSort}>
                    <option value={''}>Sorter</option>
                    {/* <option value={''} disabled selected>Matvarekjede</option> */}
                    <option value={'lavestePris'}>Laveste pris</option>
                    <option value={'hoyestePris'}>Høyeste pris</option>
                    <option value={'merkevare'}>Merkevare</option>
                    <option value={'matvarekjede'}>Matvarekjede</option>
                </select>
            </div>
            <div className='matvareContainer'>
                {/* {matvarekjede === '' ?
                    data.filter(data => data.nam)
                } */}

                {data /* && searchText !== '' */ ?
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
                    )
                    .sort(items => (
                        sorting === 'lavestePris' ? console.log('laveste pris') 
                        : sorting === 'hoyestePris' ? console.log('høyeste pris')
                        : sorting === 'merkevare' ? console.log('matvare')
                        : sorting === 'matvarekjede' ? console.log('matvarekjede')
                        : console.log('no sorting')
                    ))
                    .map(filteredData => (
                        <Link to='/vare' className='card' key={filteredData.id}>
                            <article className='article' onClick={() => handleClick(filteredData)}>
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
                        </Link>
                    ))
                : 'Loading...'}
            </div>
        </main>
    )
}