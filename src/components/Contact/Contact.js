import React from "react";

const Contact = props => {
  let resumeData = props.resumeData
  return (
    <section id="contact">
      <div>
        <p>Feel free to contact me below</p>
        <h4>{resumeData.website}</h4>
        <h4>(305)-992-7547</h4>
        <h4>
          <a href={resumeData.linkedinId}>Click Here to contact me via LinkedIn</a>
        </h4>
      </div>
    </section>
  )
}

export default Contact
