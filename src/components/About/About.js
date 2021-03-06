import React from "react";

const About = props => {
  let resumeData = props.resumeData
  return (
    <section id="about">
      <div className="about">
        <div className="profile-pic-wrap">
          <img className="profile-pic"  src="images/me.jpg" alt="me" />
        </div>
        <div className="about-content">
          <h2>About Me</h2>
          <p>
           {
             resumeData.aboutme
           }
          </p>

          <h2>Contact Details</h2>
          <p className="address">
    				   <span>
                Eduardo Iglesias
             </span>
             <br/>
             <span>
                (305)-992-7547
             </span>
             <br/>
             <span>
                {resumeData.website}
             </span>
             <br/>
    				   <span>
                {resumeData.address}
            </span>
    			</p>
        </div>
      </div>
    </section>
  )
}

export default About
