import React, {Component, Fragment} from 'react'
import {SKILLS} from '../constants/skills'
import * as Clinical from '../constants/clinical'
import * as Experience from '../constants/experience'
import * as Education from '../constants/education'
import * as Community from '../constants/community'
import * as Volunteer from '../constants/volunteer'
import Group from '../components/group/Group'
import Panel from '../components/panel/Panel'
import ProfilePicture from '../components/profilePicture/ProfilePicture'
import ProfileImage from './MackNCheese.jpg'
import DownloadButton from '../components/download/Download'

class ProfilePage extends Component {

  render() {
    return (
      <div data-page="Profile">
        <ProfilePicture source={ProfileImage} />
        <h1>Mackenzey Thunem</h1>
        <p>
          Dependable and compassionate student nurse seeking to gain hands-on experience in 
          direct patient care as a summer intern ideally on a  surgical or critical care floor.  Skilled in 
          patient-centered care, performing physical and functional assessments, assisting with care 
          planning, balancing the art and science of nursing, and educating patients.  On track to 
          graduate with a Bachelor of Science in nursing in the year 2020.
        </p>
        <div className="ProfileContainer">
          <section>
            <Group title="Clinical Experience">
            {Object.values(Clinical).map((experience, i) =>{
              return (
                <Panel title={experience.name + ' - ' + experience.title} key={experience + i}>
                  <p>
                    {experience.location}<br />
                    <span className="Bold">{experience.years}</span>
                  </p>
                  <ul>
                  {Object.values(experience.notes).map((note, j) =>
                    <li key={note + j}>
                      {note}
                    </li>
                  )}
                  </ul>
                </Panel>
              )
            })}
            </Group>
            <Group title="Employment History">
            {Object.values(Experience).map((job, i) =>{
              return (
                <Panel title={job.name + ' - ' + job.title} key={job + i}>
                  <p>
                    {job.location}<br />
                    <span className="Bold">{job.years}</span>
                  </p>
                  <ul>
                  {Object.values(job.notes).map((note, j) =>
                    <li key={note + j}>
                      {note}
                    </li>
                  )}
                  </ul>
                </Panel>
              )
            })}
            </Group>
            <div className="Small">
              <Group title="Community Activities">
              {Object.values(Community).map((job, i) =>{
                return (
                  <Panel title={job.name} key={job + i}>
                    <p>
                      {job.location}<br />
                      <span className="Bold">{job.years}</span>
                    </p>
                    <ul>
                    {job.notes && Object.values(job.notes).map((note, j) =>
                      <li key={note + j}>
                        {note}
                      </li>
                    )}
                    </ul>
                  </Panel>
                )
              })}
              </Group>
              <Group title="Volunteer Activities">
              {Object.values(Volunteer).map((job, i) =>{
                return (
                  <Panel title={job.name} key={job + i}>
                    <p>
                      {job.location}<br />
                      <span className="Bold">{job.years}</span>
                    </p>
                    <ul>
                    {job.notes && Object.values(job.notes).map((note, j) =>
                      <li key={note + j}>
                        {note}
                      </li>
                    )}
                    </ul>
                  </Panel>
                )
              })}
              </Group>
            </div>
            <DownloadButton />
          </section>
          <aside>
            <Group title="Skills">
              <ul>
              {SKILLS.map((skill, i) =>
                <li key={skill + i}>
                    {skill}
                </li>
              )}
              </ul>
            </Group>
            <span className="Padding-Top">
              <Group title="Education">
              { Object.values(Education).map((chapter, i) =>
                <Fragment key={chapter + i}>
                  <h3>
                    {chapter.school}<br />
                    {chapter.study}
                  </h3>
                  <p>
                    GPA - {chapter.gpa}<br />
                    <span className="Bold">{chapter.years}</span>
                  </p>
                  <ul>
                    {
                      chapter.notes.map((note, j) =>
                        <li key={note + j}>{note}</li>
                      )
                    }
                  </ul>
                </Fragment>
              )}
              </Group>
            </span>
            <span className="Padding-Top">
              <Group title="Contact">
                <div className="Padding">
                  <h3>Phone</h3>
                  <a href="tel:218-766-9421" target='_top'><p>(218)766-9421</p></a>
                </div>
                <div className="Padding">
                  <h3>Email</h3>
                  <a href="mailto:mackythunem@gmail.com" target="_top"><p>mackythunem@gmail.com</p></a>
                </div>
                <div className="Padding">
                  <h3>Address</h3>
                  <p>
                    2551 38th Ave NE #118, <br />
                    St Anthony MN, 55421
                  </p>
                </div>
              </Group>
            </span>
          </aside>
        </div>
      </div>
    )
  }
}

export default ProfilePage
