import React from 'react'
import data from '../mock/burgerdata.json'

console.log("Burgers:data ", data);

const Mapping = ({ value }) => {
    return (
        <div>
            <h1>data</h1>
            <img src={value.lotteria.banner} alt="broken datas" />
            <h1>{value.lotteria.name || "No DAta"}</h1>
            <p>{value.lotteria.price || "No DAta"}</p>
            <button>+</button>
            <button>-</button>
            <div>
                <p>Total:</p>
            </div>

        </div>
    )
}

export default Mapping