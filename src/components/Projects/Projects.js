import React from "react"
import Title from "../Title/Title"
import Project from "../Project/Project"
import { Link } from "gatsby"

//styles
import "./projects.css"

const Projects = ({ title, showLink, projects }) => {
  return (
    <section className="section projects">
      <Title title={title} />
      <div className="section-center">
        {projects.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />
        })}
      </div>
      {showLink && (
        <Link to="/projects" className="btn center-btn">
          projects
        </Link>
      )}
    </section>
  )
}

export default Projects
