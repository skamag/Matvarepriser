import './vare.css'

export default function Vare({ data, valgtVare }) {
    return(
        <>
            <h1>{valgtVare}</h1>
            <div>
                {data && valgtVare !== '' ? (
                    data.data
                        .filter(item => item.name.toLowerCase().includes(valgtVare.toLowerCase()))
                        .map(filteredItem => (
                            <h1 key={filteredItem.id}>{filteredItem.name}</h1>
                        ))
                ) : (
                    valgtVare === '' ? 'Ingen vare valgt...' : 'Loading...'
                )}
            </div>
        </>
    )
}