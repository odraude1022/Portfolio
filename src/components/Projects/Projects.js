import React from "react";

const Projects = props => {
  let resumeData = props.resumeData
  return (
    <section id="projects">
        <h1 className="project-headline">Projects</h1>
        <div className="projects">
        {
          resumeData.portfolio && resumeData.portfolio.map((item)=>{
            return(
              <div key={item.name} className="project">
                <a href={`${item.url}`} target="_blank" rel="noopener noreferrer">
                  <h5>{item.name}</h5>
                  <img src={`${item.imgurl}`} className="project-img" alt={`screenshot of ${item.name}`}/>
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
