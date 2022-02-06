import React from 'react'
import styled from 'styled-components'

export const Container = props => {
    const { children, width } = props

    const Container = styled.section`
        margin: 0 auto;
        width: calc(100% - 20px);
        max-width: calc(${props => props.width}px - 20px);
        padding: 0 10px;
    `

    return (
        <Container width={width}>
            {children}
        </Container>
    )
}
