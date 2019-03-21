import React, { Component } from 'react'
import styled from 'styled-components'

import Container from '../container/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faPrint } from '@fortawesome/fontawesome-free-solid'
import { faEnvelope } from '@fortawesome/fontawesome-free-regular'

import * as Colors from '../../constants/colors'


class Footer extends Component {

	render() {
		const FooterContainer = styled.footer`
			background: ${Colors.DarkGray};
		`
		const Flex = styled.div`
			display: flex;
			justify-content: space-between;
			align-items: center;
		`
		const Link = styled.a`
			color: ${Colors.DarkYellow};
			cursor: pointer;
			text-decoration: none;
			&:hover {
				text-decoration: underline;
			}
		`
		const Print = styled.p`
			margin: 0;
			color: ${Colors.DarkYellow};
			cursor: pointer;
			&:hover {
				text-decoration: underline;
			}
			@media print {
				display: none;
			}
		`
		const Copyright = styled.p`
			color: white;
		`
		return (
			<FooterContainer>
				<Container>
					<Flex>
						<Link href="tel:218-556-6276" target='_top'>(218)556-6276 <FontAwesomeIcon icon={faPhone} /></Link>
						<Link href="mailto:ian@noctemis.com" target="_top">ian@noctemis.com <FontAwesomeIcon icon={faEnvelope} /></Link>
						<Print onClick={window.print}>Print <FontAwesomeIcon icon={faPrint} /></Print>
						<Copyright>©2018 IAN HESS</Copyright>
					</Flex>
				</Container>
			</FooterContainer>
		)
	}
}

export default Footer
