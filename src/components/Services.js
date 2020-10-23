import React from "react"
import Title from "./Title"
import services from "../constants/services"
import { Link } from "gatsby"
import Image from "gatsby-image"


const Services = () => {
  return (
    <section className="section bg-grey">
      <Title title="education" />
      <div className="section-center services-center">
        {services.map(service => {
          const { id, title, text, icon } = service
          return (
            <article key={id} className="service">
              <img src={icon} className='education-image' alt='university logo'/>
              <h4>{title}</h4>
              <div className="underline"></div>
              <p>{text}</p>
            </article>
          )
        })}
      </div>
      <a style={{color: 'black'}} href="https://docs.google.com/viewer?url=https://docs.google.com/document/d/1khQ-0XDSQ5qWLwYgaxeCi3w76r8-odxt1AUCGISVFok/export?format=pdf" className="btn center-btn" target='_blank'>
          See my CV
      </a>
    </section>
  )
}

export default Services
