import { faAws, faDigitalOcean } from '@fortawesome/fontawesome-free-brands'
import React, {Fragment, useState} from 'react'
import { STEVENWORKOUT } from './data'
import styled from 'styled-components'

const Day = props => {
    const [open, setOpen] = useState(false)

    const Day = styled.article`
        width: calc(100% - 20px);
        border: 1px solid black;
        padding: 10px;
        &:nth-child(even) {
            background: gray;
        }
        &:nth-child(odd) {
            background: lightgray;
        }
        @media only screen and (min-width: 1600px) {
            width: calc(20% - 20px);
        }
        cursor: pointer;
    `
    return(
        <Day key={props.key} onClick={() => setOpen(!open)}>
            <h2>{props.day} - Click to {open ? "close" : "open"}</h2>
            {open && props.children}
        </Day>
    )
}

export const WorkoutPage = () => {

    const Month = styled.section`
        width: calc(100% - 2px);
        display: block;
        border: 1px solid black;
        @media only screen and (min-width: 1600px) {
            display: flex;
            margin: 20px;
            width: calc(100% - 42px);
        }
    `

    const Exercise = styled.div`
        padding-bottom: 20px;
    `

    return (
        <Fragment>
            <h1>{STEVENWORKOUT.name}</h1>
            <p>Notes - {STEVENWORKOUT.description}</p>
            <Month>
                {STEVENWORKOUT.calendar.map((day, key) => <Day day={day.day} key={`workout-${day.name}-${key}`}>
                    {day.exercises.map((exercise, key) => <Exercise key={`exercise-${exercise.name}-${key}`}>
                        <h3>{exercise.name}</h3>
                        <p>{exercise.description}</p>
                        <a href={exercise.link && exercise.link}>Learn Here</a>
                        <p>Resting: {exercise.rest}</p>
                        {exercise.sets.map((set, key) => <p key={`workout-set-${key}`}>{set}</p>)}
                    </Exercise>)}
                </Day>)}
            </Month>
        </Fragment>
    )
}