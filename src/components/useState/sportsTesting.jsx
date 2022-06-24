import React from 'react'
import { Container, Logo, Wallpaper } from './styled'

const SportsTesting = ({ value }) => {
    return (
        <Container>
            <Wallpaper src={value.node.banner} alt="data is broken" />
            <Logo src={value.node.logo} alt="data is broken" />
            <p>{value.node.name}</p>
            <p>by {value.node.slug}</p>
            <p>{value.node.description}</p>
        </Container>
    )
}

export default SportsTesting