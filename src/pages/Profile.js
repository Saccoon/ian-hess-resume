import React, {Component} from 'react';
import * as Skills from '../constants/skills';
import * as Experience from '../constants/experience';
import * as Education from '../constants/education';
import Group from '../components/group/Group';
import Accordion from '../components/accordion/Accordion';
import Panel from '../components/panel/Panel';
import ProfilePicture from '../components/profilePicture/ProfilePicture'
import ProfileImage from './FullSizeR.png'
import Print from '../components/print/Print'

class ProfilePage extends Component {

  render() {
    return (
      <div data-page="Profile">
        <ProfilePicture source={ProfileImage} />
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
        <Group title="Skills">
          {Object.values(Skills).map((category, i) =>{
            return (
              <Panel title={category.name} key={category + i}>
                {Object.values(category.skills).map((skill, j) =>{
                  return (
                    <p key={skill + j}>
                        {skill}
                    </p>
                  )
                })}
              </Panel>
            )
          })}
        </Group>

        <Group title="Experience">
        {Object.values(Experience).map((job, i) =>{
          return (
            <Accordion title={job.name + ' - ' + job.title} key={job + i}>
              <p>{job.location}</p>
              <p>{job.years}</p>
              <h4>Completed Projects for Client:</h4>
              {Object.values(job.urls).map((url, j) =>{
                return (
                  <p key={url + j}>
                    <a target='_blank' href={url}>{url}</a>
                  </p>
                )
              })}
            </Accordion>
          )
        })}
        </Group>

        <Group title="Education">
        {Object.values(Education).map((chapter, i) =>{
            return (
              <Panel title={chapter.name} key={chapter + i}>
                <h4>{chapter.school}</h4>
                <h5>{chapter.study}</h5>
                <p>{chapter.gpa}</p>
                <p>{chapter.years}</p>
              </Panel>
            )
        })}
        </Group>

        <Print>
          <h1>About Me</h1>
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
          <h2>Skills</h2>
          {Object.values(Skills).map((category, i) =>{
            return (
              <div key={category + i}>
                <h3>{category.name}</h3>
                {Object.values(category.skills).map((skill, j) =>{
                  return (
                    <p key={skill + j}>
                        {skill}
                    </p>
                  )
                })}
              </div>
            )
          })}
          <h2>Experience</h2>
          {Object.values(Experience).map((job, i) =>{
            return (
              <div key={job + i}>
                <h3>{job.name + ' - ' + job.title}</h3>
                <p>{job.location}</p>
                <p>{job.years}</p>
                <h4>Completed Projects for Client:</h4>
                {Object.values(job.urls).map((url, j) =>{
                  return (
                    <p key={url + j}>
                      <a target='_blank' href={url}>{url}</a>
                    </p>
                  )
                })}
              </div>
            )
          })}
          <h2>Education</h2>
          {Object.values(Education).map((chapter, i) =>{
              return (
                <div key={chapter + i}>
                  <h3>{chapter.name}</h3>
                  <h4>{chapter.school}</h4>
                  <h5>{chapter.study}</h5>
                  <p>{chapter.gpa}</p>
                  <p>{chapter.years}</p>
                </div>
              )
          })}

          <h2>Contact</h2>
            <p>Telephone - (218)556-6276</p>
            <p>Email - ian@noctemis.com</p>
        </Print>
      </div>
    )
  }
}

export default ProfilePage;
