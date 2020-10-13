import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import Typical from 'react-typical'
const query = graphql`
  {
    file(relativePath: { eq: "logoSethy.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div className="underline"></div>
          <h1>i'm seth</h1>
          <Typical
        steps={['Hello', 1000, 'Hello world!', 500]}
        loop={Infinity}
        wrapper="h4"
        steps={[
          'developer 🚀',
          1500,
          'designer ✏️',
          1500,
          'engineer 🤓',
          1500,
          'surfer 🏄‍♂️',
          1500,
          'visionary 🧐',
          1500,
          'mentor 👨‍🏫',
          1500,
          ''
        ]}
      />
          <Link to="/contact" className="btn">
            contact me
          </Link>
          <SocialLinks />
        </article>
        <Image fluid={fluid} className="hero-img" />
      </div>
    </header>
  )
}

export default Hero
