import React from 'react'
import'./teammember.css';
function Teammember({id,name,role,image}) {
  return (
    <div className="teammember">
        <img src={image} alt="" />
        <h4>{name}</h4>
        <h5>{role}</h5>
    </div>
  )
}

export default Teammember;