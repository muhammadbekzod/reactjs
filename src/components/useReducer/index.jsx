import React, { useReducer } from 'react'
import NavTesting from './navTesting'

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1,
                showText: false
            }
        case 'DECREMENT':
            if (state.count === 0) return state
            return {
                count: state.count - 1,
                showText: false
            }
        case 'TOGGLE':
            return {
                count: state.count, showText: !state.showText
            }
        default: return state
    }
}

const IndexReducer = () => {
    const [state, ditpatch] = useReducer(reducer, { count: 0, showText: false })
    return (
        <div>
            <h1>{state.count}</h1>
            <button
                onClick={() => {
                    ditpatch({ type: 'INCREMENT' })
                    ditpatch({ type: 'TOGGLE' })
                }}
            >INCREMENT!</button>
            <button
                onClick={() => {
                    ditpatch({ type: 'DECREMENT' })

                }}
            >DECREMENT!</button>
            {
                state.showText && <div>
                    <NavTesting />
                </div>
            }
        </div>
    )
}

export default IndexReducer