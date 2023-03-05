import React from 'react'
import "./Skills.css"

const Skills = (props) => {
  return (
    <div className='Skill'>
      <h2>{props.title}</h2>
      <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>Bootstrap4</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Git</li>
        <li>GitHub</li>
      </ul>
    </div>
  );
}

export default Skills;