import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import { Link } from "gatsby"

//styles
import "./project.css"

const Project = props => {
  return (
    <article className="project">
      <GatsbyImage
        image={getImage(props.image.localFile)}
        className="project-img"
        alt={props.title}
      />
      <div className="project-info">
        <span className="project-number">0{props.index + 1}</span>
        <Link to={`/projects/${props.slug}`} className="project-slug">
          <h3>{props.title}</h3>
        </Link>
        <p className="project-desc">{props.description}</p>
        <div className="project-stack">
          {props.stack.map(item => {
            return <span key={item.id}>{item.title}</span>
          })}
        </div>
        <div className="project-links">
          <a href={props.github} target="_blank">
            <FaGithubSquare className="project-icon" />
          </a>
          <a href={props.url} target="_blank">
            <FaShareSquare className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  )
}

export default Project
