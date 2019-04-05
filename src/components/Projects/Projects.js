import React from "react";

const Projects = props => {
  let resumeData = props.resumeData
  return (
    <section id="projects">
      <div>
        <h1>Projects</h1>
        {
          resumeData.portfolio && resumeData.portfolio.map((item)=>{
            return(
              <div key={item.name}>
                <a href={`${item.url}`} target="_blank" rel="noopener noreferrer">
                  <img src={`${item.imgurl}`} className="project-img" alt={`screenshot of ${item.name}`}/>
                  <h5>{item.name}</h5>
                  <p>{item.description}</p>
                </a>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Projects
