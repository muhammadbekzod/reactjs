import React, { useState } from 'react'

const InputIndex = () => {
    const [search, setSearch] = useState("Search your bursger")

    let onChange = (e) => {
        setSearch(e.target.value)
    }
    let onClick = () => {}
    
    return (
        <div>
            <input placeholder='search your burger' onChange={onChange} />
            <h1>{search}</h1>
        </div>
    )
}

export default InputIndex