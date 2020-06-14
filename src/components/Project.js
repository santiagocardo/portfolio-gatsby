import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
const Project = ({ title, description, github, url, image, stack }) => (
  <article className="project">
    <Image fluid={image.childImageSharp.fluid} className="project-img" />
    <div className="project-info">
      <h3>{title}</h3>
      <p className="project-desc">{description}</p>
      <div className="project-stack">
        {
          stack.map(({ id, name }) => <span key={id}>{name}</span>)
        }
      </div>
      <div className="project-links">
        {
          github && <a href={github}>
            <FaGithubSquare className="project-icon" target="_blank" rel="noopener noreferrer" />
          </a>
        }
        {
          url && <a href={url}>
            <FaShareSquare className="project-icon" target="_blank" rel="noopener noreferrer" />
          </a>
        }
      </div>
    </div>
  </article>
)

Project.propTypes = {}

export default Project
