import React, { Component } from 'react'
import { node, number } from 'prop-types'
import { ContainerStyles } from './Styles'

class Container extends Component {
    static propTypes = {
        /** children inside of the container **/
        children: node.isRequired,
        /** optional width to pass in */
        width: number
    }

    static defaultProps = {
        width: 1200
    }

    render() {
        const { children, width } = this.props

        return <ContainerStyles width={width}>{children}</ContainerStyles>
    }
}

export default Container
