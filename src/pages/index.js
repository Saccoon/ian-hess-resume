import React from 'react'

import { ProfileContainer,
	Section,
	SectionTitle,
	FlexList,
	FlexItem,
	ItemTitle,
	ItemSubTitle,
	ItemText,
	GridList,
	GridItem,
	Title,
	SummaryText,
	ProfilePicture,
	SummaryItem,
	Summary,
	SummaryContent } from './Styles'
import {Container} from '../components/simple/container'
import { LANGUAGES, FRAMEWORKS, DATABASES, TECHNOLOGIES } from '../constants/skills'
import * as EXPERIENCE from '../constants/experience'
import * as EDUCATION from '../constants/education'

import ProfileImage from './FullSizeR.png'

export const ProfilePage = () => {
	return (
		<ProfileContainer>
			<Section background="DarkGray">
				<Container>
					<Summary>
						<SummaryContent>
							<Title>About Me, Ian Hess</Title>
							<SummaryText>
								My name is Ian Hess, I am a technology leader and developer in the Minneapolis, MN area.<br />
								With the use of technology I assess problems or roadblocks companies face and overcome them.<br />
								Specializing in web technologies and web infrastructure, I build and lead teams or individuals
								down the necessary path to turn their current technology issues into income generating and efficient
								systems.
							</SummaryText>
							<SummaryText>
								Fulltime I am a Web Architect for Trane Inc, and outside of work I
								have worked with many businesses and startups to help them realize their technology dreams.
							</SummaryText>
							<SummaryItem>
								Objective Focused, Collaborative, Open to Discussion, 
								Focused on bridging gaps between teams/technology, Passionate about projects
							</SummaryItem>
						</SummaryContent>
						<ProfilePicture>
							<img src={ProfileImage} />
						</ProfilePicture>
					</Summary>
				</Container>
			</Section>
			<Section>
				<Container>
					<SectionTitle>Skills</SectionTitle>
					<FlexList>
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
					</FlexList>
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
							{data.urls.map((data, key) => <ItemText noPrint={true} align="left" key={key}><a href={data} target="_blank">{data}</a></ItemText>)}
							{data.tasks && (data.tasks.length > 0) && <ItemSubTitle>What I Did</ItemSubTitle>}
							{data.tasks && data.tasks.map((data, key) => <ItemText noPrint={true} align="left" key={key}>{data}</ItemText>)}
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
							<ItemText align="left">{data.school}</ItemText>
							<ItemText align="left">{data.study}</ItemText>
							<ItemText align="left">{data.gpa}</ItemText>
							<ItemText align="left">{data.years}</ItemText>
						</GridItem>)}
					</GridList>
				</Container>
			</Section>
		</ProfileContainer>
	)
}
