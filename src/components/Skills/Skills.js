import React from "react"
import Title from "../Title/Title"
import skills from "../../constants/skills"

// styles
import "./skills.css"

const Skills = () => {
  return (
    <div className="section bg-grey">
      <Title title="skills" />
      <div className="section-center skills-center">
        {skills.map(skill => {
          const { id, icon, title, text } = skill
          return (
            <article key={id} className="skill">
              {icon}
              <h4>{title}</h4>
              <div className="underline"></div>
              <p>{text}</p>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default Skills
