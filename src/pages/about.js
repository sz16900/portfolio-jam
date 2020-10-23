import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import SEO from "../components/SEO"
import Image from "gatsby-image"

const About = ({data:{allStrapiAbout:{nodes}}}) => {
  const {title, stack, image, info} = nodes[0];

  return (
    <Layout>
      <SEO title='About' description='About Seth Zea' />
      <section className="about-page">
        <div className="section-center about-center">
          <Image fluid={image.childImageSharp.fluid} className="about-img" />
          <article className="about-text">
            <Title title={title}></Title>
            <p>{info}</p>
            <div className="about-stack">
              {stack.map((item)=>{
                return <span key={item.id}>{item.title}</span>
              })}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
} 
export const query = graphql`
  {
    allStrapiAbout {
      nodes {
        title
        stack {
          id
          title
        }
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid

            }
          }
        }
        info
      }
    }
  }
`
export default About
