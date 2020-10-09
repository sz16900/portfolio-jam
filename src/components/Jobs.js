import React from "react"
import Title from "./Title"
import { FaAlignRight, FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiJobs(sort: { order: DESC, fields: id }) {
      nodes {
        strapiId
        company
        date
        position
        desc {
          name
          id
        }
      }
    }
  }
`
const Jobs = () => {
  // React State
  const [value, setValue] = React.useState(0)
  // React State

  const data = useStaticQuery(query)
  const {
    allStrapiJobs: { nodes: jobs },
  } = data
  const { company, position, desc, date } = jobs[value]
  return (
    <section className="section jobs">
      <Title title={"experience"} className="experience" />
      <div className="jobs-center">
        {/* Button container */}
        <div className="btn-container">
          {jobs.map((job, index) => {
            return (
              <button
                onClick={() => setValue(index)}
                key={job.strapiId}
                // if value equals index then add 'active-btn' ?????
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {job.company}
              </button>
            )
          })}
        </div>
        {/* Job Info */}
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {desc.map(item => {
            return (
              <div className="job-desc" key={item.id}>
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{item.name}</p>
              </div>
            )
          })}
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        more info
      </Link>
    </section>
  )
}

export default Jobs
