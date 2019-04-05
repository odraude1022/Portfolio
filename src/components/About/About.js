import React from "react";

const About = props => {
  let resumeData = props.resumeData
  return (
    <div>
      <img className="profile-pic"  src="images/me.jpg" alt="me" />
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
  )
}

export default About
