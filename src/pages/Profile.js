import React, {Component, Fragment} from 'react'
import {SKILLS} from '../constants/skills'
import * as Experience from '../constants/experience'
import * as Education from '../constants/education'
import Group from '../components/group/Group'
import Panel from '../components/panel/Panel'
import ProfilePicture from '../components/profilePicture/ProfilePicture'
import ProfileImage from './MackNCheese.jpg'
import PrintButton from '../components/print/PrintButton'

class ProfilePage extends Component {

  render() {
    return (
      <div data-page="Profile">
        <ProfilePicture source={ProfileImage} />
        <h1>Mackenzey Thunem</h1>
        <p>
          Dependable and compassionate student nurse seeking to gain hands-on experience in 
          direct patient care as a summer intern ideally ona  surgical or critical care floor.  Skilled in 
          patient-centered care, performing physical and functional assessments, assisting with care 
          planning, balancing the art and science of nursing, and educating patients.  On track to 
          graduate with a Bachelor of Science in nursing in the year 2020.
        </p>
        <div className="ProfileContainer">
          <section>
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
            <PrintButton />
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
          </aside>
        </div>
      </div>
    )
  }
}

export default ProfilePage
