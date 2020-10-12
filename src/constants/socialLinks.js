import React from "react"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaGithub,
  FaAngellist,
  FaTwitterSquare,
} from "react-icons/fa"

const data = [

  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/seth-zea/",
  },
  {
    id: 3,
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: "https://github.com/sz16900/",
  },
  {
    id: 4,
    icon: <FaAngellist className="social-icon"></FaAngellist>,
    url: "https://angel.co/u/seth-zea/",
  },
  {
    id: 5,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://twitter.com/_sethzea_/",
  },
  {
    id: 1,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://www.facebook.com/seth.zea/",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
