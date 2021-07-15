import React, { Component } from 'react'
import styled from 'styled-components'

import Container from '../container/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faPrint, faGlobe } from '@fortawesome/fontawesome-free-solid'
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
			text-align: center;
			&:hover {
				text-decoration: underline;
			}
		`
		const Print = styled.p`
			margin: 0;
			color: ${Colors.DarkYellow};
			cursor: pointer;
			padding: 20px 0;
			&:hover {
				text-decoration: underline;
			}
			@media print {
				padding: 10px 0;
				display: none;
			}
		`
		const Copyright = styled.p`
			color: white;
			margin: 0;
			padding: 0 0 20px 0;
			@media print {
				padding: 10px 0 10px 0;
			}
		`
		return (
			<FooterContainer>
				<Container>
					<Flex>
						<Link href="tel:218-556-6276" target='_top'>(612)772-5983 <FontAwesomeIcon icon={faPhone} /></Link>
						<Link href="mailto:ian@noctemis.com" target="_top">ian@noctemis.com <FontAwesomeIcon icon={faEnvelope} /></Link>
						<Print onClick={window.print}>Print <FontAwesomeIcon icon={faPrint} /></Print>
						<Link href="http://www.ianhess.online">http://www.ianhess.online <FontAwesomeIcon icon={faGlobe} /></Link>
					</Flex>
					<Copyright>©2021 IAN HESS</Copyright>
				</Container>
			</FooterContainer>
		)
	}
}

export default Footer
