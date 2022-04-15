import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

const ProjectTemplate = props => {
  console.log(props)
  return (
    <main className="project-template-page">
      <h2>{props.pageContext.title}</h2>
      <GatsbyImage
        image={getImage(props.data.strapiProject.image.localFile)}
        alt={props.pageContext.title}
      />
      <p>{props.data.strapiProject.description}</p>
    </main>
  )
}

export const query = graphql`
  query getSingleProject($title: String) {
    strapiProject(title: { eq: $title }) {
      description
      title
      image {
        localFile {
          publicURL
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
      }
    }
  }
`

export default ProjectTemplate
