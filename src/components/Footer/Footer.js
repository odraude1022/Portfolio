import React from "react";

const Footer = props => {
  let resumeData = props.resumeData
  return (
    <section id="footer">
      <div className="footer">
      <div className="social-wrap">
        <ul className="social">
          {
            resumeData.socialLinks && resumeData.socialLinks.map( item => {
              return(
                <li key={item.name}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="footer-social">
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

export default Footer
