import React from "react" 
import berkeley from '../assets/berkeley.png'
import bristol from '../assets/bristol.png'
import microverse from '../assets/microverse.webp'
import { graphql, useStaticQuery } from "gatsby"

export default [
  {
    id: 1,
    icon: berkeley,
    title: "University of California, Berkeley",
    text: 'B.S in Comparative Literature',
  },
  {
    id: 2,
    icon: bristol,
    title: "University of Bristol",
    text: 'M.S in Computer Science',
  },
  {
    id: 3,
    icon: microverse,
    title: "MIcroverse",
    text: 'Full Stack Software Development School',
  },
]
