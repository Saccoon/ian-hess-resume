import styled from 'styled-components'
import * as Colors from '../constants/colors'

export const ProfileContainer = styled.main`
	padding-bottom: 20px;
	@media print {
		padding: 0;
	}
`
export const Section = styled.article`
	background: ${props => props.background ? Colors[props.background] : Colors.White };
	padding: 40px;
	@media print {
		padding: 20px 0;
		background: none;
	}
`
export const SectionTitle = styled.h1`
	text-align: center;
	font-size: 40px;
	width: 300px;
	margin: 0 auto;
	margin-bottom: 40px;
	border-bottom: 2px solid ${props => props.border ? Colors[props.border] : Colors.DarkYellow };
	color: ${props => props.color ? Colors[props.color] : Colors.DarkGray };
	@media print {
		font-size: 20px;
		margin-bottom: 20px;
	}
`
export const FlexList = styled.div`
	display: flex;
	justify-content: space-evenly;
	position: relative;
`
export const FlexItem = styled.div`
	background: ${props => props.background ? Colors[props.background] : Colors.DarkYellow };
	flex-grow: ${props => props.grow ? props.grow : 1 };
	margin-right: 20px;
	position: relative;
	&:last-child{
		margin: 0;
	}
	@media print {
		margin-right: 10px;
		&:last-child{
			margin: 0;
		}
	}
`
export const ItemTitle = styled.h2`
	font-size: 30px;
	margin: 0;
	padding: 20px;
	background: ${props => props.background ? Colors[props.background] : Colors.DarkGray };
	color: ${props => props.color ? Colors[props.color] : Colors.DarkYellow };
	text-align: ${props => props.align ? props.align : "center" };
	@media print {
		font-size: 16px;
		padding: 10px;
	}
`
export const ItemSubTitle = styled.h3`
	padding: 0 20px;
	@media print {
		font-size: 14px;
		padding: 0 10px;
	}
`
export const ItemText = styled.p`
	text-align: ${props => props.align ? props.align : "center" };
	padding: 0 20px;
	a {
		color: ${Colors.DarkYellow};
		text-decoration: none;
		cursor: pointer;
		&:hover {
			text-decoration: underline;
		}
	}
	@media print {
		font-size: 12px;
		padding: 0 10px;
		a {
			font-size: 12px;
		}
	}
`
export const GridList = styled.div`
	display: grid;
	grid-template-columns: ${props => props.grid ? props.grid : '100%' };
	grid-gap: 20px;
	position: relative;
	@media print {
		grid-template-columns: calc(50% - 5px) calc(50% - 10px);
		grid-gap: 10px;
	}
`
export const GridItem = styled.div`
	background: ${props => props.background ? Colors[props.background] : Colors.DarkYellow };
	position: relative;
`
export const Title = styled.h1`
	color: ${Colors.LightGray};
	border-bottom: 2px solid ${Colors.DarkYellow};
	font-size: 50px;
	margin-bottom: 20px;
	@media print {
		font-size: 26px;
		margin-bottom: 10px;
	}
`
export const SummaryText = styled.p`
	color: ${Colors.MediumGray};
	@media print {
		font-size: 12px;
	}
`
export const ProfilePicture = styled.figure`
	img {
		height: 250px;
		width: 250px;
		border-radius: 125px;
		border: 2px solid ${Colors.DarkYellow};
	}
	@media print {
		img {
			height: 150px;
			width: 150px;
			border-radius: 75px;
		}
	}
`
export const SummaryItem = styled.p`
	color: ${Colors.LightGray};
	margin: 0;
	font-size: 14px;
	text-shadow: 1px 1px 1px ${Colors.MediumGray};
	@media print {
		font-size: 10px;
		font-style: italic;
		text-shadow: none;
	}
`
export const Summary = styled.div`
	display: flex;
`
export const SummaryContent = styled.div`
`