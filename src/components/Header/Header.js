import React from "react";

const Header = props => {
  let resumeData = props.resumeData
  return (
    <div>
      <h1>Hi, I'm {resumeData.name}</h1>
      <h3>I'm a {resumeData.role}.{resumeData.roleDescription}</h3>
    </div>
  )
}

export default Header
