import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
{
  site {
    siteMetadata {
      author
      siteDesc: description
      siteTitle: title
      twitterUsername
    }
  }
}
`

const SEO = ({title, description}) => {

  const {site} = useStaticQuery(query);
  const {siteDesc, author, siteTitle, twitterUsername} = site.siteMetadata;

  return <Helmet htmlAttributes={{lang:"en"}} title={`${title} | ${siteTitle}`}>
    <meta name='description' content={description || siteDesc}/>
    <link rel="icon"
            type="image/svg"
              href="../assets/logoSethy.svg"
        />
    {/* <meta name='image' content={image}/> */}
    {/* twitter cards */}
    {/* <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:creator" content={twitterUsername}/>
    <meta name="twitter:title" content={siteTitle}/>
    <meta name="twitter:description" content={siteDesc}/>
    <meta name="twitter:image" content={`${siteUrl}`}/> */}
  </Helmet>
}

export default SEO
