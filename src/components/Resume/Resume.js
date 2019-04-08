import React from "react";

const Resume = props => {
  let resumeData = props.resumeData
  return (
    <section id="resume">
      <div className="resume">
        <div className="education">
          <div className="education-title">
            <h1>Education</h1>
          </div>
          <div className="education-content">
            {
              resumeData.education && resumeData.education.map( item => {
                return(
                  <div key={item.UniversityName} className="resume-title">
                    <h3>{item.UniversityName}</h3>
                    <p className="info">
                      <em>
                      {item.specialization}
                      <span>  &bull;</span> {item.MonthOfPassing} {item.YearOfPassing}</em></p>
                    <p className="achievements">
                    {item.Achievements}
                    </p>
                  </div>
                )
              })
            }
          </div>
        </div>
        <hr/>
        <div className="work">
          <div className="work-title">
            <h1>Professional Experience</h1>
          </div>
          <div className="work-content">
            {
              resumeData.work && resumeData.work.map( item => {
                return(
                  <div key={item.CompanyName} className="resume-title">
                    <h3>{item.CompanyName}</h3>
                    <p className="info">
                      <em>
                      {item.specialization}
                      <span> </span> {item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                    <p className="achievements">
                      {item.Achievements}
                    </p>
                  </div>
                )
              })
            }
          </div>
        </div>
        <hr/>
        <div className="skills">
          <div className="skills-title">
            <h1>Skills</h1>
          </div>

          <div className="bars">
            <ul className="skills">
              {
                resumeData.skills && resumeData.skills.map((item) => {
                  return(
                    <li key={item.skillname}>
                      <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                      </span><em>{item.skillname}</em>
                    </li>
                  )
                })
              }

    				</ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
