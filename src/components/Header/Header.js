import React from "react";

const Header = props => {
  let resumeData = props.resumeData
  return (
    <section id="header">
      <div className="header">
        <h1>Hi, I'm {resumeData.name}</h1>
        <h3>I'm a {resumeData.role}.{resumeData.roleDescription}</h3>
        <ul className="social">
          {
            resumeData.socialLinks && resumeData.socialLinks.map( item => {
              return(
                <li key={item.name}>
                  <a href={item.url} target="_blank">
                    <i className={item.className}></i>
                  </a>
                </li>
              )
            })
          }
        </ul>
      </div>
    </section>
  )
}

export default Header
