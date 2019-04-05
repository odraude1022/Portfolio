import React from "react";

const Resume = props => {
  let resumeData = props.resumeData
  return (
    <section id="resume">
      <div>
        <div className="education">
          <h1>Education</h1>
          {
            resumeData.education && resumeData.education.map( item => {
              return(
                <div key={item.UniversityName}>
                  <h3>{item.UniversityName}</h3>
                  <p className="info">
                    {item.specialization}
                    <span>&bull;</span> <em>{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                  <p>
                  {item.Achievements}
                  </p>
                </div>
              )
            })
          }
        </div>
        <div className="work">
          <h1>Professional Experience</h1>
          {
            resumeData.work && resumeData.work.map( item => {
              return(
                <div key={item.CompanyName}>
                  <h3>{item.CompanyName}</h3>
                  <p>
                    {item.specialization}
                    <span>&bull;</span> <em>{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                  <p>
                    {item.Achievements}
                  </p>
                </div>
              )
            })
          }
        </div>
        <div className="skills">
          <h1>Skills</h1>

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
