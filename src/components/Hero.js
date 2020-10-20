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
          'Frontend 🚀',
          1500,
          'Backend ✏️',
          1500,
          'FullStack 🤓',
          1500,
          'UI / UX 🏄‍♂️',
          1500,
          'Agile 🧐',
          1500,
          'Testing 👨‍🏫',
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
