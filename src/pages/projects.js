import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import Project from "../components/Project"

const ProjectsPage = ({ data: { allStrapiProjects: { nodes: projects } } }) => (
  <Layout>
    <section className="projects-page">
      <Projects projects={projects} title="all projects" />
    </section>
  </Layout>
)

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        strapiId
        title
        description
        github
        url
        featured
        image {
          childImageSharp {
            fluid {
            ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          name
        }
      }
    }
  }
`

export default ProjectsPage
