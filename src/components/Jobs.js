import React, { useState } from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiJobs(sort: {fields: strapiId, order: DESC}) {
      nodes {
        strapiId
        company
        position
        date
        description {
          id
          name
        }
      }
    }
  }
`

const Jobs = () => {
  const { allStrapiJobs: { nodes: jobs } } = useStaticQuery(query)
  const [value, setValue] = useState(0)
  const { position, company, date, description } = jobs[value]

  return (
    <section className="section jobs">
      <Title title="Experience" />
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map(({strapiId, position}, index) => (
            <button
              key={strapiId}
              className={`job-btn ${index === value && 'active-btn'}`}
              onClick={() => setValue(index)}
            >
              {position}
            </button>
          ))}
        </div>
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {
            description.map(({id, name}) => (
              <div key={id} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{name}</p>
              </div>
            ))
          }
        </article>
      </div>
      <Link to="/" className="btn center-btn">more info</Link>
    </section>
  )
}

export default Jobs
