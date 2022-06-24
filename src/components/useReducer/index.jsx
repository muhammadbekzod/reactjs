import React, { useReducer } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1,
                showText: state.showText
            }
        case 'DECREMENT':
            return {
                count: state.count - 1,
                showText: state.showText
            }
        case 'toggle':
            return {
                count: state.count, showText: !state.showText
            }
        default: return state
    }
}


const IndexReducer = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0, showText: true })

    return (
        <div>
            <h1>{state.count}</h1>
            <button
                onClick={() => {
                    dispatch({ type: 'INCREMENT' })
                    dispatch({ type: 'toggle' })
                }}
            >Click me!</button>

            <h1>{state.showText && <p>text me</p>}</h1>
        </div>
    )
}

export default IndexReducer