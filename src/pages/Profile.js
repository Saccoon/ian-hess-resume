import React, {Component} from 'react'
import styled from 'styled-components'

import Container from '../components/container/Container'
import { LANGUAGES, FRAMEWORKS, DATABASES, TECHNOLOGIES } from '../constants/skills'
import * as EXPERIENCE from '../constants/experience'
import * as EDUCATION from '../constants/education'
import * as Colors from '../constants/colors'
import ProfileImage from './FullSizeR.png'

class ProfilePage extends Component {

	render() {
		const ProfileContainer = styled.main`
			padding-bottom: 20px;
		`
		const Section = styled.article`
			background: ${props => props.background ? Colors[props.background] : Colors.White };
			padding: 40px;
		`
		const SectionTitle = styled.h1`
			text-align: center;
			font-size: 40px;
			width: 300px;
			margin: 0 auto;
			margin-bottom: 40px;
			border-bottom: 2px solid ${props => props.border ? Colors[props.border] : Colors.DarkYellow };
			color: ${props => props.color ? Colors[props.color] : Colors.DarkGray };
		`
		const Flex = styled.div`
			display: flex;
			justify-content: space-evenly;
		`
		const FlexItem = styled.div`
			background: ${props => props.background ? Colors[props.background] : Colors.DarkYellow };
			flex-grow: 1;
			margin-right: 20px;
			&:last-child{
				margin: 0;
			}
		`
		const ItemTitle = styled.h2`
			font-size: 30px;
			margin: 0;
			padding: 20px;
			background: ${props => props.background ? Colors[props.background] : Colors.DarkGray };
			color: ${props => props.color ? Colors[props.color] : Colors.DarkYellow };
			text-align: ${props => props.align ? props.align : "center" };
		`
		const ItemSubTitle = styled.h3`
			padding: 0 20px;
		`
		const ItemText = styled.p`
			text-align: ${props => props.align ? props.align : "center" };
			padding: 0 20px;
			a {
				color: ${Colors.DarkYellow};
			}
		`
		const GridList = styled.div`
			display: grid;
			grid-template-columns: ${props => props.grid ? props.grid : '100%' };
			grid-gap: 20px;
		`
		const GridItem = styled.div`
			background: ${props => props.background ? Colors[props.background] : Colors.DarkYellow };
		`
		
		return (
			<ProfileContainer>
				{/* <ProfilePicture source={ProfileImage} /> */}
				<Section background="DarkGray">
					<Container>
						<h1>About Me, Ian Hess</h1>
						<p>
							My name is Ian Hess, I am a technology leader and developer in the Minneapolis, MN area.<br />
							With the use of technology I assess problems or roadblocks companies face and overcome them.<br />
							Specializing in web technologies and web infrastructure, I build and lead teams or individuals
							down the necessary path to turn their current technology issues into income generating and efficient
							systems.
						</p>
						<p>
							Fulltime I am a department Lead for the Ameriprise Financial Web Team, and outside of work I
							have worked with many businesses and startups to help them realize their technology dreams.
						</p>
						<ul>
							<li>Objective Focused</li>
							<li>Collaborative</li>
							<li>Open to Discussion</li>
							<li>Focused on bridging gaps between teams/technology</li>
							<li>Passionate about projects</li>
						</ul>
					</Container>
				</Section>
				<Section>
					<Container>
						<SectionTitle>Skills</SectionTitle>
						<Flex>
							<FlexItem>
								<ItemTitle>Languages</ItemTitle>
								{LANGUAGES.map((data, key) => <ItemText key={key}>{data}</ItemText>)}
							</FlexItem>
							<FlexItem>
								<ItemTitle>Frameworks</ItemTitle>
								{FRAMEWORKS.map((data, key) => <ItemText key={key}>{data}</ItemText>)}
							</FlexItem>
							<FlexItem>
								<ItemTitle>Databases</ItemTitle>
								{DATABASES.map((data, key) => <ItemText key={key}>{data}</ItemText>)}
							</FlexItem>
							<FlexItem>
								<ItemTitle>Technologies</ItemTitle>
								{TECHNOLOGIES.map((data, key) => <ItemText key={key}>{data}</ItemText>)}
							</FlexItem>
						</Flex>
					</Container>
				</Section>
				<Section background="DarkGray">
					<Container>
						<SectionTitle color="LightGray">Experience</SectionTitle>
						<GridList grid="calc(50% - 10px) calc(50% - 10px)">
							{Object.values(EXPERIENCE).map((data, key) => <GridItem background="White" key={key}>
								<ItemTitle background="DarkYellow" color="DarkGray">{data.name}</ItemTitle>
								<ItemText align="left">{data.title}</ItemText>
								<ItemText align="left">{data.location}</ItemText>
								<ItemText align="left">{data.years}</ItemText>
								<ItemSubTitle>Completed Work</ItemSubTitle>
								{data.urls.map((data, key) => <ItemText align="left" key={key}><a href={data} target="_blank">{data}</a></ItemText>)}
							</GridItem>)}
						</GridList>
					</Container>
				</Section>
				<Section>
					<Container>
						<SectionTitle>Education</SectionTitle>
						<GridList>
							{Object.values(EDUCATION).map((data, key) => <GridItem key={key}>
								<ItemTitle align="left">{data.name}</ItemTitle>
								<ItemText>{data.school}</ItemText>
								<ItemText>{data.study}</ItemText>
								<ItemText>{data.gpa}</ItemText>
								<ItemText>{data.years}</ItemText>
							</GridItem>)}
						</GridList>
					</Container>
				</Section>
			</ProfileContainer>
		)
	}
}

export default ProfilePage
