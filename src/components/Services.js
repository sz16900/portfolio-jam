import React from "react"
import Title from "./Title"
import services from "../constants/services"
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
              <img src={icon} className='education-image'/>
              <h4>{title}</h4>
              <div className="underline"></div>
              <p>{text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Services
