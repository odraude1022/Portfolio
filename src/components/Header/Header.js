import React from "react";

const Header = props => {
  let resumeData = props.resumeData
  return (
    <section id="header">
        <div className="header">
          <h1 className="headline">Hi, I'm {resumeData.name}</h1>
          <h3 className="sub-headline">I'm a {resumeData.role}.{resumeData.roleDescription}</h3>
          <div className="social-wrap">
            <ul className="social">
              {
                resumeData.socialLinks && resumeData.socialLinks.map( item => {
                  return(
                    <li key={item.name}>
                      <a href={item.url} target="_blank" rel="noopener noreferrer">
                        <i className={item.className}></i>
                      </a>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
    </section>
  )
}

export default Header
