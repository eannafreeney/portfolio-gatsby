import React from "react"
import { graphql } from "gatsby"
import Title from "../components/Title/Title"

const About = ({ data }) => {
  const {
    strapiAbout: { title, image, description, stack },
  } = data
  return (
    <section className="about-page">
      <div className="section-center about-center">
        <img
          src={image.localFile.publicURL}
          alt={title}
          className="about-img-svg"
        />
        <article className="about-text">
          <Title title={title} />
          <p>{description}</p>
          <div className="about-stack">
            {stack.map(item => {
              return <span key={item.id}>{item.title}</span>
            })}
          </div>
        </article>
      </div>
    </section>
  )
}

export const query = graphql`
  {
    strapiAbout {
      title
      description
      stack {
        id
        title
      }
      image {
        localFile {
          publicURL
        }
      }
    }
  }
`

export default About
