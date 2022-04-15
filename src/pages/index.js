import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero/Hero"
import Skills from "../components/Skills/Skills"
import Projects from "../components/Projects/Projects"

const IndexPage = ({ data }) => {
  const {
    allStrapiProject: { nodes: projects },
  } = data

  console.log(projects)
  return (
    <main>
      <Hero />
      <Skills />
      <Projects title="featured projects" showLink projects={projects} />
    </main>
  )
}

export const query = graphql`
  {
    allStrapiProject(filter: { featured: { eq: false } }) {
      nodes {
        id
        title
        description
        featured
        github
        slug
        url
        stack {
          id
          title
        }
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`

export default IndexPage
