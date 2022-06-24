import React, { useState } from 'react'
import { data } from '../../mock/burgerdata';
import burger from '../../mock/burgerdata.json'
import Mapping from './mapping.jsx';
import sport from '../../mock/sports.json'
import SportsTesting from './sportsTesting';


console.log("Burgers: ", burger)
console.log("sports: ", sport)

const HomeIndex = () => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1)
    }
    const decrement = () => {
        setCounter(counter - 1)
    }
    return (
        <div>
            {/* <h1>
                {counter}
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </h1 > */}
            <h1>burgers</h1>
            {/* {
                bu.map((value, index) => (
                    <Mapping value={value} key={index} />
                )
                )} */}

            {burger.data.burgers.map((value, index) => (
                <Mapping value={value} key={index} />)
            )}
            {/* {
                sport.data.trendingCollections.edges.map((value, key) => (
                    <SportsTesting value={value} key={key}
                    />)
                )
            } */}

        </div>
    )
}

export default HomeIndex