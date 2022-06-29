import React, { useEffect, useState } from 'react'
import { Container, Img, Wrapper } from './style';

const UseEffectLesson = () => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then((res) => res.json())
            .then((data) => setData(data))
            .then(() => setLoading(false))
    }, [])

    return (
        <Container>
            {isLoading && <h1>Loading...</h1>}
            {data.map(({ id, url, title }) => (
                <Wrapper key={id}>
                    <Img src={url} alt="broken data" />
                    <p>{title}</p>
                </Wrapper>
            ))}

        </Container>
    )
}




export default UseEffectLesson